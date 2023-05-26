// basic varible additions
let playerXVel = 0;
let playerYVel = 0;
let playerX =  getAttributesById("player").x;
let playerY =  getAttributesById("player").y;


//  makes a key array
let keys = {
  w: false,
  a: false,
  s: false,
  d: false,
  ArrowLeft: false,
  ArrowDown: false,
  ArrowRight: false,
  ArrowUp: false
};

// gradually lowers speed and sets speed based on input
setInterval(function () { 
  let speed = 1.8;
  playerXVel *= 0.95;
  playerYVel *= 0.95;

  playerX += playerXVel;
  playerY += playerYVel;
  document.getElementById("player").style.left = playerX + "px";
  document.getElementById("player").style.top = playerY + "px";

  //  if player is moving, change movement based on velocity
  // if (keys.w) {
  //   if (!wallCollide(1, 0, -20)) {
  //     playerYVel = -speed;
  //   }
  // }
  // if (keys.a) {
  //   if (!wallCollide(1, -20, 0)) {
  //     playerXVel = -speed;
  //   }
  // }
  // if (keys.s) {
  //   if (!wallCollide(1, 0, 20)) {
  //     playerYVel = speed;
  //   }
  // }
  // if (keys.d) {
  //   if (!wallCollide(1, 20, 0)) {
  //     playerXVel = speed;
  //   }
  // }
  if (keys.w) {
    playerYVel = -speed;
  }
  if (keys.a) {
    playerXVel = -speed;
  }
  if (keys.s) {
    playerYVel = speed;
  }
  if (keys.d) {
    playerXVel = speed;
  }
}, 10);

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

