import { Canvas } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Icosahedron, Torus, Octahedron } from "@react-three/drei";
import { Suspense } from "react";

function FloatingShapes() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={0.8} color="#00ffff" />
      <pointLight position={[-10, -10, -5]} intensity={0.4} color="#000080" />

      <Float speed={1.5} rotationIntensity={2} floatIntensity={1.5}>
        <Icosahedron args={[1.2, 1]} position={[0, 0, 0]}>
          <MeshDistortMaterial
            color="#00ffff"
            wireframe
            distort={0.3}
            speed={2}
            transparent
            opacity={0.6}
          />
        </Icosahedron>
      </Float>

      <Float speed={2} rotationIntensity={1.5} floatIntensity={1}>
        <Torus args={[0.6, 0.15, 16, 32]} position={[2.5, 1, -1]}>
          <meshStandardMaterial color="#000080" wireframe transparent opacity={0.4} />
        </Torus>
      </Float>

      <Float speed={1.8} rotationIntensity={2.5} floatIntensity={1.2}>
        <Octahedron args={[0.5]} position={[-2.5, -1, -0.5]}>
          <meshStandardMaterial color="#00ffff" wireframe transparent opacity={0.3} />
        </Octahedron>
      </Float>
    </>
  );
}

export default function Scene3D() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <Suspense fallback={null}>
          <FloatingShapes />
        </Suspense>
      </Canvas>
    </div>
  );
}
