//Daniel's library for storage of useful things.


//  gets distance of two cordinates
function getDistance(x1, y1, x2, y2) {
    let y = x2 - x1;
    let x = y2 - y1;
    
    return Math.sqrt(x * x + y * y);
}

//  vw to px converter
function flexScale(viewportVar) {
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  let vw = (viewportVar*viewportWidth)/100;
  let vh = (viewportVar*viewportHeight)/100;
  return {
    vw,
    vh
  }
}