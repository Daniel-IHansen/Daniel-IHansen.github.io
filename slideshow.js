slides = document.getElementsByClassName("explorerImg");
slideLengthArr = [];

for (let i = 0; i < slides.length; i++) {
    slideLengthArr.push(i);
}

function changeSlides(n){
    if (n == -1){
        slideEnd = slideLengthArr.pop()
        slideLengthArr += slideLengthArr.unshift(slideEnd)
    }


    n = 0;
}