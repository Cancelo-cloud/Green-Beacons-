
const contactModal = document.getElementById('contactModal');
let previousFocus;
function openModal() {
  previousFocus = document.activeElement;
  contactModal.classList.add('open');
  contactModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  contactModal.querySelector('.modal-close').focus();
}
function closeModal() {
  contactModal.classList.remove('open');
  contactModal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  if (previousFocus) previousFocus.focus();
}
contactModal.addEventListener('click', (e) => { if (e.target === contactModal) closeModal(); });
document.addEventListener('keydown', (e) => {
  if (!contactModal.classList.contains('open')) return;
  if (e.key === 'Escape') closeModal();
  if (e.key === 'Tab') {
    const controls = [...contactModal.querySelectorAll('button,a[href]')];
    const first = controls[0], last = controls[controls.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }
});
async function copyEmail() {
  const email = 's.madlala.pm@gmail.com';
  try { await navigator.clipboard.writeText(email); }
  catch (_) { window.prompt('Copy email address:', email); return; }
  const button = contactModal.querySelector('button[onclick="copyEmail()"]');
  button.textContent = 'Email copied';
  setTimeout(() => { button.textContent = 'Copy Email Address'; }, 2000);
}
