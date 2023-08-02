// //  NOTE TO SELF: Whenever you want to add more imports SPESEFICALLY from three.js, remember to use the 'https://unpkg.com/three@0.126.1...'!!
// //  main module
// import * as THREE from 'https://unpkg.com/three@0.126.1/build/three.module.js';

// //  addons
// import { OrbitControls } from 'https://unpkg.com/three@0.126.1/examples/jsm/controls/OrbitControls.js';
// import { GLTFLoader } from 'https://unpkg.com/three@0.126.1/examples/jsm/loaders/GLTFLoader.js';
// //  post processing
// import { EffectComposer } from 'https://unpkg.com/three@0.126.1/examples/jsm/postprocessing/EffectComposer.js';
// import { RenderPass } from 'https://unpkg.com/three@0.126.1/examples/jsm/postprocessing/RenderPass.js';


// //  places the room inside the renderer
// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.getElementById("container3D").appendChild(renderer.domElement);

// //  defines the scene and camera
// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// export { camera }
// //  finds the middle of the screen, and generates orbitalcontrols
// let mouseX = window.innerWidth / 2;
// let mouseY = window.innerHeight / 2;

// //  places the oribital controls inside renderer
// let controls;
// controls = new OrbitControls(camera, renderer.domElement);
// controls.enableDamping = true;
// controls.dampingFactor = 0.04;

// //  ROOM GENERATION
// let room;

// //  imports a GLTF object
// const loader = new GLTFLoader();
// loader.load('/redesign/media/models/rom.gltf', function(gltf) {
//   room = gltf.scene;
//   room.scale.set(10, 10, 10);

//   // create light source material with emission
//   const lightSourceMat1 = new THREE.MeshPhongMaterial({
//     emissive: 0xffffff,
//     emissiveIntensity: .8,
//   });

//   // create light source material with emission
//   const lightSourceMat2 = new THREE.MeshPhongMaterial({
//       emissive: 0xffd6a1,
//       emissiveIntensity: .5,
//   });

//   // assign material to table lamp material
//   room.getObjectByName("Cylinder001").material = lightSourceMat1;

//   // assign material to lightbulb material
//   for (let i = 1; i <= 12; i++) {
//     //  adds an extra "0" in case of name
//     let addressingNull = "";
//     if (i < 10) {
//         addressingNull = "0";
//     }
//     room.getObjectByName(`Sphere0${addressingNull + i}`).material = lightSourceMat2;
//   };

//   // assign material to standing lamp material
//   room.getObjectByName("Cylinder004").material = lightSourceMat1;

//   scene.add(room);
// });

// //  LIGHTING

// //  generates a ambient light
// const light = new THREE.AmbientLight(0xffefb5, .5);
// scene.add(light);

// // defines a class for a point light
// class cusPointLight extends THREE.PointLight {
//     constructor(color, intensity, distance, x, y, z) {
//       super(color, intensity);
//       this.position.set(x, y, z);
//       this.distance = distance;
//       this.intensity = intensity;
//       this.addToScene(scene);
//     }
  
//     addToScene(scene) {
//       scene.add(this);
//     }
  
//     setIntensity(intensity) {
//       this.intensity = intensity;
//     }
//   }

// //  makes a new light (table lamp)
// const tableLamp = new cusPointLight(0xe2af62, 2, 50, 32, 15, 32);

// //  makes a new light (standing lamp)
// const standingLamp = new cusPointLight(0xe2af62, 2, 50, -28, 25, -22);

// //  defines 12 light bulbs
// function lightbulbPlacement() {
//     let color = 0xffb04f;
//     let intensity = .5;
//     let distance = 20;

//     const lightBulb0 = new cusPointLight(color, intensity, distance, 32.2, 35.5, 35);
//     const lightBulb1 = new cusPointLight(color, intensity, distance, 24.2, 35.5, 35);
//     const lightBulb2 = new cusPointLight(color, intensity, distance, 19.5, 36.4, 35);
//     const lightBulb3 = new cusPointLight(color, intensity, distance, 13, 36, 35);
//     const lightBulb4 = new cusPointLight(color, intensity, distance, 7.3, 36.5, 35);
//     const lightBulb5 = new cusPointLight(color, intensity, distance, 1.5, 36.5, 35);
//     const lightBulb6 = new cusPointLight(color, intensity, distance, -4, 35.3, 35);
//     const lightBulb7 = new cusPointLight(color, intensity, distance, -8.5, 37, 35);
//     const lightBulb8 = new cusPointLight(color, intensity, distance, -14, 36, 35);
//     const lightBulb9 = new cusPointLight(color, intensity, distance, -18.2, 36.5, 35);
//     const lightBulb10 = new cusPointLight(color, intensity, distance, -23.7, 36, 35);
//     const lightBulb11 = new cusPointLight(color, intensity, distance, -28.3, 35, 35);
// };
// lightbulbPlacement();

// //  POST PROCESSING
// const renderScene = new RenderPass(scene, camera);
// const composer = new EffectComposer(renderer);
// composer.addPass(renderScene);

// function animate() {

//     composer.render();
//     controls.update();
//     requestAnimationFrame(animate);

// }
// animate();

// // let oldx = 900;
// // let oldy = 900;
// // window.onmousemove = function(ev) {
// //   let changex = ev.x - oldx;
// //   let changey = ev.y - oldy;
// //   camera.rotation.y -= changex/6000;
// //   camera.rotation.x -= changey/6000;

// //   oldx = ev.x
// //   oldy = ev.y;
// // }