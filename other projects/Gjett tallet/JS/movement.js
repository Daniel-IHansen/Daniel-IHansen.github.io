// Determines spawnpoint of Player 1 and 2.
viewportHeight = getAttributesById("body").height
viewportWidth = getAttributesById("body").width


// Basic varible additions
let player1XVel = 0;
let player1YVel = 0;
let player1X =  getAttributesById("player1").x;
let player1Y =  getAttributesById("player1").y;

let player2XVel = 0;
let player2YVel = 0;
let player2X =  getAttributesById("player2").x;
let player2Y =  getAttributesById("player2").y;

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

setInterval(function () { // Gradually lowers speed and sets speed based on input.
  let speed = 1;
  player1XVel *= 0.91;
  player1YVel *= 0.91;
  player2XVel *= 0.91;
  player2YVel *= 0.91;

  player1X += player1XVel;
  player1Y += player1YVel;
  document.getElementById("player1").style.left = player1X + "px";
  document.getElementById("player1").style.top = player1Y + "px";

  player2X += player2XVel;
  player2Y += player2YVel;
  document.getElementById("player2").style.left = player2X + "px";
  document.getElementById("player2").style.top = player2Y + "px";

  // For every frame, check if colliding with score point.
  scoreCollide(1)
  scoreCollide(2)

  //If if player is moving, change movement based on velocity.
  if (keys.w) {
    if (!wallCollide(1, 0, -20)) {
      player1YVel = -speed;
    }
  }
  if (keys.a) {
    if (!wallCollide(1, -20, 0)) {
      player1XVel = -speed;
    }
  }
  if (keys.s) {
    if (!wallCollide(1, 0, 20)) {
      player1YVel = speed;
    }
  }
  if (keys.d) {
    if (!wallCollide(1, 20, 0)) {
      player1XVel = speed;
    }
  }

  if (keys.ArrowDown) {
    if (!wallCollide(2, 0, 20)) {
    player2YVel = speed;
    }
  }
  if (keys.ArrowLeft) {
    if (!wallCollide(2, -20, 0)) {
    player2XVel = -speed;
    }
  }
  if (keys.ArrowRight) {
    if (!wallCollide(2, 0, 20)) {
    player2XVel = speed;
    }
  }
  if (keys.ArrowUp) {
    if (!wallCollide(2, 0, -20)) {
    player2YVel = -speed;
    }
  }
}, 10);



addEventListener("keydown", (event) => {
  if (event.key === "w") {
    keys.w = true;
  }
  if (event.key === "a") {
    scoreCollide(1)
    keys.a = true;
  }
  if (event.key === "s") {
    scoreCollide(1)
    keys.s = true;
    }
  if (event.key === "d") {
    scoreCollide(1)
    keys.d = true;
  }

  if (event.key === "ArrowUp") {
    keys.ArrowUp = true;
  }
  if (event.key === "ArrowLeft") {
    scoreCollide(1)
    keys.ArrowLeft = true;
  }
  if (event.key === "ArrowDown") {
    scoreCollide(1)
    keys.ArrowDown = true;
    }
  if (event.key === "ArrowRight") {
    scoreCollide(1)
    keys.ArrowRight = true;
  }


});

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

    if (event.key === "ArrowLeft") {
        keys.ArrowLeft = false;
    }
    if (event.key === "ArrowDown") {
        keys.ArrowDown = false;
    }
    if (event.key === "ArrowRight") {
        keys.ArrowRight = false;
    }
    if (event.key === "ArrowUp") {
        keys.ArrowUp = false;
    }
});

