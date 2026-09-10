const dialog = document.querySelector('.figure-dialog');
const expanded = dialog.querySelector('figure img');
const caption = dialog.querySelector('figcaption');
const close = () => dialog.close();
document.querySelectorAll('.publication-thumbnail').forEach(link => {
  link.addEventListener('click', event => {
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey || typeof dialog.showModal !== 'function') return;
    event.preventDefault();
    const thumbnail = link.querySelector('img');
    expanded.src = link.href;
    expanded.alt = thumbnail.alt;
    caption.textContent = link.closest('article').querySelector('h3').textContent;
    dialog.showModal();
  });
});
dialog.querySelector('.figure-close').addEventListener('click', close);
dialog.addEventListener('click', event => { if (event.target === dialog) close(); });
