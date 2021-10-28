import { AxesHelper, Group, PerspectiveCamera, Scene, WebGL1Renderer } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Graph from "./model/Graph";

import "./style.css";

const graph = new Graph(10);
const scene = new Scene();
const renderer = new WebGL1Renderer({ antialias: true, alpha: true });
const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight);
const controls = new OrbitControls(camera, renderer.domElement);
const group = new Group();

camera.position.x = 0.2;
camera.position.y = 0.2;
camera.position.z = 5;

graph.addToGroup(group);

scene.add(camera);
scene.add(group);
scene.add(new AxesHelper(1));

renderer.setClearColor(0x000000, 0);
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
