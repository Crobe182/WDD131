const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelectorAll("nav a");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("change");

    navLinks.forEach(link => {
        link.style.display = link.style.display === "block" ? "none" : "block";
    });
});

window.addEventListener("resize", () => {
    if (window.innerWidth >= 700) {
        menuBtn.classList.remove("change");
        navLinks.forEach(link => (link.style.display = "inline"));
    } else {
        navLinks.forEach(link => (link.style.display = "none"));
    }
});