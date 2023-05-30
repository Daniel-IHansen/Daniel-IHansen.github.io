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
  let notColliding = true;
    for (let i = 0; i < document.getElementsByClassName("hitbox").length; i++) {
      if (!isColliding("player", ("hitbox" + i), "top")) {
        if (keys.w) {
          playerYVel = -speed;  
        }
      }
      else {
        notColliding = false;
      }
    }
  for (let i = 0; i < document.getElementsByClassName("hitbox").length; i++) {
      if (!isColliding("player", ("hitbox" + i), "left")) {
        if (keys.a) {
        playerXVel = -speed;  
      }
    }
    else {
      notColliding = false;
    }
    if (!isColliding("player", ("hitbox" + i), "bottom")) {
      if (keys.s) {
        playerYVel = speed;  
      }
    }
    else {
      notColliding = false;
    }
    if (!isColliding("player", ("hitbox" + i), "right")) {
      if (keys.d) {
        playerXVel = speed;  
      }
    }
    else {
      notColliding = false;
    }
  }

  if (notColliding) {
    playerX += playerXVel;
    playerY += playerYVel;
  }
  
  // updates the player position
  document.getElementById("player").style.left = playerX + "px";
  document.getElementById("player").style.top = playerY + "px";

//  determines the player refresh rate
}, 20);

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

