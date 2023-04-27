function menuClose() {
    //  turns all objects in nav unclickable
    document.getElementById("home").style.pointerEvents = "none";
    document.getElementById("cv").style.pointerEvents = "none";
    document.getElementById("projects").style.pointerEvents = "none";
    document.getElementById("contact").style.pointerEvents = "none";
  
    setTimeout(() => {
      // gradually hides nav elements
      document.getElementById("contactText").style.opacity = "0";
      document.getElementById("cardLText").style.opacity = "0";
      setTimeout(() => {
        document.getElementById("projectsText").style.opacity = "0";
        setTimeout(() => {
          document.getElementById("cvText").style.opacity = "0";
          setTimeout(() => {
            document.getElementById("homeIcon").style.opacity = "0";
            // animates the nav elements
            anime({
              targets: '#contact',
              translateY: 0,
              translateX: 0,
              rotate: 0,
              easing: 'easeInOutQuint',
              duration: 750,
            });
            setTimeout(() => {
              anime({
                targets: '#projects',
                translateY: 0,
                translateX: 0,
                rotate: 0,
                easing: 'easeInOutQuint',
                duration: 750,
              });
              setTimeout(() => {
                anime({
                  targets: '#cv',
                  translateY: 0,
                  translateX: 0,
                  rotate: 0,
                  easing: 'easeInOutQuint',
                  duration: 750,
                });
                setTimeout(() => {
                  anime({
                    targets: '#home',
                    translateY: 0,
                    translateX: 0,
                    rotate: 0,
                    easing: 'easeInOutQuint',
                    duration: 750,
                  });
                  // animates my own card back to its original position
                  anime({
                    targets: '#cardDaniel',
                    translateY: 0,
                    translateX: 0,
                    scale: 1,
                    rotate: '0',
                    easing: 'easeInOutQuint',
                    duration: 750,
                  });
                  //  hides nav elements when animation ends
                  setTimeout(() => {
                    document.getElementById("homeIcon").style.display = "none";
                    document.getElementById("cvText").style.display = "none";
                    document.getElementById("projectsText").style.display = "none";
                    document.getElementById("contactText").style.display = "none";
                    document.getElementById("cardLText").style.display = "none";
                    //  enables pointer events for the card stack
                    document.getElementById("cardStack").style.pointerEvents = "all";
                    menuClosed = true;
                  }, 375);
                }, 100);
              }, 100);
            }, 100);
          }, 150);
        }, 150);
      }, 200);
    }, 200);
  }