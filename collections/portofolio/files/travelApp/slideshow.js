//  defines slides and slideCounter
let slides = document.getElementsByClassName("slide");
let slideCounter = 0;

//  loops the code every 4.5 sec
setInterval(() => {
    if (document.getElementsByClassName("slide")){
        slideCounter++;
        if (slideCounter == slides.length) {
            slides[(slideCounter-1)].style.opacity = 0;
            slideCounter = 0;
        };
    
        if (slides[slideCounter-1]){
            slides[(slideCounter-1)].style.opacity = 0;
        }
        slides[slideCounter].style.opacity = 1;
    }
}, 4500);