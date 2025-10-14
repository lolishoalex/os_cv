const nav = document.querySelector(".navbar");
let menuElement = document.querySelector(".menu");
const hamburger = document.querySelector(".c-hamburger-line");

hamburger.addEventListener("click", function (e) {
  e.preventDefault();
  e.stopPropagation();
  this.classList.toggle("is-active");
  menuElement.classList.toggle("is-active");
});

document.addEventListener("click", function (e) {
  const isClickInsideNav = nav.contains(e.target);
  const isHamburgerClick = hamburger.contains(e.target);

  if (
    !isClickInsideNav &&
    !isHamburgerClick &&
    menuElement.classList.contains("is-active")
  ) {
    hamburger.classList.remove("is-active");
    menuElement.classList.remove("is-active");
  }
});

nav.addEventListener("click", function (e) {
  e.stopPropagation();
});
