const carousel = document.querySelector(".carousel");
const slides = document.querySelectorAll(".slide");
const pageNav = document.getElementById("page-nav");
let counter = 0;

const dots = [];
slides.forEach((slide, idx) => {
    slide.style.left = `${idx * 100}%`;
});

function createDots() {
    slides.forEach((_, idx) => {
        const dot = document.createElement("span");
        dot.classList.add("page");
        dot.addEventListener("click", () => {
            counter = idx;
            slideImage();
        });
        pageNav.appendChild(dot);
        dots.push(dot);
    });
}
createDots();
updateDots();

function updateDots() {
    dots.forEach((dot, idx) => {
        dot.classList.toggle("active", idx === counter);
    });
}

function slideImage() {
    slides.forEach(slide => {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
    updateDots();
}

function getNext() {
    counter = (counter + 1) % slides.length;
    slideImage();
}

function getPrev() {
    counter = (counter - 1 + slides.length) % slides.length;
    slideImage();
}

setInterval(getNext, 5000);