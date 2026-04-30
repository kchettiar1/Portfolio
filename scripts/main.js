const menuToggle = document.getElementById('menu-toggle');
const navbarLinks = document.getElementById('navbar-links');

if (menuToggle && navbarLinks) {
  menuToggle.addEventListener('click', () => {
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!expanded));
    navbarLinks.classList.toggle('active');
  });
}
