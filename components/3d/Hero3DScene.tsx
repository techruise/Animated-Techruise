'use client';

import { useRef, Suspense, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { PerspectiveCamera, PerformanceMonitor } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import { NeuralCore, Particles } from './NeuralCore';
import * as THREE from 'three';

function Scene({ mousePosition, useLowQuality }: { mousePosition: { x: number; y: number }; useLowQuality: boolean }) {
  const groupRef = useRef<THREE.Group>(null);
  const targetRotation = useRef({ x: 0, y: 0 });

  useFrame(() => {
    if (groupRef.current) {
      // Smooth parallax
      targetRotation.current.y = mousePosition.x * 0.15;
      targetRotation.current.x = -mousePosition.y * 0.15;
      groupRef.current.rotation.y += (targetRotation.current.y - groupRef.current.rotation.y) * 0.05;
      groupRef.current.rotation.x += (targetRotation.current.x - groupRef.current.rotation.x) * 0.05;
    }
  });

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 12]} fov={50} />

      <ambientLight intensity={0.3} />
      <pointLight position={[8, 8, 8]} intensity={0.8} color="#7C3AED" />
      <pointLight position={[-8, -8, -8]} intensity={0.4} color="#22D3EE" />

      <group ref={groupRef}>
        <NeuralCore />
      </group>

      <Particles count={useLowQuality ? 500 : 1000} />

      {/* Light bloom only on desktop */}
      {!useLowQuality && (
        <EffectComposer>
          <Bloom
            luminanceThreshold={0.6}
            luminanceSmoothing={0.9}
            intensity={0.8}
            mipmapBlur
          />
        </EffectComposer>
      )}
    </>
  );
}

export default function Hero3DScene() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [dpr, setDpr] = useState(1);
  const [useLowQuality, setUseLowQuality] = useState(false);

  useEffect(() => {
    // Detect low-power devices
    const isLowPower =
      /mobile|android|iphone|ipad|ipod/i.test(navigator.userAgent) ||
      Boolean(navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4);

    setUseLowQuality(isLowPower);
    setDpr(isLowPower ? 1 : Math.min(window.devicePixelRatio, 1.5));

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        dpr={dpr}
        gl={{
          antialias: false,
          alpha: true,
          powerPreference: 'high-performance',
          stencil: false,
        }}
        frameloop="always"
      >
        <Suspense fallback={null}>
          <PerformanceMonitor
            onDecline={() => {
              setUseLowQuality(true);
              setDpr(1);
            }}
          >
            <Scene mousePosition={mousePosition} useLowQuality={useLowQuality} />
          </PerformanceMonitor>
        </Suspense>
      </Canvas>
    </div>
  );
}
