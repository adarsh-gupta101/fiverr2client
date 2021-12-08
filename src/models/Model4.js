import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/block_4.gltf')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null} scale={5} position={[0,-1,3]}>
      <group name="r4_100x1_1" position={[0, 0.28, 0.01]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r4_100x1_1_1.geometry}
          material={materials.L5}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r4_100x1_1_2.geometry}
          material={materials.White}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r4_100x1_1_3.geometry}
          material={materials.Logo_1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r4_100x1_1_4.geometry}
          material={materials.Logo_2}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/block_4.gltf')