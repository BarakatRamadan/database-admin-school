// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
}

// Articles search — currently filters an empty list.
// When articles are added as elements with [data-title], this will filter them live.
const searchBox = document.getElementById('searchBox');
if (searchBox) {
  searchBox.addEventListener('input', () => {
    const term = searchBox.value.trim().toLowerCase();
    document.querySelectorAll('[data-title]').forEach(el => {
      const match = el.dataset.title.toLowerCase().includes(term);
      el.style.display = match ? '' : 'none';
    });
  });
}
