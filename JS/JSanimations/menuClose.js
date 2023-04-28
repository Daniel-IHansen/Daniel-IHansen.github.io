function menuClose(page) {
  // gradually hides main elements
  document.getElementById("cardLText").style.opacity = "0";
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
    document.getElementById("cardLText").style.display = "none";
    document.getElementById("cardStack").style.pointerEvents = "all";
    menuClosed = true;
    setTimeout(() => {
      window.location.replace("./pages/" + page + "/index.html");
    }, 1200);
  }, 375);
  }