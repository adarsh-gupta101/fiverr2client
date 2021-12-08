// import React, { Suspense, useRef, useState } from "react"
// import { Canvas, useFrame, useLoader } from "@react-three/fiber"
// import {  Environment, OrbitControls } from "@react-three/drei"
// import Model from "./Model"
// import Overlay from "./Overlay"
// import { AmbientLight, PointLight,} from "three"
// import Threejspart from "./Threejspart"
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"

// export default function App() {
//   const overlay = useRef()
//   const caption = useRef()
//   const scroll = useRef(0)
//   return (
//     <>
    
//       {/* <Canvas
//         shadows
//         onCreated={(state) => state.events.connect(overlay.current)}
//         raycaster={{ computeOffsets: ({ clientX, clientY }) => ({ offsetX: clientX, offsetY: clientY }) }}>
//         <ambientLight intensity={1} />
//         <Suspense fallback={null}>
//           <Model scroll={scroll} />
//           <Environment preset="city" />
//         </Suspense>
//       </Canvas> */}
//       {/* <Threejspart/> */}

//       <Canvas>
//         <Suspense fallback={null}>
//           <Modelw />
//           <OrbitControls />
//           <Environment preset="sunset" background />
//         </Suspense>
//       </Canvas>


//       <Overlay ref={overlay} caption={caption} scroll={scroll} />
//     </>
//   )
// }



// const Modelw = () => {
//   const gltf = useLoader(GLTFLoader, "./block_1.gltf");
//   return (
//     <>
//       <primitive object={gltf.scene} scale={10} />
//     </>
//   );
// };



//text
import "./styles.css";
import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense, useRef } from "react";
import * as THREE from "three";

import Overlay from "./Overlay"
import Model1 from "./models/Model1"
import Model2 from "./models/Model2"
import Model3 from "./models/Model3"
import Model4 from "./models/Model4"
import Model5 from "./models/Model5"
import Model6 from "./models/Model6"
import Model7 from "./models/Model7"

import { AmbientLight } from "three";
const Model = () => {
  const gltf = useLoader(GLTFLoader, "./block_1.gltf");  return (
    <>
      <primitive object={gltf.scene} scale={10} />
    </>
  );
};

export default function App() {
    const overlay = useRef()
  const caption = useRef()
  const scroll = useRef(0)
  return (
    <>
      <Canvas>
        <Suspense fallback={null}>
        <primitive object={new THREE.AxesHelper(10)} />
{/* <pointLeight color="white" intensity={2}/> */}
{/* {/* <ambientLight intensity={0.6}/> */}
<ambientLight intensity={0.2} position={[0,0,0]}/> 
{/* <hemisphereLight intensity={1} position={[0,1,0]} color={new THREE.Color("0x00ffff","0xffffff")}/> */}
<rectAreaLight
      width={3}
      height={3}
      color={"whitesmoke"}
      intensity={2.5}
      position={[2, .1, 4]}
      lookAt={[0, 0, 0]}
      penumbra={1}
      castShadow
    />
    <rectAreaLight
      width={3}
      height={3}
      color={"whitesmoke"}
      intensity={2.5}
      position={[-2, .2, 3.5]}
      lookAt={[0, 0, 0]}
      penumbra={1}
      castShadow
    />
    
    <group position={[0,-0.3,0.5]}>
          <Model1 />
          <Model2/>
          <Model3/>
          <Model4/>
          <Model5/>
          <Model6/>
          <Model7/>
          </group>
          <OrbitControls />
          {/* <Environment preset="sunset" background /> */}
        </Suspense>

      </Canvas>
          {/* <Overlay ref={overlay} caption={caption} scroll={scroll} /> */}
          {/* <Overlay ref={overlay} caption={caption} scroll={scroll} />  */}

      </>
  );
}