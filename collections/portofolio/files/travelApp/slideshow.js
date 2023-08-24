//  defines slides and slideCounter
let slides = document.getElementsByClassName("slide");
let slideCounter = 0;

setInterval(() => {
    slideCounter++;
    if (slideCounter == slides.length) {
        slides[(slideCounter-1)].style.opacity = 0;
        slideCounter = 0;
    };

    if (slides[slideCounter-1]){
        slides[(slideCounter-1)].style.opacity = 0;
    }
    slides[slideCounter].style.opacity = 1;
}, 3000);