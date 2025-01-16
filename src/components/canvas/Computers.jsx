import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = ({ isMobile, mousePosition }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  const groupRef = useRef();
  const positionRef = useRef({ x: 0, y: 0, z: 0 });
  const rotationRef = useRef({ x: 0, y: -Math.PI * 0.3, z: 0 }); // Changed initial Y rotation

  useFrame((state) => {
    if (!groupRef.current) return;

    // Calculate target position based on mouse
    const targetX = (mousePosition.x - 0.5) * 10;
    const targetY = (mousePosition.y - 0.5) * -8;
    
    // Smooth position interpolation
    positionRef.current.x += (targetX - positionRef.current.x) * 0.02;
    positionRef.current.y += (targetY - positionRef.current.y) * 0.02;

    // Add floating motion
    const time = state.clock.getElapsedTime();
    const floatY = Math.sin(time * 0.5) * 0.5;
    const floatX = Math.cos(time * 0.3) * 0.3;

    // Calculate rotation based on movement direction
    const targetRotationX = (mousePosition.y - 0.5) * Math.PI * 0.5;
    const targetRotationY = (mousePosition.x - 0.5) * Math.PI * 0.8 - Math.PI * 0.3; // Added offset to base rotation
    const targetRotationZ = (mousePosition.x - 0.5) * Math.PI * 0.2;

    // Smooth rotation interpolation
    rotationRef.current.x += (targetRotationX - rotationRef.current.x) * 0.02;
    rotationRef.current.y += (targetRotationY - rotationRef.current.y) * 0.02;
    rotationRef.current.z += (targetRotationZ - rotationRef.current.z) * 0.02;

    // Apply all transformations
    groupRef.current.position.x = positionRef.current.x + floatX;
    groupRef.current.position.y = positionRef.current.y + floatY;
    
    groupRef.current.rotation.x = rotationRef.current.x;
    groupRef.current.rotation.y = rotationRef.current.y;
    groupRef.current.rotation.z = rotationRef.current.z;

    // Add subtle hovering motion
    groupRef.current.position.y += Math.sin(time * 2) * 0.02;
  });

  return (
    <group ref={groupRef}>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={[0, -3, -1.5]}
        rotation={[0, -Math.PI * 0.3, 0]} // Added initial rotation to primitive
      />
    </group>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });

  const handleMouseMove = (event) => {
    const x = event.clientX / window.innerWidth;
    const y = event.clientY / window.innerHeight;
    setMousePosition({ x, y });
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    document.addEventListener("mousemove", handleMouseMove, { passive: true });
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="always"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
        />
        <Computers isMobile={isMobile} mousePosition={mousePosition} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
