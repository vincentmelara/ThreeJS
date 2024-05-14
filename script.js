// Define variables for the scene, camera, renderer, and cube
let scene, camera, renderer, cube;

// Initialize the scene, camera, and renderer
function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('canvas-container').appendChild(renderer.domElement);

    // Create a cube geometry and material
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;
}

// Animate the cube
function animate() {
    requestAnimationFrame(animate);

    cube.rotation.x += 1;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
}

// Call the init function to set up the scene and start the animation
init();
animate();
