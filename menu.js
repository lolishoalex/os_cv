const nav = document.querySelector(".navbar");

let menuElement = document.querySelector(".menu");

document
  .querySelector(".c-hamburger-line")
  .addEventListener("click", function (e) {
    e.preventDefault();
    this.classList.toggle("is-active");
    menuElement.classList.toggle("is-active");
  });

// toggle("is-active") !!!!!
// document.querySelector(".menu").addEventListener("click", function (e) {
//   e.preventDefault();
//   menuElement.style.maxHeight = "0";
// });

// hello
