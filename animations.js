function menuStart(){
  console.log("test")
  anime({
    targets: '#img5',
    translateY: -1100,
    translateX: -110,
    scale: 2.5,
    rotate: '90',
    easing: 'easeInOutQuint',
    duration: 750,
  });
  setTimeout(() => {
    anime({
      targets: '#img1',
      translateY: -1320,
      translateX: 270,
      rotate: '100',
      scale: '1.5',
      easing: 'easeInOutQuint',
      duration: 750,
    });
    setTimeout(() => {
      anime({
        targets: '#img2',
        translateY: -600,
        translateX: 300,
        rotate: '100',
        scale: '1.2',
        easing: 'easeInOutQuint',
        duration: 750,
      });
      setTimeout(() => {
        anime({
          targets: '#img3',
          translateY: -480,
          translateX: 300,
          rotate: '100',
          scale: '1.2',
          easing: 'easeInOutQuint',
          duration: 750,
        });
        setTimeout(() => {
          anime({
            targets: '#img4',
            translateY: -360,
            translateX: 300,
            rotate: '100',
            scale: '1.2',
            easing: 'easeInOutQuint',
            duration: 750,
          });
        }, 200);
      }, 200);
    }, 200);
  }, 200);
}