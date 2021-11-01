import {
  BufferGeometry,
  Float32BufferAttribute,
  MathUtils,
  PerspectiveCamera,
  Points,
  PointsMaterial,
  Scene,
  TextureLoader,
  WebGLRenderer,
  VertexColors,
} from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import "./style.css";

const COUNT = 1200;

const scene = new Scene();
const renderer = new WebGLRenderer({ antialias: true, alpha: true });
const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight);
const textureLoader = new TextureLoader();
const controls = new OrbitControls(camera, renderer.domElement);
const geometry = new BufferGeometry();

camera.position.x = 0.2;
camera.position.y = 0.2;
camera.position.z = 5;

const points = new Float32Array(COUNT * 3);
const colors = new Float32Array(COUNT * 3);

for (let i = 0; i < points.length; i++) {
  points[i] = MathUtils.randFloatSpread(4);
  colors[i] = Math.random() * 0.8 + 0.2;
}
geometry.setAttribute("position", new Float32BufferAttribute(points, 3));
geometry.setAttribute("color", new Float32BufferAttribute(colors, 3));

scene.add(
  new Points(
    geometry,
    new PointsMaterial({
      size: 0.1,
      vertexColors: VertexColors,
      map: textureLoader.load("./circle.png"),
      alphaTest: 0.01,
      transparent: true,
    })
  )
);

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
