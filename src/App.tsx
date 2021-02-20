import React, { useRef, useEffect } from 'react';

import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import ToolBar from "./components/tool-bar";

import * as THREE from "three";

import { setupControls } from "./controls";

import { Env } from "./game-objects/Env";
import { generateRock } from "./services/RockGeneratorService";

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

      const env = new Env();

      const mountSize = rendererMount.current.getBoundingClientRect();

      const scene = new THREE.Scene();
      scene.fog = env.fog;
      scene.background = env.background;
      scene.add(env.ground);

      const camera = new THREE.PerspectiveCamera(
        75,
        mountSize.width / mountSize.height,
        0.1,
        500,
      );
    
      const rock = generateRock();
      env.setOnGround(rock.mesh);
      scene.add(rock.mesh);

      camera.position.z = 5;
      camera.position.y = 5;

      const renderer = new THREE.WebGLRenderer();
      renderer.setSize(mountSize.width, mountSize.height);
      rendererMount.current.appendChild(renderer.domElement);

      const controls = setupControls(camera, renderer.domElement);

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
