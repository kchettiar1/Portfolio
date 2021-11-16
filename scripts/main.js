const toggleBtnBars = document.getElementById('toggle-btn-bars')[0];
const navBarLinks = document.getElementsByClassName('navbar-links')[0];

toggleBtnBars.addEventListener('click', () => {
  navBarLinks.classList.toggle('show');
})

// const wrapper = document.getElementById('hamburger-wrapper')

// wrapper.addEventListener("click", () => {
//   wrapper.classList.toggle("open")
// })