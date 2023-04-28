function menuClose() {  
      // gradually hides main elements
      document.getElementById("cardLText").style.opacity = "0";
            // animates the main elements
                  // animates my own card back to its original position
                  anime({
                    targets: '#cardDaniel',
                    translateY: 0,
                    translateX: 0,
                    scale: 1,
                    rotate: '0',
                    easing: 'easeInOutQuint',
                    duration: 1000,
                  });
                  //  hides main elements when animation ends
                  setTimeout(() => {
                    document.getElementById("cardLText").style.display = "none";
                    menuClosed = true;
                  }, 375);
  }