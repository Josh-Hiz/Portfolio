import '../css/style.css'
import * as THREE from 'three';
import { MeshBasicMaterial } from 'three';
import { randomStar, addResizeListener } from './utils.js';

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

//Add Globe/Sphere(s)
const globeGeometry = new THREE.TorusKnotGeometry(10,1.1,300,20,8,7);
const globeMaterial = new MeshBasicMaterial({color: 0xffffff, wireframe:true, transparent: true, opacity: 0.5});
const globe = new THREE.Mesh(globeGeometry,globeMaterial);
scene.add(globe);

const innerCircle = new THREE.SphereGeometry(3.25,25,9);
const innerMaterial = new THREE.MeshBasicMaterial({color: 0xFF0000, wireframe: false, transparent: true, opacity: 0.7});
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

    globe.rotation.z += 0.001  
    renderer.render(scene, camera);
  }
   animate();

addResizeListener(renderer, camera);