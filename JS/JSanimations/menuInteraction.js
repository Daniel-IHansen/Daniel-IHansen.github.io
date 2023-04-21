var hoverElem = document.getElementsByClassName("hover")

//  for every element with hover
for (var i = 0; i < hoverElem.length; i++) {
    hoverElem[i].addEventListener('mouseenter', function(e) {
      enterHover(e.target);
    }, false);
    
    hoverElem[i].addEventListener('mouseleave', function(e) {
      leaveHover(e.target)
    }, false);  
}
  
//  when the element enters a hovering state
function enterHover(elem) {
animateHover(elem, 1.1, 800, 400)
};
//  when the element exits a hovering state
function leaveHover(elem) {
animateHover(elem, 1.0, 600, 300)
};

//  utelizes different states to execute a hover animation
//  NOTE: the hovering object cannot have a pre-scale increase
function animateHover(elem, scale, duration, elasticity) {
    anime.remove(elem);
    anime({
      targets: elem,
      scale: scale,
      duration: duration,
      elasticity: elasticity
    });
  }

