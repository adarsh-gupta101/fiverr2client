import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/block_6.gltf')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null} scale={5} position={[0,0,3]}>
      <group name="r6_50x25x25_1" position={[-0.03, 0.16, 0.01]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r6_50x25x25_1_1.geometry}
          material={nodes.r6_50x25x25_1_1.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r6_50x25x25_1_2.geometry}
          material={nodes.r6_50x25x25_1_2.material}
        />
      </group>
      <group name="r6_50x25x25_2" position={[0.03, 0.16, -0.02]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r6_50x25x25_2_1.geometry}
          material={nodes.r6_50x25x25_2_1.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r6_50x25x25_2_2.geometry}
          material={nodes.r6_50x25x25_2_2.material}
        />
      </group>
      <group name="r6_50x25x25_3" position={[0.03, 0.16, 0.04]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r6_50x25x25_3_1.geometry}
          material={nodes.r6_50x25x25_3_1.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r6_50x25x25_3_2.geometry}
          material={nodes.r6_50x25x25_3_2.material}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/block_6.gltf')