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
/* STICKY NAVBAR */

window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 80) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});
/* SCROLL TO TOP */

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});
