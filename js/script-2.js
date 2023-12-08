document.addEventListener("DOMContentLoaded", function () {
    const burgerMenu = document.querySelector(".burger-menu");
    const navLinks = document.querySelector(".nav-links");
 
    burgerMenu.addEventListener("click", function () {
       navLinks.style.display =
          navLinks.style.display === "flex" || navLinks.style.display === ""
             ? "none"
             : "flex";
    });
 });