const toggleBtnBars = document.getElementsByClassName('toggle-btn-bars')[0];
const toggleBtnTimes = document.getElementsByClassName('toggle-btn-times')[0];
const navBarLinks = document.getElementsByClassName('navbar-links')[0];

toggleBtnBars.addEventListener('click', () => {
  navBarLinks.classList.toggle('show');
})
