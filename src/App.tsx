import React, { useRef, useEffect } from 'react';
import './App.css';
import * as THREE from "three";

function App() {
  const rendererMount = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    );
  
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    const cube = new THREE.Mesh( geometry, material );
    scene.add(cube);
  
    camera.position.z = 5;
  
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    rendererMount.current?.appendChild(renderer.domElement);

    console.log(`attached renderer to: ${rendererMount.current}`);

    function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    }

    animate();
  }, [rendererMount.current]);

  return (
    <div className="App" ref={rendererMount}></div>
  );
}

export default App;
