import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export function setupControls(camera: THREE.PerspectiveCamera, canvas: THREE.WebGLRenderer["domElement"]): OrbitControls {
    const controls = new OrbitControls(camera, canvas);
    controls.enableDamping = true;
    controls.dampingFactor = 0.2;

    controls.rotateSpeed = 0.6;
    controls.panSpeed = 0.8;

    controls.maxDistance = 14;
    controls.minDistance = 3;

    controls.maxPolarAngle = (Math.PI / 2) - 0.05;
    return controls;
}
