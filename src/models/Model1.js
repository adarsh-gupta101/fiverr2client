
// import React, { useRef } from 'react'
// import { useGLTF, useAnimations } from '@react-three/drei'

// export default function Model(props) {
//   const group = useRef()
//   const { nodes, materials, animations } = useGLTF('/block_1.gltf')
//   const { actions } = useAnimations(animations, group)
//   console.log(props)

//   return (
//     <group ref={group} {...props} dispose={null} position={[0,-2,3]} scale={5}>
//       <group name="r1_11x9B_2" position={[-0.04, 0.33, 0.01]} >
//         <mesh 
//           castShadow
//           receiveShadow
//           geometry={nodes.r1_11x9B_2_1.geometry}
//           material={nodes.r1_11x9B_2_1.material}
//                />
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.r1_11x9B_2_2.geometry}
//           material={nodes.r1_11x9B_2_2.material}
//         />
//       </group>
//       <group name="r1_11x9B_3" position={[-0.04, 0.33, -0.03]}>
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.r1_11x9B_3_1.geometry}
//           material={nodes.r1_11x9B_3_1.material}
//         />
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.r1_11x9B_3_2.geometry}
//           material={nodes.r1_11x9B_3_2.material}
//         />
//       </group>
//       <group name="r1_11x9B_4" position={[0, 0.33, 0.05]}>
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.r1_11x9B_4_1.geometry}
//           material={nodes.r1_11x9B_4_1.material}
//         />
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.r1_11x9B_4_2.geometry}
//           material={nodes.r1_11x9B_4_2.material}
//         />
//       </group>
//       <group name="r1_11x9B_5" position={[0, 0.33, 0.01]}>
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.r1_11x9B_5_1.geometry}
//           material={nodes.r1_11x9B_5_1.material}
//         />
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.r1_11x9B_5_2.geometry}
//           material={nodes.r1_11x9B_5_2.material}
//         />
//       </group>
//       <group name="r1_11x9B_6" position={[0, 0.33, -0.03]}>
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.r1_11x9B_6_1.geometry}
//           material={nodes.r1_11x9B_6_1.material}
//         />
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.r1_11x9B_6_2.geometry}
//           material={nodes.r1_11x9B_6_2.material}
//         />
//       </group>
//       <group name="r1_11x9B_7" position={[0.04, 0.33, 0.05]}>
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.r1_11x9B_7_1.geometry}
//           material={nodes.r1_11x9B_7_1.material}
//         />
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.r1_11x9B_7_2.geometry}
//           material={nodes.r1_11x9B_7_2.material}
//         />
//       </group>
//       <group name="r1_11x9B_8" position={[0.04, 0.33, 0.01]}>
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.r1_11x9B_8_1.geometry}
//           material={nodes.r1_11x9B_8_1.material}
//         />
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.r1_11x9B_8_2.geometry}
//           material={nodes.r1_11x9B_8_2.material}
//         />
//       </group>
//       <group name="r1_11x9B_9" position={[0.04, 0.33, -0.03]}>
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.r1_11x9B_9_1.geometry}
//           material={nodes.r1_11x9B_9_1.material}
//         />
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.r1_11x9B_9_2.geometry}
//           material={nodes.r1_11x9B_9_2.material}
//         />
//       </group>
//       <group name="r1_11x9B_1" position={[-0.04, 0.33, 0.05]}>
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.r1_11x9B_1_1.geometry}
//           material={nodes.r1_11x9B_1_1.material}
//         />
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.r1_11x9B_1_2.geometry}
//           material={nodes.r1_11x9B_1_2.material}
//         />
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.r1_11x9B_1_3.geometry}
//           material={materials.Logo_nbr2}
//         />
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.r1_11x9B_1_4.geometry}
//           material={materials.Logo_nbr1}
//         />
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.r1_11x9B_1_5.geometry}
//           material={materials.Logo_nbr3}
//         />
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.r1_11x9B_1_6.geometry}
//           material={materials.Logo_nbr4}
//         />
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.r1_11x9B_1_7.geometry}
//           material={materials.Logo_nbr5}
//         />
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.r1_11x9B_1_8.geometry}
//           material={materials.Logo_nbr6}
//         />
//       </group>
//     </group>
//   )
// }

