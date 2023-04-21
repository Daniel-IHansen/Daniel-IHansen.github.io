var hoverElem = document.getElementsByClassName("hover")

for (var i = 0; i < hoverElem.length; i++) {
    hoverElem[i].addEventListener('mouseenter', function(e) {
      enterHover(e.target);
    }, false);
    
    hoverElem[i].addEventListener('mouseleave', function(e) {
      leaveHover(e.target)
    }, false);  
}
  
function enterHover(elem) {
animateHover(elem, 1.1, 800, 400)
};

function leaveHover(elem) {
animateHover(elem, 1.0, 600, 300)
};

function animateHover(elem, scale, duration, elasticity) {
    anime.remove(elem);
    anime({
      targets: elem,
      scale: scale,
      duration: duration,
      elasticity: elasticity
    });
  }