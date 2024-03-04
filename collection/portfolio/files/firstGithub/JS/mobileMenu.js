/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger */
function showMenu() {
    var x = document.getElementById("mobileMenu");
    if (x.style.opacity === "1") {
      var intervalID = setInterval(() => {
        x.style.opacity -= 0.1;
        if (x.style.opacity == 0) {
          clearInterval(intervalID);
        }
      }, 10);
    } else {
      let opacity = 0;
      var intervalID = setInterval(() => {
        opacity += 0.1;
        x.style.opacity = opacity;
        if (parseFloat(x.style.opacity) == 1) {
          clearInterval(intervalID);
        }
      }, 10);
    }
  }