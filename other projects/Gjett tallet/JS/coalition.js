// function wallCollide(player, pxOffsetX, pxOffsetY){

//     let playerRectX =  getAttributesById(String("player" + player)).x + pxOffsetX;
//     let playerRectY =  getAttributesById(String("player" + player)).y + pxOffsetY;
//     let playerRectWidth = getAttributesById(String("player" + player)).width;
//     let playerRectHeight = getAttributesById(String("player" + player)).height;

//     let numOfHitboxes = document.getElementsByClassName("hitbox").length

//     for (let i = 0; i < numOfHitboxes; i++) {
    
//         let wallBoxId = "hitbox" + (i + 1);
//         let wallRectX = getAttributesById(wallBoxId).x +20;
//         let wallRectY = getAttributesById(wallBoxId).y +20;
//         let wallRectWidth = getAttributesById(wallBoxId).width -40;
//         let wallRectHeight = getAttributesById(wallBoxId).height -40;
    

//         //will player collide with the wall rectangle?
//         if (wallRectX + wallRectWidth > playerRectX &&
//             wallRectX < playerRectX + playerRectWidth &&
//             wallRectY + wallRectHeight > playerRectY &&
//             wallRectY < playerRectY + playerRectHeight
//             ){
//                 return true
//             }
//     }   
// }