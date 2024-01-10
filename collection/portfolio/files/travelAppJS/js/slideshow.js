//  defines slides and slideCounter
let slides = document.getElementsByClassName("slide");
let slideCounter = 0;

//  loops the code every 4.5 sec
setInterval(() => {
    //  checks if any slides exist
    if (slides.length > 0) {
        slideCounter++;
        //  if the counter is more than the amount of slides, it resets
        if (slideCounter == slides.length) {
            slides[(slideCounter - 1)].style.opacity = 0;
            slideCounter = 0;
        }
    
        //  updates the slides based on the counter
        if (slides[slideCounter - 1]) {
            slides[(slideCounter - 1)].style.opacity = 0;
        }
        slides[slideCounter].style.opacity = 1;
    }
}, 4500);