import React from 'react';
import * as THREE from 'three';

const HeroLights = () => {
    return (
        <>
            {/* <ambientLight intensity={0.2} color="#1a1a40" />
      <directionalLight position={[5, 5, 5]} intensity={2} /> */}
            {/* <spotLight
                position={[1, 1, 5]}
                intensity={100}
                penumbra={0.2}
                color="white"
            /> */}
            <spotLight
                position={[2, 5, 6]}
                angle={0.15}
                intensity={100}
                penumbra={0.2}
                color="white"
            />
            <spotLight
                position={[4, 5, 4]}
                angle={0.3}
                intensity={100}
                penumbra={0.2}
                color="#4cc9f0"
            />
            <spotLight
                position={[-3, 5, 5]}
                angle={0.4}
                intensity={100}
                penumbra={0.7}
                color="#9d4edd"
            />
            <primitive 
                object={new THREE.RectAreaLight('#A259FF', 8, 3, 2)}
                position={[1, 1, 0]}
                intensity={35}
                rotation={[-Math.PI / 4, Math.PI / 4, 0]}
            />

            <pointLight 
                position={[1, 1, 0]}
                intensity={50}
                color="#7209b7"
            />
            <pointLight 
                position={[1, 2, -1]}
                intensity={80}
                color="#0d00a4"
            />
        </>
    )
}

export default HeroLights
