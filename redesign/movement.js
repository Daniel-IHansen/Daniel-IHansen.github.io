// Import the necessary modules
import { camera } from "/redesign/render.js";

// Animates the camera position and rotation
gsap.set(camera.position, {
  x: 20,
  y: 23,
  z: -20,
});
gsap.set(camera.rotation, {
    x: 0,
    y: 0,
    z: 0,
  });