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

// //  function for detecting if two objects are colliding
// function isColliding(object1id, object2id, side) {

//   //  sets object 1 position and sizeas
//   let object1X =  getAttributesById(object1id).x;
//   let object1Y =  getAttributesById(object1id).y;
//   let object1Width = getAttributesById(object1id).width;
//   let object1Height = getAttributesById(object1id).height;

//   //  sets object 2 position and size
//   let object2X = getAttributesById(object2id).x;
//   let object2Y = getAttributesById(object2id).y;
//   let object2Width = getAttributesById(object2id).width;
//   let object2Height = getAttributesById(object2id).height;

//   // will the top of object 1 collide with top of object 2?
//   if (side == "top") {
//     object1Y =  getAttributesById(object1id).y + 80;
//   }
//   else if (side == "left"){
//     object1X =  getAttributesById(object1id).x - 20;
//   }
//   else if (side == "bottom"){
//     object1Y =  getAttributesById(object1id).y + 20;
//   }
//   else if (side == "right"){
//     object1X =  getAttributesById(object1id).x - 20;
//   }

//   //  will object 1 collide with object 2?
//   if (object2X + object2Width > object1X &&
//     object2X < object1X + object1Width &&
//     object2Y + object2Height > object1Y &&
//     object2Y < object1Y + object1Height) {
//       return true;
//     }
//   else { 
//     return false;
//   }
// }

function wallCollide(player, pxOffsetX, pxOffsetY){

  let playerRectX =  getAttributesById(String("player" + player)).x + pxOffsetX;
  let playerRectY =  getAttributesById(String("player" + player)).y + pxOffsetY;
  let playerRectWidth = getAttributesById(String("player" + player)).width;
  let playerRectHeight = getAttributesById(String("player" + player)).height;

  let numOfHitboxes = document.getElementsByClassName("hitbox").length

  for (let i = 0; i < numOfHitboxes; i++) {
  
      let wallBoxId = "hitbox" + (i);
      let wallRectX = getAttributesById(wallBoxId).x +20;
      let wallRectY = getAttributesById(wallBoxId).y +20;
      let wallRectWidth = getAttributesById(wallBoxId).width -40;
      let wallRectHeight = getAttributesById(wallBoxId).height -40;
  

      //will player collide with the wall rectangle?
      if (wallRectX + wallRectWidth > playerRectX &&
          wallRectX < playerRectX + playerRectWidth &&
          wallRectY + wallRectHeight > playerRectY &&
          wallRectY < playerRectY + playerRectHeight
          ){
              return true
          }
  }   
}