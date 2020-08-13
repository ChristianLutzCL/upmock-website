import React, { Suspense } from "react"
import { Canvas } from "react-three-fiber"
import Model from './Model'



export default function Mockup() {
    const d = 8.25
  return (
      <Canvas shadowmap perspective camera={{fov: 75, position: [0, 0, 5.13]}}>
        <fog attach="fog" args={[0xdfdfdf, 35, 65]} />
        <hemisphereLight skyColor={"black"} groundColor={0xffffff} intensity={0.68} position={[0, 50, 0]} />
        <directionalLight
          position={[-6, 12, 8]}
          shadow-camera-left={d * -1}
          shadow-camera-bottom={d * -1}
          shadow-camera-right={d}
          shadow-camera-top={d}
          shadow-camera-near={0.1}
          shadow-camera-far={1500}
          castShadow
        />
        <mesh position={[0, 0, -10]}>
            <circleBufferGeometry attach="geometry" args={[11, 164]} />
            <meshBasicMaterial attach="material" color="#48bb78" />
            <Suspense fallback={null}>
            <Model/>
            </Suspense>
        </mesh>
      </Canvas>
  );
}
