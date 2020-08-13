import React, { useRef, useState } from "react"
import * as THREE from "three"
import { useLoader, useFrame } from "react-three-fiber"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import {useSpring, a} from 'react-spring/three'
import Phone from '../models/smartphone.gltf'
import Video from '../models/screen-rec-2.mp4'



export default function Model() {
  const props = useSpring({opacity: 1, from: {opacity: 0}})
  const gltf = useLoader(GLTFLoader, Phone)
  var video = document.createElement('video');
    video.src = Video;
    video.load();
    video.play();
    video.loop = true;
  const scene = gltf.scene
  const phone = scene.children[0]
  const display = scene.getObjectByName("vol._1_1")
  const vidtex = new THREE.VideoTexture(video)
  const texture = vidtex
  texture.flipY = false
  texture.flipX = true
  texture.encoding = THREE.sRGBEncoding;
  const mesh = useRef()
  const [active, setActive] = useState(false)
  useFrame(() => (mesh.current.rotation.y -= 0.005))
  console.log("Test")
  return (
    <group>
    <mesh name="mockup" ref={mesh} position={[0, 0.007, 14.60]} onClick={e => setActive(!active)}>
    <primitive name="phone" attach="geometry" object={phone} scale={[2,2,2]}>
      <primitive name="display" attach="geometry" object={display}>
        <meshBasicMaterial name="material" attach="material" map={texture}/>
      </primitive>
    </primitive>
    </mesh>
    </group>
  )
}