// basic varible additions
let playerXVel = 0;
let playerYVel = 0;
let playerX =  getAttributesById("player").x;
let playerY =  getAttributesById("player").y;

//  makes a key array
const keys = {
  w: false,
  a: false,
  s: false,
  d: false,
  ArrowLeft: false,
  ArrowDown: false,
  ArrowRight: false,
  ArrowUp: false
};

setInterval(function() {
  //  gradually lowers speed and sets speed based on input
  const speed = 1.8;
  playerXVel *= 0.91;
  playerYVel *= 0.91;

  //  is player colliding with wall?
  let collisionDetected = false;
  for (let i = 0; i < document.getElementsByClassName("hitbox").length; i++) {
    if (keys.w) {
      if (!isColliding("player", ("hitbox" + i), "top")) {
        console.log(isColliding("player", ("hitbox" + i), "top"))
        collisionDetected = true;
        playerYVel = -speed;
      }
    }
    if (keys.a) {
      if (!isColliding("player", "hitbox" + i, "left")){
        collisionDetected = true;
        playerXVel = -speed;
      }
    }
    if (keys.s) {
      if (!isColliding("player", "hitbox" + i, "bottom")){
        collisionDetected = true;
        playerYVel = speed;
      }
    }
    if (keys.d) {
      if (!isColliding("player", "hitbox" + i, "right")){
        collisionDetected = true;
        playerXVel = speed;
      }
    }
    if (!isColliding("player", "hitbox" + i)){
      collisionDetected = true;
    }
  }

  if (collisionDetected) {
    playerX += playerXVel;
    playerY += playerYVel;
  }
  
  // updates the player position
  document.getElementById("player").style.left = playerX + "px";
  document.getElementById("player").style.top = playerY + "px";

//  determines the player refresh rate
}, 30);

//  listens to player key down
addEventListener("keydown", (event) => {
  if (event.key === "w") {
    keys.w = true;
  }
  if (event.key === "a") {
    keys.a = true;
  }
  if (event.key === "s") {
    keys.s = true;
    }
  if (event.key === "d") {
    keys.d = true;
  }
});

//  listens to player key up
addEventListener("keyup", (event) => {
  if (event.key === "w") {
      keys.w = false;
    }
    if (event.key === "a") {
      keys.a = false;
    }
    if (event.key === "s") {
        keys.s = false;
      }
    if (event.key === "d") {
        keys.d = false;
    }
});

