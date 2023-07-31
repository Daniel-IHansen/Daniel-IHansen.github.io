//  imports three.js, OrbitalControls and GLTFLoader
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

//  defines the scene and camera
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = -20;
camera.position.y = 20;
camera.position.x = -20;
camera.rotation.set(0, 0, 0);


//  finds the middle of the screen, and generates orbitalcontrols
let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;
let controls;

//  ROOM GENERATION
let room;

//  imports a GLTF object
const loader = new GLTFLoader();
loader.load('/redesign/models/rom.gltf', function(gltf) {
    room = gltf.scene;
    room.scale.set(10, 10, 10);

    //  show mesh configs
    console.log(room.getObjectByName("Cylinder001"));


    // create light source material with emission
    const lightSourceMat = new THREE.MeshPhongMaterial({
        emissive: 0xffffff,
        emissiveIntensity: 1.0,
    });

    // assigns material to 
    room.getObjectByName("Cylinder001").material = lightSourceMat;

    scene.add(room);
});


//  places the room inside the renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById("container3D").appendChild(renderer.domElement);

//  generates a ambient light
const light = new THREE.AmbientLight(0xe2af62, .05);
scene.add(light);

// generates and appends a point light
const pointLight = new THREE.PointLight(0xe2af62, 10);
pointLight.position.set(32, 15, 32);
pointLight.distance = 50;
pointLight.intensity = 2
scene.add(pointLight);

const lightHelper = new THREE.PointLightHelper(pointLight);
scene.add(lightHelper);

//  places the oribital controls inside renderer
controls = new OrbitControls(camera, renderer.domElement);

//  animation loop
function animate() {
    requestAnimationFrame(animate);

    renderer.render(scene, camera);
}
animate();