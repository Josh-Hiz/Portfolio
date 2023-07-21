import * as THREE from 'three';

export function randomStar(starGroup){
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const starMaterial = new THREE.MeshBasicMaterial({color: 0xffffff, wireframe: true});
    const star = new THREE.Mesh(geometry, starMaterial);
  
    const [x,y,z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(500));
    star.position.set(x,y,z);
    star.userData.rx = Math.random() * 0.01 - 0.005;
    star.userData.ry = Math.random() * 0.01 - 0.005;
    star.userData.rz = Math.random() * 0.01 - 0.005;
    starGroup.add(star);
  }
  
export function addResizeListener(renderer, camera){
    window.addEventListener('resize', function(){
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
    });
}