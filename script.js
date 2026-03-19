const Mbar = document.getElementById("Mbar");
const navLinks = document.getElementById("navLinks");

Mbar.addEventListener("click", () => {
    navLinks.classList.toggle("nav-active");
    Mbar.classList.toggle("active");
});