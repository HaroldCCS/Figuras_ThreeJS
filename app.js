const scene = new THREE.Scene();
scene.background = new THREE.Color(0x2a3b4c);
scene.fog = new THREE.Fog(0x76456c,0.1,8)


const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight
);
camera.position.z = 6;


const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


const geometry = new THREE.BoxGeometry(1.5, 1.5, 1.5);
const material = new THREE.MeshBasicMaterial({
    color: 0x00ff00,
});
const cube = new THREE.Mesh(geometry, material);
cube.position.x = -2;
cube.position.y = -2;
scene.add(cube);


const geometry2 = new THREE.ConeGeometry(1, 2, 100)
const cone = new THREE.Mesh(geometry2, material);
cone.position.x = 2;
cone.position.y = 2;
scene.add(cone);


const geometry3 = new THREE.CylinderGeometry(1, 1, 2, 100);
const cylinder = new THREE.Mesh(geometry3, material);
cylinder.position.x = -2;
cylinder.position.y = 2;
scene.add(cylinder);


const geometry4 = new THREE.DodecahedronGeometry(1, 100);
const circle = new THREE.Mesh(geometry4, material);
circle.position.x = 2;
circle.position.y = -2;
scene.add(circle);


const geometry5 = new THREE.PlaneGeometry(1, 1);
const plane = new THREE.Mesh(geometry5, material);
plane.position.x = 0;
plane.position.y = 0.1;
scene.add(plane);

const animate = function () {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    cone.rotation.x -= 0.01;
    cone.rotation.y += 0.01;

    cylinder.rotation.x -= 0.01;
    cylinder.rotation.y += 0.01;

    circle.rotation.x -= 0.01;
    circle.rotation.y += 0.01;

    plane.rotation.x -= 0.01;
    plane.rotation.y += 0.01;

    renderer.render(scene, camera);
};
animate();
