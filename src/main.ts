import { AxesHelper, PerspectiveCamera, Scene, WebGL1Renderer } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import "./style.css";

const scene = new Scene();
const renderer = new WebGL1Renderer();
const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight);
const controls = new OrbitControls(camera, renderer.domElement);

camera.position.x = 0.2;
camera.position.y = 0.2;
camera.position.z = 2;

scene.add(camera);
scene.add(new AxesHelper());

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
document.body.appendChild(renderer.domElement);

(function tick() {
  camera.lookAt(0, 0, 0);
  controls.update();
  renderer.render(scene, camera);

  requestAnimationFrame(tick);
})();

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.render(scene, camera);
});
