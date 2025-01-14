import React, { useEffect, useRef, useState } from "react";
import { MeshTransmissionMaterial, useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useScroll, useSpring, useTransform } from "framer-motion";
import { motion } from "framer-motion-3d";
import * as THREE from "three";

export default function Donut() {
  const { viewport } = useThree();
  const torus = useRef<THREE.Mesh>(null);
  const [scale, setScale] = useState(0.3);
  const { scrollYProgress } = useScroll({
    //@ts-ignore
    container: ".hero",
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 2.5]);
  const springY = useSpring(y, { stiffness: 400, damping: 90 });
  useFrame(({ clock }) => {
    if (!torus.current) return;
    torus.current.rotation.y = clock.getElapsedTime();
    torus.current.rotation.x = clock.getElapsedTime();
    // torus.current.position.y = Math.sin(clock.getElapsedTime()) * 0.1;
    // torus.current.position.x = Math.sin(clock.getElapsedTime());
  });
  const updateScale = () => {
    if (document.documentElement.clientWidth < 768) {
      setScale(0.6);
    } else {
      setScale(0.3);
    }
  };
  useEffect(() => {
    updateScale();
    window.addEventListener("resize", updateScale);
    return () => {
      window.removeEventListener("resize", updateScale);
    };
  }, []);

  return (
    <group scale={viewport.width / 3.75}>
      {/* @ts-ignore */}
      <motion.mesh ref={torus} scale={scale} position={[0, springY, 0]}>
        {/* <torusKnotGeometry args={[1, 0.4, 100, 32]} /> */}
        <torusGeometry args={[1, 0.4, 100, 32]} />
        {/* @ts-ignore */}
        <MeshTransmissionMaterial
          thickness={0.2}
          roughness={0}
          transmission={1}
          ior={1.2}
          chromaticAberration={0.02}
          backside={true}
        />
      </motion.mesh>
    </group>
  );
}
