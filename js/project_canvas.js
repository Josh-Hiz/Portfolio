import '../css/style.css'
import * as THREE from 'three';
import { MeshBasicMaterial } from 'three';
import { randomStar, addResizeListener } from './utils.js';
var particles

//Author: Josh H 
// MIT License 

//Create Scene
//Create Camera (perspective)
//Create Renderer

//Create Black canvas to mimic space

//Create Black Transparent Atom with white out line 
//Create extremely thin white torus ring around globe to mimic saturn 
//The Torus could be a wireframe, that rotates along its x axis slowly to mimic saturns ring movements
//Place Globe far away from user but big enough to be seen well 

//Create randomly generated Cubes of the same size with a maximum of 250 cubes within the scene
//Rotate each generated cube in a random x, y, and z direction 
//Make sure the cube generation does not interfere with globe

particles = new Array();

const scene = new THREE.Scene(); //Add new scene

const camera = new THREE.PerspectiveCamera (80, window.innerWidth / window.innerHeight, 0.1, 1000); //Apply a perspective camera

const renderer = new THREE.WebGLRenderer({  //Render the scene
  canvas: document.querySelector('#background')
});

renderer.setPixelRatio(window.devicePixelRatio); //Set the pixel ratio to the window device ratio
renderer.setSize(window.innerWidth, window.innerHeight); //Make it full screen
camera.position.setZ(50); 
camera.position.setY(0); 

renderer.render(scene, camera);

const outerRing = new THREE.TorusGeometry(40,2,30,3,6.283185307179586);
const outerMaterial = new THREE.MeshBasicMaterial( { color: 0xffffff, wireframe: true, transparent: true, opacity: 0.5 } );
const torus = new THREE.Mesh( outerRing, outerMaterial );

const innerRing = new THREE.TorusGeometry(30,2,30,3,6.283185307179586);
const innerTorus = new THREE.Mesh( innerRing, outerMaterial );

const thirdRing = new THREE.TorusGeometry(20,2,30,3,6.283185307179586);
const thirdTorus = new THREE.Mesh( thirdRing, outerMaterial );


scene.add( innerTorus );
scene.add( thirdTorus );
//Add Globe/Sphere(s)
const globeGeometry = new THREE.DodecahedronGeometry(5,5);
const globeMaterial = new MeshBasicMaterial({color: 0xffffff, wireframe:true, transparent: true, opacity: 0.5});
const globe = new THREE.Mesh(globeGeometry,globeMaterial);
scene.add(globe);

const innerCircle = new THREE.SphereGeometry(2.25,25,9);
const innerMaterial = new THREE.MeshBasicMaterial({color: 0xC0C0C0, wireframe: false, transparent: true, opacity: 0.7});
const innerGlobe = new THREE.Mesh(innerCircle, innerMaterial);
scene.add(innerGlobe);

const starGroup = new THREE.Group();
scene.add(starGroup);
Array(1500).fill().forEach(() => randomStar(starGroup));

//Animate Atom
const animate = function() {
    requestAnimationFrame( animate );
  
    starGroup.children.forEach(star => {
      star.rotation.x += star.userData.rx;
      star.rotation.y += star.userData.ry;
      star.rotation.z += star.userData.rz;
    });
    torus.rotation.z -= 0.001
    innerTorus.rotation.z += 0.001
    thirdTorus.rotation.z -= 0.002

    globe.rotation.y += 0.001
  
    renderer.render(scene, camera);
  }
   animate();

addResizeListener(renderer, camera);
