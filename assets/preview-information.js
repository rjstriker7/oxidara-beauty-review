(() => {
  const dialog = document.getElementById('preview-information');
  if (!dialog) return;
  let opener;
  document.addEventListener('click', event => {
    const trigger = event.target.closest('[data-preview-open]');
    if (trigger) { opener = trigger; dialog.showModal(); }
    if (event.target.closest('[data-preview-close]')) dialog.close();
    if (event.target === dialog) { const box = dialog.getBoundingClientRect(); if(event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) dialog.close(); }
  });
  dialog.addEventListener('close', () => opener?.focus());
})();
