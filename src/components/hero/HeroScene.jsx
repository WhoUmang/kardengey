import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, PerspectiveCamera } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const NODE_COUNT = 18;

function GrowthCore() {
  const core = useRef();

  useFrame((state) => {
    if (!core.current) return;

    const t = state.clock.elapsedTime;

    core.current.rotation.x = t * 0.12;
    core.current.rotation.y = t * 0.18;

    core.current.position.y =
      Math.sin(t * 0.8) * 0.08;
  });

  return (
    <group ref={core}>
      {/* Outer K-like geometric shell */}
      <mesh scale={1.05}>
        <icosahedronGeometry args={[0.72, 1]} />
        <meshStandardMaterial
          color="#111827"
          metalness={0.9}
          roughness={0.18}
          emissive="#071a55"
          emissiveIntensity={0.5}
        />
      </mesh>

      {/* Inner intelligence core */}
      <mesh scale={0.38}>
        <icosahedronGeometry args={[1, 3]} />
        <meshStandardMaterial
          color="#2563eb"
          metalness={0.75}
          roughness={0.15}
          emissive="#1749d1"
          emissiveIntensity={1.8}
        />
      </mesh>

      {/* Core glow */}
      <pointLight
        color="#2563eb"
        intensity={7}
        distance={4}
      />
    </group>
  );
}

function GrowthNodes() {
  const group = useRef();

  const nodes = useMemo(() => {
    return Array.from({ length: NODE_COUNT }, (_, i) => {
      const angle =
        (i / NODE_COUNT) * Math.PI * 2;

      const radius =
        2.1 + Math.sin(i * 1.7) * 0.35;

      return {
        position: [
          Math.cos(angle) * radius,
          Math.sin(i * 1.37) * 0.8,
          Math.sin(angle) * radius,
        ],
        scale:
          0.035 + Math.random() * 0.045,
      };
    });
  }, []);

  useFrame((state) => {
    if (!group.current) return;

    const t = state.clock.elapsedTime;

    group.current.rotation.y = t * 0.08;
    group.current.rotation.z =
      Math.sin(t * 0.25) * 0.04;
  });

  return (
    <group ref={group}>
      {nodes.map((node, index) => (
        <mesh
          key={index}
          position={node.position}
          scale={node.scale}
        >
          <sphereGeometry args={[1, 12, 12]} />

          <meshStandardMaterial
            color={
              index % 4 === 0
                ? "#60a5fa"
                : "#dbeafe"
            }
            emissive="#2563eb"
            emissiveIntensity={2}
          />
        </mesh>
      ))}
    </group>
  );
}

function SignalLines() {
  const lines = useMemo(() => {
    const result = [];

    for (let i = 0; i < 10; i++) {
      const angle =
        (i / 10) * Math.PI * 2;

      const startRadius = 0.85;
      const endRadius = 2.45;

      const start = new THREE.Vector3(
        Math.cos(angle) * startRadius,
        Math.sin(i * 1.3) * 0.35,
        Math.sin(angle) * startRadius
      );

      const end = new THREE.Vector3(
        Math.cos(angle) * endRadius,
        Math.sin(i * 1.3) * 0.8,
        Math.sin(angle) * endRadius
      );

      result.push({ start, end });
    }

    return result;
  }, []);

  return (
    <group>
      {lines.map((line, index) => {
        const direction = new THREE.Vector3()
          .subVectors(line.end, line.start);

        const length = direction.length();

        const midpoint = new THREE.Vector3()
          .addVectors(line.start, line.end)
          .multiplyScalar(0.5);

        const quaternion =
          new THREE.Quaternion();

        quaternion.setFromUnitVectors(
          new THREE.Vector3(0, 1, 0),
          direction.normalize()
        );

        return (
          <mesh
            key={index}
            position={midpoint}
            quaternion={quaternion}
          >
            <cylinderGeometry
              args={[
                0.006,
                0.006,
                length,
                6,
              ]}
            />

            <meshBasicMaterial
              color="#2563eb"
              transparent
              opacity={0.35}
            />
          </mesh>
        );
      })}
    </group>
  );
}

function GrowthRing() {
  const ring = useRef();

  useFrame((state) => {
    if (!ring.current) return;

    ring.current.rotation.x =
      Math.PI / 2 +
      Math.sin(state.clock.elapsedTime * 0.4) *
        0.08;

    ring.current.rotation.z =
      state.clock.elapsedTime * 0.12;
  });

  return (
    <mesh ref={ring} position={[0, 0, 0]}>
      <torusGeometry args={[2.55, 0.008, 8, 96]} />

      <meshBasicMaterial
        color="#2563eb"
        transparent
        opacity={0.35}
      />
    </mesh>
  );
}

function GrowthSystem() {
  const system = useRef();

  useFrame((state) => {
    if (!system.current) return;

    const { mouse } = state;
    const t = state.clock.elapsedTime;

    system.current.rotation.x = THREE.MathUtils.lerp(
      system.current.rotation.x,
      mouse.y * 0.15,
      0.035
    );

    system.current.rotation.y = THREE.MathUtils.lerp(
      system.current.rotation.y,
      mouse.x * 0.25,
      0.035
    );

    system.current.position.y =
      Math.sin(t * 0.5) * 0.06;
  });

  return (
    <group
  ref={system}
  position={[2.5, 0, 0]}
  scale={0.9}
>
      <GrowthCore />
      <GrowthNodes />
      <SignalLines />
      <GrowthRing />
    </group>
  );
}

function ParticleField() {
  const points = useRef();

  const positions = useMemo(() => {
    const count = 350;
    const data = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const radius = 4 + Math.random() * 6;
      const angle = Math.random() * Math.PI * 2;

      data[i * 3] =
        Math.cos(angle) * radius;

      data[i * 3 + 1] =
        (Math.random() - 0.5) * 5;

      data[i * 3 + 2] =
        Math.sin(angle) * radius;
    }

    return data;
  }, []);

  useFrame((state) => {
    if (!points.current) return;

    points.current.rotation.y =
      state.clock.elapsedTime * 0.01;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>

      <pointsMaterial
        color="#ffffff"
        size={0.012}
        transparent
        opacity={0.28}
      />
    </points>
  );
}

export default function HeroScene() {
  return (
    <div className="pointer-events-none absolute inset-0">
      <Canvas
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
      >
        <PerspectiveCamera
          makeDefault
          position={[0.8, 0, 8]}
          fov={42}
        />

        <ambientLight intensity={0.25} />

        <directionalLight
          position={[4, 5, 6]}
          intensity={2}
        />

        <pointLight
          position={[-4, 1, 4]}
          color="#2563eb"
          intensity={4}
        />

        <Environment preset="studio" />

        <Float
          speed={0.8}
          rotationIntensity={0.08}
          floatIntensity={0.25}
        >
          <GrowthSystem />
        </Float>

        <ParticleField />
      </Canvas>
    </div>
  );
}