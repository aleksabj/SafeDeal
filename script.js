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


window.addEventListener('scroll', function() {
    var fixedButtonsLeft = document.querySelectorAll('.fixed-button-left');
    var fixedButtonsRight = document.querySelectorAll('.fixed-buttons-right .fixed-button');

    var changeOpacity = function(buttons, opacity) {
        buttons.forEach(function(button) {
            button.style.opacity = opacity;
        });
    };

    var scrollPosition = window.scrollY;

    var threshold = 50; 

    if (scrollPosition > threshold) {
        changeOpacity(fixedButtonsLeft, 0.5);
        changeOpacity(fixedButtonsRight, 0.5);
    } else {
        changeOpacity(fixedButtonsLeft, 1);
        changeOpacity(fixedButtonsRight, 1);
    }
});
