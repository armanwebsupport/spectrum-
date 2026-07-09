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
