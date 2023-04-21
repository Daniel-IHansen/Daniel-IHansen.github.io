//  translateX = Y axis
//  translateY = X axis

function menuStart(){
  //  displays nav elements when animation starts
  document.getElementById("homeButton").style.display = "initial";
  document.getElementById("cv").style.display = "initial";
  document.getElementById("projects").style.display = "initial";
  document.getElementById("contact").style.display = "initial";

  //  animates my own card
  anime({
    targets: '#img5',
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
      targets: '#img1',
      translateY: flexScale(-83).vw,
      translateX: flexScale(37.5).vh,
      rotate: '100',
      easing: 'easeInOutQuint',
      duration: 750,
    });
    setTimeout(() => {
      anime({
        targets: '#img2',
        translateY: flexScale(-40.5).vw,
        translateX: flexScale(42).vh,
        rotate: '100',
        easing: 'easeInOutQuint',
        duration: 750,
      });
      setTimeout(() => {
        anime({
          targets: '#img3',
          translateY: flexScale(-32).vw,
          translateX: flexScale(42).vh,
          rotate: '100',
          easing: 'easeInOutQuint',
          duration: 750,
        });
        setTimeout(() => {
          anime({
            targets: '#img4',
            translateY: flexScale(-23,5).vw,
            translateX: flexScale(42).vh,
            rotate: '100',
            easing: 'easeInOutQuint',
            duration: 750,
          });
          setTimeout(() => {
            //  gradually reveals nav elements
            document.getElementById("homeButton").style.opacity = "1";
            setTimeout(() => {
              document.getElementById("cv").style.opacity = "1";
              setTimeout(() => {
                document.getElementById("projects").style.opacity = "1";
                setTimeout(() => {
                  document.getElementById("contact").style.opacity = "1";
                }, 300);
              }, 300);
            }, 400);
          }, 400);
        }, 200);
      }, 200);
    }, 200);
  }, 200);
}