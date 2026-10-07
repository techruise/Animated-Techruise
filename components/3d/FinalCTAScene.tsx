'use client';

import { Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

function FloatingRings() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.x = clock.getElapsedTime() * 0.1;
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.15;
    }
  });

  return (
    <group ref={groupRef}>
      {[6, 8, 10, 12].map((r, i) => (
        <mesh key={i} rotation={[Math.PI / (i + 2), i * 0.5, 0]}>
          <torusGeometry args={[r, 0.05, 8, 60]} />
          <meshStandardMaterial
            color={i % 2 === 0 ? '#7C3AED' : '#22D3EE'}
            emissive={i % 2 === 0 ? '#7C3AED' : '#22D3EE'}
            emissiveIntensity={0.6}
            transparent
            opacity={0.3}
          />
        </mesh>
      ))}
    </group>
  );
}

export default function FinalCTAScene() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 20], fov: 50 }}>
        <ambientLight intensity={0.2} />
        <pointLight position={[0, 0, 0]} intensity={2} color="#7C3AED" />
        <Suspense fallback={null}>
          <FloatingRings />
        </Suspense>
      </Canvas>
    </div>
  );
}
