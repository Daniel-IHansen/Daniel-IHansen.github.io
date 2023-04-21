//  translateX = Y axis
//  translateY = X axis
let menuClosed = true;
function menuStart(){
  menuClosed = false;
  //  displays nav elements when animation starts
  document.getElementById("homeIcon").style.display = "initial";
  document.getElementById("cv").style.display = "initial";
  document.getElementById("projects").style.display = "initial";
  document.getElementById("contact").style.display = "initial";

  //  animates my own card
  anime({
    targets: '#cardDaniel',
    translateY: flexScale(-70).vw,
    translateX: flexScale(-10).vh,
    scale: 2,
    rotate: '90',
    easing: 'easeInOutQuint',
    duration: 750,
  });
    //  animates the nav elements
    setTimeout(() => {
    anime({
      targets: '#card0',
      translateY: flexScale(-83).vw,
      translateX: flexScale(37.5).vh,
      rotate: '100',
      easing: 'easeInOutQuint',
      duration: 750,
    });
    setTimeout(() => {
      anime({
        targets: '#card1',
        translateY: flexScale(-40.5).vw,
        translateX: flexScale(42).vh,
        rotate: '100',
        easing: 'easeInOutQuint',
        duration: 750,
      });
      setTimeout(() => {
        anime({
          targets: '#card2',
          translateY: flexScale(-32).vw,
          translateX: flexScale(42).vh,
          rotate: '100',
          easing: 'easeInOutQuint',
          duration: 750,
        });
        setTimeout(() => {
          anime({
            targets: '#card3',
            translateY: flexScale(-23,5).vw,
            translateX: flexScale(42).vh,
            rotate: '100',
            easing: 'easeInOutQuint',
            duration: 750,
          });
          setTimeout(() => {
            //  gradually reveals nav elements
            document.getElementById("homeIcon").style.opacity = "1";
            setTimeout(() => {
              document.getElementById("cv").style.opacity = "1";
              setTimeout(() => {
                document.getElementById("projects").style.opacity = "1";
                setTimeout(() => {
                  document.getElementById("contact").style.opacity = "1";

                  //  turns all objects in nav clickable
                  document.getElementById("card0").style.pointerEvents = "all"
                  document.getElementById("card1").style.pointerEvents = "all"
                  document.getElementById("card2").style.pointerEvents = "all"
                  document.getElementById("card3").style.pointerEvents = "all"
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