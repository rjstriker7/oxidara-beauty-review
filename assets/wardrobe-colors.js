(() => {
  function initialize(scope = document) {
    scope.querySelectorAll('[data-wardrobe-colors]').forEach(group => {
      if (group.dataset.colorsReady) return;
      group.dataset.colorsReady = 'true';
      const buttons = [...group.querySelectorAll('button[data-color-name]')];
      const select = button => {
        buttons.forEach(option => option.setAttribute('aria-pressed', String(option === button)));
        group.querySelector('[data-color-selection]').textContent = button.dataset.colorName;
        group.querySelector('[data-color-preview]').style.backgroundColor = button.dataset.colorTone;
      };
      buttons.forEach((button, index) => {
        button.addEventListener('click', () => select(button));
        button.addEventListener('keydown', event => {
          if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
          let next;
          if (event.key === 'ArrowRight' || event.key === 'ArrowDown') next = (index + 1) % buttons.length;
          if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') next = (index - 1 + buttons.length) % buttons.length;
          if (event.key === 'Home') next = 0;
          if (event.key === 'End') next = buttons.length - 1;
          if (next === undefined) return;
          event.preventDefault();
          buttons[next].focus();
          select(buttons[next]);
        });
      });
    });
  }
  initialize();
  document.addEventListener('shopify:section:load', event => initialize(event.target));
})();
