// cart open and close
let menuIcon = document.querySelector("#menu-icon");
let menu = document.querySelector(".menu");
let closeMenu = document.querySelector("#close-menu");

// open cart
menuIcon.onclick = () => {
  menu.classList.add("active");
};
//  close cart
closeMenu.onclick = () => {
  menu.classList.remove("active");
};