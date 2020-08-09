import * as THREE from "three"
import React, { useEffect, useRef, useState } from "react"
import { useLoader, useFrame } from "react-three-fiber"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"


export default function Model({ mouse, ...props }) {
  const group = useRef()
  const { nodes, animations } = useLoader(GLTFLoader, "/models/smartphone.gltf")

  return (
    <group >
        <skinnedMesh>
        </skinnedMesh>
      </group>
  )
}