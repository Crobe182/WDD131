const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelectorAll("nav a");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("change");
});