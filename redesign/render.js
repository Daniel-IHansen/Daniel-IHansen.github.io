//  imports three.js, OrbitalControls and GLTFLoader
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

//  places the room inside the renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById("container3D").appendChild(renderer.domElement);

//  defines the scene and camera
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(30, 30, 0);

//  finds the middle of the screen, and generates orbitalcontrols
let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

//  places the oribital controls inside renderer
let controls;
controls = new OrbitControls(camera, renderer.domElement);

//  ROOM GENERATION
let room;

//  imports a GLTF object
const loader = new GLTFLoader();
loader.load('/redesign/models/rom.gltf', function(gltf) {
    room = gltf.scene;
    room.scale.set(10, 10, 10);

    //  show mesh configs
    console.log(room);


    // create light source material with emission
    const lightSourceMat1 = new THREE.MeshPhongMaterial({
        emissive: 0xffffff,
        emissiveIntensity: 1,
    });

    // create light source material with emission
    const lightSourceMat2 = new THREE.MeshPhongMaterial({
        emissive: 0xffd6a1,
        emissiveIntensity: 1,
    });

    // assign material to table lamp material
    room.getObjectByName("Cylinder001").material = lightSourceMat1;

    // assign material to lightbulb material
    for (let i = 1; i <= 12; i++) {
        //  adds an extra "0" in case of name
        let addressingNull = "";
        if (i < 10) {
            addressingNull = "0";
        }
        room.getObjectByName(`Sphere0${addressingNull + i}`).material = lightSourceMat2;
    };

    // assign material to standing lamp material
    room.getObjectByName("Cylinder004").material = lightSourceMat1;

    room.castShadow = true;
    room.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.castShadow = true;
      }
    });

    //  MESH CONFIG
    

    scene.add(room);
});


//  LIGHTING
//  generates a ambient light
const light = new THREE.AmbientLight(0xffefb5, .05);
scene.add(light);

// Sun definition, position, and addition
const sun = new THREE.DirectionalLight(0xffefb5, .3);
sun.position.set(-80, 20, 100);
scene.add(sun)
const helper = new THREE.DirectionalLightHelper(sun, 5);
scene.add(helper);

// defines a class for a point light
class cusPointLight extends THREE.PointLight {
    constructor(color, intensity, distance, x, y, z) {
      super(color, intensity);
      this.position.set(x, y, z);
      this.distance = distance;
      this.intensity = intensity;
      this.addToScene(scene);
    }
  
    addToScene(scene) {
      scene.add(this);
    }
  
    setIntensity(intensity) {
      this.intensity = intensity;
    }
  }

//  makes a new light (table lamp)
const tableLamp = new cusPointLight(0xe2af62, 2, 50, 32, 15, 32);

//  makes a new light (standing lamp)
const standingLamp = new cusPointLight(0xe2af62, 2, 50, -28, 25, -22);

//  defines 12 light bulbs
function lightbulbPlacement() {
    let color = 0xffb04f;
    let intensity = 1;
    let distance = 20;

    const lightBulb0 = new cusPointLight(color, intensity, distance, 32.2, 35.5, 35);
    const lightBulb1 = new cusPointLight(color, intensity, distance, 24.2, 35.5, 35);
    const lightBulb2 = new cusPointLight(color, intensity, distance, 19.5, 36.4, 35);
    const lightBulb3 = new cusPointLight(color, intensity, distance, 13, 36, 35);
    const lightBulb4 = new cusPointLight(color, intensity, distance, 7.3, 36.5, 35);
    const lightBulb5 = new cusPointLight(color, intensity, distance, 1.5, 36.5, 35);
    const lightBulb6 = new cusPointLight(color, intensity, distance, -4, 35.3, 35);
    const lightBulb7 = new cusPointLight(color, intensity, distance, -8.5, 37, 35);
    const lightBulb8 = new cusPointLight(color, intensity, distance, -14, 36, 35);
    const lightBulb9 = new cusPointLight(color, intensity, distance, -18.2, 36.5, 35);
    const lightBulb10 = new cusPointLight(color, intensity, distance, -23.7, 36, 35);
    const lightBulb11 = new cusPointLight(color, intensity, distance, -28.3, 35, 35);
};
lightbulbPlacement();

//  animation loop
function animate() {
    requestAnimationFrame(animate);

    renderer.render(scene, camera);
}
animate();

let oldx = 900;
let oldy = 900;
window.onmousemove = function(ev) {
  let changex = ev.x - oldx;
  let changey = ev.y - oldy;
  camera.rotation.x += changex/6000;
  camera.rotation.y -= changey/3600;

  oldx = ev.x
  oldy = ev.y;
}