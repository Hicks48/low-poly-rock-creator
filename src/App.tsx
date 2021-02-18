import React, { useRef, useEffect } from 'react';

import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import ToolBar from "./components/tool-bar";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import * as THREE from "three";

const useStyles = makeStyles(theme => ({
  grid: {
    width: '100%',
    height: '100vh',
    margin: '0px',
  },
}));

function App() {
  const rendererMount = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
      if (!rendererMount.current) {
        return;
      }

      const mountSize = rendererMount.current.getBoundingClientRect();

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        75,
        mountSize.width / mountSize.height,
        0.1,
        1000,
      );
    
      const geometry = new THREE.BoxGeometry();
      const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
      const cube = new THREE.Mesh( geometry, material );
      scene.add(cube);
    
      camera.position.z = 5;

      const renderer = new THREE.WebGLRenderer();
      renderer.setSize(mountSize.width, mountSize.height);
      rendererMount.current.appendChild(renderer.domElement);

      const controls = new OrbitControls(camera, renderer.domElement);

      function animate() {
        requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, camera);
      }

      controls.update();
      animate();
  }, [rendererMount.current]);

  const classes = useStyles();

  return (
    <Grid container className={classes.grid}>
        <Grid item xs={9} ref={rendererMount}></Grid>
        <Grid item xs={3}>
            <ToolBar/>
        </Grid>
    </Grid>
  );
}

export default App;
