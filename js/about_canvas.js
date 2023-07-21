import '../css/style.css'
import * as THREE from 'three';
import {  MeshBasicMaterial } from 'three';
import { randomStar, addResizeListener } from './utils.js';

//LIGHTING IS DEAD LAST
var particles

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

//Create a quick background for a basic atmosphere 

//Create thin white torus's for atom (We need 3)
const geometry = new THREE.TorusGeometry(15,0.4,3,100);
const material = new THREE.MeshBasicMaterial({color: 0xffffff,wireframe: false,});
const torus = new THREE.Mesh(geometry, material);
torus.rotateX(90 * Math.PI / 180);
scene.add(torus);

//2nd Torus
const geometryOne = new THREE.TorusGeometry(20,0.4,3,100);
const materialOne = new THREE.MeshBasicMaterial({color: 0xffffff, wireframe:false});
const torusOne = new THREE.Mesh(geometryOne, materialOne);
torusOne.rotateX(45 * Math.PI / 180);
torusOne.rotateY(135 * Math.PI / 180);

scene.add(torusOne);

//3rd Torus 
const geometryTwo = new THREE.TorusGeometry(25,0.4,3,100);
const materialTwo = new THREE.MeshBasicMaterial({color: 0xffffff, wireframe:false});
const torusTwo = new THREE.Mesh(geometryTwo, materialTwo);
torusTwo.rotateX(45 * Math.PI / 180);
torusTwo.rotateY(45 * Math.PI / 180);

scene.add(torusTwo);

//Add Globe/Sphere(s)
const globeGeometry = new THREE.IcosahedronGeometry(10,0);
const globeMaterial = new MeshBasicMaterial({color: 0xffffff, wireframe:true, transparent: true, opacity: 0.5});
const globe = new THREE.Mesh(globeGeometry,globeMaterial);
scene.add(globe);

const innerCircle = new THREE.SphereGeometry(3.25,25,9);
const innerMaterial = new THREE.MeshBasicMaterial({color: 0xFFA500, wireframe: false, transparent: true, opacity: 0.7});
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

    torus.rotation.y += 0.005 ;
    torus.rotation.x += 0.015 ;

    torusOne.rotation.x += 0.010;
    torusOne.rotation.y += 0.005;
    torusTwo.rotation.y+= 0.005;
    torusTwo.rotation.x += 0.005;

    globe.rotation.y += 0.001
  
    renderer.render(scene, camera);
  }
   animate();

addResizeListener(renderer, camera);