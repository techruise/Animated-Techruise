'use client';

import { useRef, useMemo, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import * as THREE from 'three';

// Shader for animated particles
const particleVertexShader = `
  attribute float size;
  attribute float phase;
  varying float vPhase;
  void main() {
    vPhase = phase;
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    gl_PointSize = size * (300.0 / -mvPosition.z);
    gl_Position = projectionMatrix * mvPosition;
  }
`;

const particleFragmentShader = `
  varying float vPhase;
  void main() {
    float dist = length(gl_PointCoord - vec2(0.5));
    if (dist > 0.5) discard;
    float alpha = 0.6 * (1.0 - dist * 2.0);
    gl_FragColor = vec4(0.486, 0.231, 0.929, alpha); // violet
  }
`;

export function NeuralCore() {
  const sphereRef = useRef<THREE.Mesh>(null);
  const ringsRef = useRef<THREE.Group>(null);
  const instancedNodesRef = useRef<THREE.InstancedMesh>(null);

  // Node positions computed once
  const nodePositions = useMemo(() => {
    const positions: THREE.Vector3[] = [];
    const count = 50;
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const radius = 3 + Math.random() * 1.5;
      positions.push(
        new THREE.Vector3(
          radius * Math.sin(phi) * Math.cos(theta),
          radius * Math.sin(phi) * Math.sin(theta),
          radius * Math.cos(phi)
        )
      );
    }
    return positions;
  }, []);

  // Set instance transforms once
  useEffect(() => {
    if (!instancedNodesRef.current) return;
    const dummy = new THREE.Object3D();
    nodePositions.forEach((pos, i) => {
      dummy.position.copy(pos);
      dummy.scale.setScalar(0.08 + Math.random() * 0.04);
      dummy.updateMatrix();
      instancedNodesRef.current!.setMatrixAt(i, dummy.matrix);
    });
    instancedNodesRef.current.instanceMatrix.needsUpdate = true;
  }, [nodePositions]);

  // Line geometry - single buffer for all lines
  const lineGeometry = useMemo(() => {
    const points: THREE.Vector3[] = [];
    const connectCount = 30;
    for (let i = 0; i < connectCount; i++) {
      const a = nodePositions[i];
      const b = nodePositions[(i + 1) % connectCount];
      points.push(a, b);
    }
    const geom = new THREE.BufferGeometry().setFromPoints(points);
    return geom;
  }, [nodePositions]);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (sphereRef.current) {
      sphereRef.current.rotation.y = t * 0.15;
      sphereRef.current.rotation.x = t * 0.08;
    }
    if (ringsRef.current) {
      ringsRef.current.rotation.y = t * 0.1;
      ringsRef.current.rotation.x = t * 0.05;
    }
  });

  return (
    <group>
      {/* Central sphere with subtle glow */}
      <Sphere ref={sphereRef} args={[1.8, 48, 48]}>
        <meshStandardMaterial
          color="#7C3AED"
          emissive="#7C3AED"
          emissiveIntensity={0.4}
          roughness={0.3}
          metalness={0.7}
        />
      </Sphere>

      {/* Thin rings */}
      <group ref={ringsRef}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[3, 0.02, 12, 80]} />
          <meshStandardMaterial color="#22D3EE" emissive="#22D3EE" emissiveIntensity={0.5} transparent opacity={0.5} />
        </mesh>
        <mesh rotation={[0, Math.PI / 2, 0]}>
          <torusGeometry args={[3.5, 0.02, 12, 80]} />
          <meshStandardMaterial color="#E879F9" emissive="#E879F9" emissiveIntensity={0.5} transparent opacity={0.4} />
        </mesh>
      </group>

      {/* Instanced nodes - single draw call */}
      <instancedMesh ref={instancedNodesRef} args={[undefined, undefined, nodePositions.length]}>
        <sphereGeometry args={[1, 6, 6]} />
        <meshStandardMaterial color="#22D3EE" emissive="#22D3EE" emissiveIntensity={1} />
      </instancedMesh>

      {/* Lines - single LineSegments */}
      <lineSegments geometry={lineGeometry}>
        <lineBasicMaterial color="#7C3AED" transparent opacity={0.15} />
      </lineSegments>
    </group>
  );
}

// Optimized particles with shader
export function Particles({ count = 1000 }: { count?: number }) {
  const pointsRef = useRef<THREE.Points>(null);

  const { positions, sizes, phases } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const siz = new Float32Array(count);
    const phs = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 40;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 40;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 40;
      siz[i] = Math.random() * 2 + 1;
      phs[i] = Math.random() * Math.PI * 2;
    }
    return { positions: pos, sizes: siz, phases: phs };
  }, [count]);

  useFrame(({ clock }) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = clock.getElapsedTime() * 0.03;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-size" args={[sizes, 1]} />
        <bufferAttribute attach="attributes-phase" args={[phases, 1]} />
      </bufferGeometry>
      <shaderMaterial
        vertexShader={particleVertexShader}
        fragmentShader={particleFragmentShader}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}
