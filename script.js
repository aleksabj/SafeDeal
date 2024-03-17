// image-slider.js
document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".image-holder img");
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = 'none'; // Hide all slides
        });
        slides[index].style.display = 'block'; // Show the current slide
    }

    document.querySelector(".right-arrow").addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % slides.length; // Move to next slide
        showSlide(currentIndex);
    });

    document.querySelector(".left-arrow").addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length; // Move to previous slide
        showSlide(currentIndex);
    });

    showSlide(currentIndex); // Initialize the slider with the first slide
});
