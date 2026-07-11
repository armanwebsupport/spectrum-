const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
});

const menuLinks = document.querySelectorAll(".mobile-menu a");

menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        mobileMenu.classList.remove("active");
    });
});

document.addEventListener("click", (e) => {
    if (
        !mobileMenu.contains(e.target) &&
        !menuBtn.contains(e.target)
    ) {
        mobileMenu.classList.remove("active");
    }
});
/* PRELOADER */

window.addEventListener("load", () => {

    setTimeout(() => {

        document.getElementById("preloader").style.opacity = "0";

        setTimeout(() => {

            document.getElementById("preloader").style.display = "none";

        },800);

    },1500);

});
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});
