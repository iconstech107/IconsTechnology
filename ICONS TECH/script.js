/* ================= GLOBAL BASE SCRIPT ================= */
/* Project: iCons Technology */
/* Purpose: Global initialization & shared logic */

document.addEventListener("DOMContentLoaded", function () {
    // Reserved for global initializations if needed
});
/* ================= HERO BACKGROUND IMAGE ROTATION ================= */

const slides = document.querySelectorAll(".hero-slide");
let current = 0;

setInterval(() => {
    slides[current].classList.remove("active");
    current = (current + 1) % slides.length;
    slides[current].classList.add("active");
}, 4000);
