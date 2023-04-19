function bob(){
  console.log("test")
  anime({
    targets: '#test',
    translateX: -250,
    easing: 'easeInOutQuint',
    duration: 1000
  });
}