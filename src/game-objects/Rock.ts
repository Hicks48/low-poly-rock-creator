import * as THREE from "three";

export default class Rock {
    public readonly size: THREE.Vector3;
    public readonly mesh: THREE.Mesh;

    constructor(geometry: THREE.BufferGeometry, material: THREE.Material) {
        this.mesh = new THREE.Mesh(geometry, material);
        
        const boundingBox = new THREE.Box3().setFromObject(this.mesh);
        this.size = new THREE.Vector3();
        boundingBox.getSize(this.size);
    }
}