// useGLTF.preload('/block_1.gltf')
import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/block_99 (1).glb')
  const { actions } = useAnimations(animations, group)
  useFrame((state)=>{
    group.current.rotation.x=Math.sin(state.clock.getElapsedTime())
    group.current.rotation.y=Math.cos(state.clock.getElapsedTime()-0.5)
    group.current.rotation.z=Math.cos(state.clock.getElapsedTime())


  })
  return (
    <group ref={group} {...props} dispose={null} scale={7} position={[0,-1.3,2]}>
      <group position={[0, 0.31, 0.01]} rotation={[0, Math.PI / 2, 0]}>
        <group name="r3_33x3xRot90_2" position={[0, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.r3_33x3xRot90_2_1.geometry}
            material={nodes.r3_33x3xRot90_2_1.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.r3_33x3xRot90_2_2.geometry}
            material={nodes.r3_33x3xRot90_2_2.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.r3_33x3xRot90_2_3.geometry}
            material={nodes.r3_33x3xRot90_2_3.material}
          />
        </group>
        <group name="r3_33x3xRot90_1" position={[-0.04, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.r3_33x3xRot90_1_1.geometry}
            material={nodes.r3_33x3xRot90_1_1.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.r3_33x3xRot90_1_2.geometry}
            material={nodes.r3_33x3xRot90_1_2.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.r3_33x3xRot90_1_3.geometry}
            material={nodes.r3_33x3xRot90_1_3.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.r3_33x3xRot90_1_4.geometry}
            material={nodes.r3_33x3xRot90_1_4.material}
          />
        </group>
        <group name="r3_33x3xRot90_3" position={[0.04, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.r3_33x3xRot90_3_1.geometry}
            material={nodes.r3_33x3xRot90_3_1.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.r3_33x3xRot90_3_2.geometry}
            material={nodes.r3_33x3xRot90_3_2.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.r3_33x3xRot90_3_3.geometry}
            material={nodes.r3_33x3xRot90_3_3.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.r3_33x3xRot90_3_4.geometry}
            material={nodes.r3_33x3xRot90_3_4.material}
          />
        </group>
      </group>
      <group name="r2_33x3_2" position={[0, 0.25, 0.01]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r2_33x3_2_1.geometry}
          material={nodes.r2_33x3_2_1.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r2_33x3_2_2.geometry}
          material={nodes.r2_33x3_2_2.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r2_33x3_2_3.geometry}
          material={nodes.r2_33x3_2_3.material}
        />
      </group>
      <group name="r5_50x2_2" position={[0.03, 0.22, 0.01]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r5_50x2_2_1.geometry}
          material={nodes.r5_50x2_2_1.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r5_50x2_2_2.geometry}
          material={nodes.r5_50x2_2_2.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r5_50x2_2_3.geometry}
          material={nodes.r5_50x2_2_3.material}
        />
      </group>
      <group name="r7_25x4_2" position={[-0.03, 0.19, 0.04]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r7_25x4_2_1.geometry}
          material={nodes.r7_25x4_2_1.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r7_25x4_2_2.geometry}
          material={nodes.r7_25x4_2_2.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r7_25x4_2_3.geometry}
          material={nodes.r7_25x4_2_3.material}
        />
      </group>
      <group name="r7_25x4_3" position={[0.03, 0.19, -0.02]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r7_25x4_3_1.geometry}
          material={nodes.r7_25x4_3_1.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r7_25x4_3_2.geometry}
          material={nodes.r7_25x4_3_2.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r7_25x4_3_3.geometry}
          material={nodes.r7_25x4_3_3.material}
        />
      </group>
      <group name="r7_25x4_4" position={[0.03, 0.19, 0.04]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r7_25x4_4_1.geometry}
          material={nodes.r7_25x4_4_1.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r7_25x4_4_2.geometry}
          material={nodes.r7_25x4_4_2.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r7_25x4_4_3.geometry}
          material={nodes.r7_25x4_4_3.material}
        />
      </group>
      <group name="r5_50x2_1" position={[-0.03, 0.22, 0.01]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r5_50x2_1_1.geometry}
          material={nodes.r5_50x2_1_1.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r5_50x2_1_2.geometry}
          material={nodes.r5_50x2_1_2.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r5_50x2_1_3.geometry}
          material={nodes.r5_50x2_1_3.material}
        />
      </group>
      <group name="r7_25x4_1" position={[-0.03, 0.19, -0.02]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r7_25x4_1_1.geometry}
          material={nodes.r7_25x4_1_1.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r7_25x4_1_2.geometry}
          material={nodes.r7_25x4_1_2.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r7_25x4_1_3.geometry}
          material={nodes.r7_25x4_1_3.material}
        />
      </group>
      <group name="r2_33x3_1" position={[-0.04, 0.25, 0.01]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r2_33x3_1_1.geometry}
          material={nodes.r2_33x3_1_1.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r2_33x3_1_2.geometry}
          material={nodes.r2_33x3_1_2.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r2_33x3_1_3.geometry}
          material={nodes.r2_33x3_1_3.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r2_33x3_1_4.geometry}
          material={nodes.r2_33x3_1_4.material}
        />
      </group>
      <group name="r2_33x3_3" position={[0.04, 0.25, 0.01]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r2_33x3_3_1.geometry}
          material={nodes.r2_33x3_3_1.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r2_33x3_3_2.geometry}
          material={nodes.r2_33x3_3_2.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r2_33x3_3_3.geometry}
          material={nodes.r2_33x3_3_3.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r2_33x3_3_4.geometry}
          material={nodes.r2_33x3_3_4.material}
        />
      </group>
      <group name="r1_11x9B_1" position={[-0.04, 0.33, 0.05]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r1_11x9B_1_1.geometry}
          material={nodes.r1_11x9B_1_1.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r1_11x9B_1_2.geometry}
          material={nodes.r1_11x9B_1_2.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r1_11x9B_1_3.geometry}
          material={nodes.r1_11x9B_1_3.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r1_11x9B_1_4.geometry}
          material={nodes.r1_11x9B_1_4.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r1_11x9B_1_5.geometry}
          material={nodes.r1_11x9B_1_5.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r1_11x9B_1_6.geometry}
          material={nodes.r1_11x9B_1_6.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r1_11x9B_1_7.geometry}
          material={nodes.r1_11x9B_1_7.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r1_11x9B_1_8.geometry}
          material={nodes.r1_11x9B_1_8.material}
        />
      </group>
      <group name="r1_11x9B_2" position={[-0.04, 0.33, 0.01]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r1_11x9B_2_1.geometry}
          material={nodes.r1_11x9B_2_1.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r1_11x9B_2_2.geometry}
          material={nodes.r1_11x9B_2_2.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r1_11x9B_2_3.geometry}
          material={nodes.r1_11x9B_2_3.material}
        />
      </group>
      <group name="r1_11x9B_3" position={[-0.04, 0.33, -0.03]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r1_11x9B_3_1.geometry}
          material={nodes.r1_11x9B_3_1.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r1_11x9B_3_2.geometry}
          material={nodes.r1_11x9B_3_2.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r1_11x9B_3_3.geometry}
          material={nodes.r1_11x9B_3_3.material}
        />
      </group>
      <group name="r1_11x9B_4" position={[0, 0.33, 0.05]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r1_11x9B_4_1.geometry}
          material={nodes.r1_11x9B_4_1.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r1_11x9B_4_2.geometry}
          material={nodes.r1_11x9B_4_2.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r1_11x9B_4_3.geometry}
          material={nodes.r1_11x9B_4_3.material}
        />
      </group>
      <group name="r1_11x9B_5" position={[0, 0.33, 0.01]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r1_11x9B_5_1.geometry}
          material={nodes.r1_11x9B_5_1.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r1_11x9B_5_2.geometry}
          material={nodes.r1_11x9B_5_2.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r1_11x9B_5_3.geometry}
          material={nodes.r1_11x9B_5_3.material}
        />
      </group>
      <group name="r1_11x9B_6" position={[0, 0.33, -0.03]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r1_11x9B_6_1.geometry}
          material={nodes.r1_11x9B_6_1.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r1_11x9B_6_2.geometry}
          material={nodes.r1_11x9B_6_2.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r1_11x9B_6_3.geometry}
          material={nodes.r1_11x9B_6_3.material}
        />
      </group>
      <group name="r1_11x9B_7" position={[0.04, 0.33, 0.05]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r1_11x9B_7_1.geometry}
          material={nodes.r1_11x9B_7_1.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r1_11x9B_7_2.geometry}
          material={nodes.r1_11x9B_7_2.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r1_11x9B_7_3.geometry}
          material={materials.Logo_nbr7}
        />
      </group>
      <group name="r1_11x9B_8" position={[0.04, 0.33, 0.01]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r1_11x9B_8_1.geometry}
          material={nodes.r1_11x9B_8_1.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r1_11x9B_8_2.geometry}
          material={nodes.r1_11x9B_8_2.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r1_11x9B_8_3.geometry}
          material={materials.Logo_nbr8}
        />
      </group>
      <group name="r1_11x9B_9" position={[0.04, 0.33, -0.03]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r1_11x9B_9_1.geometry}
          material={nodes.r1_11x9B_9_1.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r1_11x9B_9_2.geometry}
          material={nodes.r1_11x9B_9_2.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r1_11x9B_9_3.geometry}
          material={materials.Logo_nbr9}
        />
      </group>
      <group name="r4_100x1_1" position={[0, 0.28, 0.01]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r4_100x1_1_1.geometry}
          material={nodes.r4_100x1_1_1.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r4_100x1_1_2.geometry}
          material={nodes.r4_100x1_1_2.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r4_100x1_1_3.geometry}
          material={nodes.r4_100x1_1_3.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r4_100x1_1_4.geometry}
          material={nodes.r4_100x1_1_4.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r4_100x1_1_5.geometry}
          material={nodes.r4_100x1_1_5.material}
        />
      </group>
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
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r6_50x25x25_1_3.geometry}
          material={nodes.r6_50x25x25_1_3.material}
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
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r6_50x25x25_2_3.geometry}
          material={nodes.r6_50x25x25_2_3.material}
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
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r6_50x25x25_3_3.geometry}
          material={nodes.r6_50x25x25_3_3.material}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/block_99 (1).glb')
