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
/* LIGHTBOX */

const galleryImages = document.querySelectorAll(".gallery-grid img");

const lightbox = document.getElementById("lightbox");

const lightboxImg = document.getElementById("lightboxImg");

const closeLightbox = document.getElementById("closeLightbox");

galleryImages.forEach(img=>{

img.addEventListener("click",()=>{

lightbox.style.display="flex";

lightboxImg.src=img.src;

});

});

closeLightbox.addEventListener("click",()=>{

lightbox.style.display="none";

});

lightbox.addEventListener("click",(e)=>{

if(e.target===lightbox){

lightbox.style.display="none";

}

});
/* TESTIMONIAL SLIDER */

const testimonials = document.querySelectorAll(".testimonial");

let currentTestimonial = 0;

function showTestimonial(){

    testimonials.forEach((item)=>{

        item.classList.remove("active");

    });

    testimonials[currentTestimonial].classList.add("active");

    currentTestimonial++;

    if(currentTestimonial>=testimonials.length){

        currentTestimonial=0;

    }

}

showTestimonial();

setInterval(showTestimonial,4000);
/* COUNTER ANIMATION */

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const counter = entry.target;
            const target = +counter.getAttribute("data-target");

            let count = 0;

            const updateCounter = () => {

                const increment = target / 100;

                if (count < target) {

                    count += increment;

                    counter.innerText = Math.ceil(count) + "+";

                    requestAnimationFrame(updateCounter);

                } else {

                    counter.innerText = target + "+";

                }

            };

            updateCounter();

            counterObserver.unobserve(counter);

        }

    });

});

counters.forEach(counter => {

    counterObserver.observe(counter);

});
/* BOOKING POPUP */

const bookingModal = document.getElementById("bookingModal");
const bookNowBtn = document.getElementById("bookNowBtn");
const contactBookBtn = document.getElementById("contactBookBtn");
const closeBooking = document.getElementById("closeBooking");

bookNowBtn.addEventListener("click", () => {
    bookingModal.style.display = "flex";
});
contactBookBtn.addEventListener("click", () => {
    bookingModal.style.display = "flex";
});
closeBooking.addEventListener("click", () => {
    bookingModal.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target === bookingModal) {
        bookingModal.style.display = "none";
    }
});
/* ==========================
   PREMIUM SERVICES ACCORDION
========================== */

const serviceItems = document.querySelectorAll(".service-item");

serviceItems.forEach(item => {

    const title = item.querySelector(".service-title");

    title.addEventListener("click", () => {

        // Agar ek time me sirf ek accordion open rakhna hai
        serviceItems.forEach(other => {

            if (other !== item) {
                other.classList.remove("active");
                other.querySelector(".service-content").style.maxHeight = null;
            }

        });

        item.classList.toggle("active");

        const content = item.querySelector(".service-content");

        if (item.classList.contains("active")) {
            content.style.maxHeight = content.scrollHeight + "px";
        } else {
            content.style.maxHeight = null;
        }

    });

});
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});
// FAQ Toggle

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {
        item.classList.toggle("active");
    });
});
/* EMAILJS BOOKING */

const bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit", function (e) {

    e.preventDefault();

    emailjs.send("service_qkv4ooq", "template_qozx6pp", {

        name: document.getElementById("name").value,

        phone: document.getElementById("phone").value,

        email: document.getElementById("email").value,

        date: document.getElementById("date").value,

        message: document.getElementById("message").value

    })

    .then(() => {

        alert("✅ Appointment request sent successfully!");

        bookingForm.reset();

        document.getElementById("bookingModal").style.display = "none";

    })

    .catch((error) => {

        alert("❌ Failed to send. Please try again.");

        console.error(error);

    });

});
