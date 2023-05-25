// 0 = null
// 1 = full wall
// 2 = top wall
// 3 = right wall
// 4 = bottom wall
// 5 = left wall
// 6 = top-right corner wall
// 7 = bottom-right corner wall
// 8 = bottom-left corner wall
// 9 = top-left corner wall
// 10 = top-left to bottom-right diagonal wall
// 11 = small wall

//defines map hitboxes
var mapHitbox = [
  [0,0,0,0,0,0,0,0,0],
  [0,9,5,5,8,5,5,0,0],
  [0,0,0,0,0,0,0,0,0],
  [0,6,0,3,4,0,0,1,11],
  [0,2,0,4,4,3,3,0,0],
  [0,2,0,9,0,8,0,0,11],
  [0,10,0,0,0,0,0,11,1],
  [0,0,10,6,3,7,0,0,1],
  [1,0,0,0,0,0,0,0,0]
]


//goes through map and sets hitboxes at everything over 0
setTimeout(() => {
  maingridX = getAttributesById("maingrid").x;
  maingridY = getAttributesById("maingrid").y;

  for (let x = 0; x < 9; x++) {
  
    for (let y = 0; y < 9; y++) {
      
      var curTile = mapHitbox[x][y]
      curTilePosX = 60*x
      curTilePosY = 60*y


      if(curTile == 1 ){
        createHitbox(curTile,curTilePosX,curTilePosY,"60px","60px",0)
      }
      else if (curTile == 2){
        createHitbox(curTile,curTilePosX,curTilePosY,"22px","60px",0)
      }
      else if (curTile == 3){
        createHitbox(curTile,curTilePosX,curTilePosY,"22px","60px",90)
      }
      else if (curTile == 4){
        createHitbox(curTile,curTilePosX,curTilePosY,"22px","60px",180)
      }
      else if (curTile == 5){
        createHitbox(curTile,curTilePosX,curTilePosY,"22px","60px",270)
      }
      else if (curTile == 6){
        createHitbox(curTile,curTilePosX,curTilePosY,"22px","60px",0)
        createHitbox(curTile,curTilePosX,curTilePosY,"22px","60px",90)
      }
      else if (curTile == 7){
        createHitbox(curTile,curTilePosX,curTilePosY,"22px","60px",90)
        createHitbox(curTile,curTilePosX,curTilePosY,"22px","60px",180)
      }
      else if (curTile == 8){
        createHitbox(curTile,curTilePosX,curTilePosY,"22px","60px",180)
        createHitbox(curTile,curTilePosX,curTilePosY,"22px","60px",270)
      }
      else if (curTile == 9){
        createHitbox(curTile,curTilePosX,curTilePosY,"22px","60px",270)
        createHitbox(curTile,curTilePosX,curTilePosY,"22px","60px",0)
      }
      else if (curTile == 10){
        createHitbox(curTile,curTilePosX,curTilePosY,"22px","80px",45)
      }
      else if (curTile == 11){
        createHitbox(curTile,curTilePosX,curTilePosY,"30px","30px")
      }
    }
  }
}, 1);

let hitboxNum = 0;
//sets hitbox based on type and position to be in
function createHitbox(boundaryType,x,y,h,w,rot){

  const hitbox = document.createElement("div");
  hitbox.setAttribute("class", "hitbox");

  hitboxNum++;
  hitbox.setAttribute("id","hitbox" + hitboxNum);

  if(rot == 0){
    hitbox.style.left = x + "px";
    hitbox.style.top = y + "px";
    hitbox.style.rotate = rot + "deg";
  }
  else if(rot == 90){
    hitbox.style.left = x + 20 + "px";
    hitbox.style.top = y + 20 + "px";
    hitbox.style.rotate = rot + "deg";
  }
  else if(rot == 180){
    hitbox.style.left = x  + "px";
    hitbox.style.top = y + 40 + "px";
    hitbox.style.rotate = rot + "deg";
  }
  else if(rot == 270){
    hitbox.style.left = x - 20 + "px";
    hitbox.style.top = y + 20 + "px";
    hitbox.style.rotate = rot + "deg";
  }
  else if(rot == 45){
    hitbox.style.left = x - 10 + "px";
    hitbox.style.top = y + 25 + "px";
    hitbox.style.rotate = rot + "deg";
  }
  else{
    hitbox.style.left = x + 15 + "px";
    hitbox.style.top = y + 15 + "px";
    hitbox.style.rotate = rot + "deg";
  }


  hitbox.style.margin = "0";
    if(boundaryType >= 1){
      hitbox.style.height = h;
      hitbox.style.width = w;
  }
  document.getElementById("mapHitbox").appendChild(hitbox);
}