(() => {
  const selector = '[data-wardrobe-gallery]';
  if (window.OxidaraWardrobe) { window.OxidaraWardrobe.init(document); return; }
  const instances = new WeakMap();
  const preloadCache = new Map();
  const viewNames = { garment: 'Garment', model: 'On model', active: 'Active' };
  const colorNames = { olive: 'Olive', ink: 'Ink', stone: 'Stone', 'red-earth': 'Red Earth' };
  const rootsWithin = scope => [ ...(scope.matches?.(selector) ? [scope] : []), ...scope.querySelectorAll(selector) ];
  function preload(asset, sizes) {
    const key = `${asset.src}|${sizes}|${window.innerWidth}|${window.devicePixelRatio || 1}`;
    if (!preloadCache.has(key)) {
      const promise = new Promise((resolve, reject) => {
        const next = new Image();
        next.onload = async () => { try { await next.decode(); } catch {} resolve(next); };
        next.onerror = () => { preloadCache.delete(key); reject(new Error('Image unavailable')); };
        next.sizes = sizes;
        next.srcset = asset.srcset;
        next.src = asset.src;
      });
      preloadCache.set(key, promise);
    }
    return preloadCache.get(key);
  }
  function initialize(scope = document) {
    rootsWithin(scope).forEach(root => {
      if (instances.has(root)) return;
      const image = root.querySelector('[data-wardrobe-image]');
      const assetTemplate = root.querySelector('template[data-wardrobe-assets]');
      if (!image || !assetTemplate) return;
      const assets = new Map();
      assetTemplate.content.querySelectorAll('a[href]').forEach(link => {
        const key = `${link.dataset.color}/${link.dataset.view}`;
        const asset = assets.get(key) || { candidates: [] };
        asset.candidates.push(`${link.href} ${link.dataset.width}w`);
        if (link.dataset.native === 'true') Object.assign(asset, { src: link.href, width: link.dataset.width, height: link.dataset.height });
        assets.set(key, asset);
      });
      assets.forEach(asset => { asset.srcset = asset.candidates.join(', '); });
      const imageSizes = image.sizes || '(max-width: 760px) calc(100vw - 44px), 46vw';
      const colors = [...root.querySelectorAll('button[data-color]')];
      const views = [...root.querySelectorAll('button[data-wardrobe-view]')];
      const label = root.querySelector('[data-color-selection]');
      const status = root.querySelector('[data-wardrobe-status]');
      const error = root.querySelector('[data-wardrobe-error]');
      const controller = new AbortController();
      let selected = { color: root.dataset.color || 'olive', view: root.dataset.view || 'garment' };
      let desired = { ...selected };
      let request = 0;
      const publish = () => {
        root.dataset.color = selected.color;
        root.dataset.view = selected.view;
        colors.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.color === selected.color)));
        views.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.wardrobeView === selected.view)));
        if (label) label.textContent = colorNames[selected.color];
        if (status) status.textContent = `${colorNames[selected.color]} · ${viewNames[selected.view]}`;
      };
      const select = async change => {
        desired = { ...desired, ...change };
        const next = { ...desired };
        let source = assets.get(`${next.color}/${next.view}`);
        // A missing optional view must deliberately fall back to the matching garment.
        if (!source) { next.view = 'garment'; source = assets.get(`${next.color}/garment`); }
        if (!source) return;
        const thisRequest = ++request;
        root.setAttribute('aria-busy', 'true');
        if (error) { error.hidden = true; error.textContent = ''; }
        try {
          await preload(source, imageSizes);
          if (thisRequest !== request || controller.signal.aborted) return;
          image.sizes = imageSizes;
          image.srcset = source.srcset;
          image.src = source.src;
          image.width = Number(source.width);
          image.height = Number(source.height);
          image.alt = `${root.dataset.name} in ${colorNames[next.color]} — ${viewNames[next.view].toLowerCase()}`;
          selected = next;
          desired = { ...next };
          publish();
        } catch {
          if (thisRequest !== request || controller.signal.aborted) return;
          desired = { ...selected };
          if (error) { error.hidden = false; error.textContent = 'That image could not load. Please try the color again.'; }
          if (status) status.textContent = `Image unavailable. Still showing ${colorNames[selected.color]} · ${viewNames[selected.view]}.`;
        } finally {
          if (thisRequest === request) root.removeAttribute('aria-busy');
        }
      };
      const warm = change => {
        const state = { ...desired, ...change };
        const source = assets.get(`${state.color}/${state.view}`);
        if (source) preload(source, imageSizes).catch(() => {});
      };
      const bind = (buttons, changeFor) => buttons.forEach((button, index) => {
        const options = { signal: controller.signal };
        button.addEventListener('click', () => select(changeFor(button)), options);
        button.addEventListener('pointerenter', () => warm(changeFor(button)), options);
        button.addEventListener('focus', () => warm(changeFor(button)), options);
        button.addEventListener('keydown', event => {
          if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
          let next;
          if (event.key === 'ArrowRight' || event.key === 'ArrowDown') next = (index + 1) % buttons.length;
          else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') next = (index - 1 + buttons.length) % buttons.length;
          else if (event.key === 'Home') next = 0;
          else if (event.key === 'End') next = buttons.length - 1;
          else return;
          event.preventDefault();
          buttons[next].focus();
          select(changeFor(buttons[next]));
        }, options);
      });
      bind(colors, button => ({ color: button.dataset.color }));
      bind(views, button => ({ view: button.dataset.wardrobeView }));
      publish();
      instances.set(root, controller);
    });
  }
  const destroy = scope => rootsWithin(scope).forEach(root => { instances.get(root)?.abort(); instances.delete(root); });
  window.OxidaraWardrobe = { init: initialize, destroy };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', () => initialize(), { once: true });
  else initialize();
  document.addEventListener('shopify:section:load', event => initialize(event.target));
  document.addEventListener('shopify:section:unload', event => destroy(event.target));
})();
