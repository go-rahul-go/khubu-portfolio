/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 scene.gltf 
Author: Brandon Westlake (https://sketchfab.com/dr.badass2142)
License: SKETCHFAB Standard (https://sketchfab.com/licenses)
Source: https://sketchfab.com/3d-models/retro-computer-setup-free-82eaf2047e0447a1bfea22482f1d1404
Title: Retro Computer Setup (FREE)
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
export default function Model(props) {
  const { nodes, materials } = useGLTF('/scene.gltf')
  const ref=useRef()
  useFrame((state,delta)=>{
    ref.current.rotation.y=Math.cos(state.clock.elapsedTime)*0.5

  })
  return (
    <group {...props} dispose={null}  ref={ref}>
      <mesh geometry={nodes.retro_computer_setup_retro_computer_setup_Mat_0.geometry} material={materials.retro_computer_setup_Mat} rotation={[-Math.PI / 2, 0, 0]}/>
    </group>
  )
}

useGLTF.preload('/scene.gltf')
