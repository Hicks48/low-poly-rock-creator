import * as THREE from "three";

import Rock from "../game-objects/Rock";
import { DARK_GRAY } from "../colors";

export function generateRock(): Rock {
    return new Rock(
        new THREE.BoxGeometry(),
        new THREE.MeshBasicMaterial({ color: DARK_GRAY }),
    );
}
