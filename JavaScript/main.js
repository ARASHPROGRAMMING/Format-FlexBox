let menu = document.querySelector(".menu");
let menuBtn = document.querySelector(".header__icon");
let menuBtnIcon = document.querySelector(".header__icon i");

menuBtn.addEventListener("click", () => {
  if (menuBtnIcon.classList.contains("fa-bars")) {
    menu.style.top = "0";
    menuBtnIcon.classList = "fa fa-times";
  } else {
    menu.style.top = "-403px";
    menuBtnIcon.classList = "fa fa-bars";
  }
});
// libaray Js
AOS.init();

