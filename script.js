// script.js
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const images = document.querySelectorAll(".gallery-item");
let currentIndex = 0;

function showLightbox(index) {
    currentIndex = index;
    lightboxImage.src = images[index].querySelector("img").src;
    lightbox.style.display = "flex";
}

function closeLightbox() {
    lightbox.style.display = "none";
}

function showNext() {
    currentIndex = (currentIndex + 1) % images.length;
    showLightbox(currentIndex);
}

function showPrevious() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showLightbox(currentIndex);
}

images.forEach((item, index) => {
    item.addEventListener("click", (e) => {
        e.preventDefault();
        showLightbox(index);
    });
});

document.querySelector(".close").addEventListener("click", closeLightbox);
document.querySelector(".next").addEventListener("click", showNext);
document.querySelector(".prev").addEventListener("click", showPrevious);

// Close lightbox on background click
lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
});
