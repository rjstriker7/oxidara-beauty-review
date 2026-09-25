(() => {
  const selector = '[data-concept-gallery]';
  if (window.OxidaraConceptGallery) {
    window.OxidaraConceptGallery.init(document);
    return;
  }

  const galleries = new WeakMap();
  const rootsWithin = (scope) => [
    ...(scope.matches?.(selector) ? [scope] : []),
    ...scope.querySelectorAll(selector),
  ];

  const init = (scope = document) => {
    rootsWithin(scope).forEach((root) => {
      if (galleries.has(root)) return;
      const image = root.querySelector('img[data-concept-image]');
      const buttons = Array.from(root.querySelectorAll('button[data-concept-src]'))
        .filter((button) => button.closest(selector) === root && !button.disabled);
      if (!image || !buttons.length) return;

      const controller = new AbortController();
      const caption = root.querySelector('[data-concept-caption]');
      let current = Math.max(0, buttons.findIndex((button) => button.getAttribute('aria-pressed') === 'true'));

      const markSelected = () => buttons.forEach((button, index) => {
        button.setAttribute('aria-pressed', String(index === current));
        if (image.id) button.setAttribute('aria-controls', image.id);
      });

      const select = (index) => {
        const button = buttons[index];
        const source = button.dataset.conceptSrc;
        if (!source) return;
        current = index;
        image.removeAttribute('srcset');
        image.removeAttribute('sizes');
        image.src = source;
        image.alt = button.dataset.conceptAlt || '';
        if (caption && button.dataset.conceptLabel !== undefined) {
          caption.textContent = button.dataset.conceptLabel;
        }
        markSelected();
      };

      markSelected();
      buttons.forEach((button, index) => {
        button.addEventListener('click', () => select(index), { signal: controller.signal });
        button.addEventListener('keydown', (event) => {
          if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
          let next;
          if (event.key === 'ArrowRight') next = (index + 1) % buttons.length;
          else if (event.key === 'ArrowLeft') next = (index - 1 + buttons.length) % buttons.length;
          else if (event.key === 'Home') next = 0;
          else if (event.key === 'End') next = buttons.length - 1;
          else return;
          event.preventDefault();
          select(next);
          buttons[next].focus();
        }, { signal: controller.signal });
      });
      galleries.set(root, controller);
    });
  };

  const destroy = (scope) => {
    rootsWithin(scope).forEach((root) => {
      galleries.get(root)?.abort();
      galleries.delete(root);
    });
  };

  window.OxidaraConceptGallery = { init, destroy };
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => init(), { once: true });
  } else init();
  document.addEventListener('shopify:section:load', (event) => init(event.target));
  document.addEventListener('shopify:section:unload', (event) => destroy(event.target));
})();
