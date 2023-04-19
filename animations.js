function img1(){
  console.log("test")
  anime({
    targets: '#img1',
    easing: 'easeInOutQuint',
    keyframes: [
      {translateY: -40},
      {translateX: 250, duration: 2000},
      {translateY: 40},
      {translateX: 0},
      {translateY: 0}
    ],
  });
}