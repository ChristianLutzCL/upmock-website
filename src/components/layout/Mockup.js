import React, { Suspense } from "react"
import * as THREE from "three"
import { useLoader, Canvas } from "react-three-fiber"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import Phone from '../models/smartphone.gltf'
import Video from '../models/screen-rec-2.mp4'


function Duck() {
  const gltf = useLoader(GLTFLoader, Phone);
  return <primitive object={gltf.scene} position={[0, 0, 14.65]} rotation={[0, 0, 0]} />
}

function Mockup() {
    const d = 8.25
    const gltf = useLoader(GLTFLoader, Phone);
  return (
      <Canvas>
        <fog attach="fog" args={[0xdfdfdf, 35, 65]} />
        <hemisphereLight skyColor={"black"} groundColor={0xffffff} intensity={0.68} position={[0, 50, 0]} />
        <directionalLight
          position={[-8, 12, 8]}
          shadow-camera-left={d * -1}
          shadow-camera-bottom={d * -1}
          shadow-camera-right={d}
          shadow-camera-top={d}
          shadow-camera-near={0.1}
          shadow-camera-far={1500}
          castShadow
        />
        <mesh position={[0, 0, -10]}>
            <circleBufferGeometry attach="geometry" args={[8, 64]} />
            <meshBasicMaterial attach="material" color="#48bb78" />
            <Duck/>
        </mesh>
            
      </Canvas>
  );
}


export default Mockup;
