const body = document.querySelector("body");
const btnHamburger = document.getElementById("btnHamburger");
const header = document.querySelector(".header");
const headerLinks = document.querySelector(".header__links");
const overlay = document.querySelector(".overlay");

const fadeElements = document.querySelectorAll(".fade");

btnHamburger.addEventListener("click", function () {
  if (header.classList.contains("open")) {
    // Close Hamburger Menu
    body.classList.remove("noscroll");
    header.classList.remove("open");
    headerLinks.classList.add("hide-for-mobile");
    fadeElements.forEach((fadeElement) => {
      fadeElement.classList.remove("fade-in");
      fadeElement.classList.add("fade-out");
    });
    // overlay.classList.remove('fade-in');
    // overlay.classList.add('fade-out');
  } else {
    // Open Hamburger Menu
    body.classList.add("noscroll");
    header.classList.add("open");
    headerLinks.classList.remove("hide-for-mobile");
    fadeElements.forEach((fadeElement) => {
      fadeElement.classList.remove("fade-out");
      fadeElement.classList.add("fade-in");
    });
    // overlay.classList.remove('fade-out');
    // overlay.classList.add('fade-in');
  }
});
