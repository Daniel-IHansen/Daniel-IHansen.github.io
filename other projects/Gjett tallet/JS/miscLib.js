//Daniel's library for storage of useful things.



// To comment selected code, use Ctrl + K + C
//To uncomment it, use Ctrl + K + U



//gets distance of two cordinates
function getDistance(x1, y1, x2, y2){
    let y = x2 - x1;
    let x = y2 - y1;
    
    return Math.sqrt(x * x + y * y);
}

//returns position based on id
function getAttributesById(element) { 
    const rect = document.getElementById(element).getBoundingClientRect();
    return {
      x: rect.left + window.scrollX,
      y: rect.top + window.scrollY,
      width: rect.width,
      height: rect.height
    };
  }

