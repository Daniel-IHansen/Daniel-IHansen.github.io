//  gets distance of two coordinates
function getDistance(x1, y1, x2, y2) {
  let y = x2 - x1;
  let x = y2 - y1;
  
  return Math.sqrt(x * x + y * y);
}

//  returns position and size based on id
function getAttributesById(element) { 
  const rect = document.getElementById(element).getBoundingClientRect();
  return {
    x: rect.left + window.scrollX,
    y: rect.top + window.scrollY,
    width: rect.width,
    height: rect.height
  };
}

//  vw to px converter
function flexScale(viewportVar) {
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  let vw = (viewportVar * viewportWidth) / 100;
  let vh = (viewportVar * viewportHeight) / 100;
  return {
    vw,
    vh
  };
}