// Public review forms validate in the browser and never submit visitor data.
for (const form of document.querySelectorAll('[data-review-form]')) {
  let note = form.querySelector('[data-form-status]');
  if (!note) { note = document.createElement('p'); note.className = 'form-message'; note.setAttribute('role', 'status'); form.append(note); }
  let explanation = document.createElement('p');
  explanation.className = 'form-note';
  explanation.textContent = 'Review demo: these forms do not send or store your information.';
  if (!form.textContent.includes(explanation.textContent)) form.append(explanation);
  form.addEventListener('submit', event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    note.textContent = form.dataset.reviewForm === 'customer'
      ? 'Demo complete. No signup was recorded. The launch list will be connected in Shopify.'
      : 'Demo complete. No message was sent or saved. Contact delivery will be connected in Shopify.';
    form.reset();
  });
  form.querySelectorAll('button[type="submit"]').forEach(button => { button.disabled = false; });
}
