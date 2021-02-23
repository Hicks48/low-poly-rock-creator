import * as THREE from "three";

import { WHITE, LIGHT_GRAY } from "../colors";

function makeGround(radious: number): THREE.Mesh {
    const geometry = new THREE.CircleGeometry(radious, 32);
    const material = new THREE.MeshBasicMaterial({ color: WHITE });

    const mesh = new THREE.Mesh(geometry, material);
    mesh.rotateX(Math.PI * -0.5);
    return mesh;
}

export class Env {
    public readonly ground: THREE.Mesh;
    public readonly fog: THREE.IFog;
    public readonly background: THREE.Color;

    constructor() {
        this.ground = makeGround(8);
        this.fog = new THREE.FogExp2(LIGHT_GRAY, 0.06);
        this.background = new THREE.Color(WHITE);
    }

    public setOnGround(mesh: THREE.Mesh): void {
        const boundingBox = new THREE.Box3().setFromObject(mesh);
        const size = new THREE.Vector3();
        boundingBox.getSize(size);

        mesh.position.y = size.y / 2;
    }
}
