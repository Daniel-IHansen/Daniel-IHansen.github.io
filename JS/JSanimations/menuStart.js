//  translateX = Y axis
//  translateY = X axis
let menuClosed = true;
function menuStart(){
  menuClosed = false;
  //  displays nav elements when animation starts
  document.getElementById("homeIcon").style.display = "initial";
  document.getElementById("cvText").style.display = "initial";
  document.getElementById("projectsText").style.display = "initial";
  document.getElementById("contactText").style.display = "initial";

  //  animates my own card
  anime({
    targets: '#cardDaniel',
    translateY: flexScale(-70).vw,
    translateX: flexScale(-10).vh,
    scale: 1.5,
    rotate: '90',
    easing: 'easeInOutQuint',
    duration: 750,
  });
    //  animates the nav elements
    setTimeout(() => {
    anime({
      targets: '#home',
      translateY: flexScale(-75).vw,
      translateX: flexScale(43).vh,
      rotate: '100',
      easing: 'easeInOutQuint',
      duration: 750,
    });
    setTimeout(() => {
      anime({
        targets: '#cv',
        translateY: flexScale(-35).vw,
        translateX: flexScale(48).vh,
        rotate: '100',
        easing: 'easeInOutQuint',
        duration: 750,
      });
      setTimeout(() => {
        anime({
          targets: '#projects',
          translateY: flexScale(-19).vw,
          translateX: flexScale(48).vh,
          rotate: '100',
          easing: 'easeInOutQuint',
          duration: 750,
        });
        setTimeout(() => {
          anime({
            targets: '#contact',
            translateY: flexScale(-9.5  ).vw,
            translateX: flexScale(48).vh,
            rotate: '100',
            easing: 'easeInOutQuint',
            duration: 750,
          });
          setTimeout(() => {
            //  gradually reveals nav elements
            document.getElementById("homeIcon").style.opacity = "1";
            setTimeout(() => {
              document.getElementById("cvText").style.opacity = "1";
              setTimeout(() => {
                document.getElementById("projectsText").style.opacity = "1";
                setTimeout(() => {
                  document.getElementById("contactText").style.opacity = "1";

                  //  turns all objects in nav clickable
                  document.getElementById("home").style.pointerEvents = "all"
                  document.getElementById("cv").style.pointerEvents = "all"
                  document.getElementById("projects").style.pointerEvents = "all"
                  document.getElementById("contact").style.pointerEvents = "all"
                  anime({
                    targets: "#homeIcon",
                    rotate: "1turn",
                    duration: "infinite",
                  })
                }, 300);
              }, 300);
            }, 400);
          }, 400);
        }, 200);
      }, 200);
    }, 200);
  }, 200);
}