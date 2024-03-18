document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".image-holder img");
    let currentIndex = 0; 

    function showSlide(index) {
        slides.forEach(slide => slide.style.display = 'none');
        slides[index].style.display = 'block';
    }

    showSlide(currentIndex);

    document.querySelector(".right-arrow").addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % slides.length; 
        showSlide(currentIndex);
    });

    document.querySelector(".left-arrow").addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length; 
        showSlide(currentIndex);
    });
});