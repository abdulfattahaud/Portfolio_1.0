import React, { useRef } from "react";
import { MeshTransmissionMaterial, useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useScroll, useSpring, useTransform } from "framer-motion";
import { motion } from "framer-motion-3d";

export default function Donut() {
  const { viewport } = useThree();
  const torus = useRef(null);
  const { scrollYProgress } = useScroll({
    //@ts-ignore
    container: ".hero",
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 2.5]);
  const springY = useSpring(y, { stiffness: 400, damping: 90 });
  useFrame(() => {
    //@ts-ignore
    torus.current.rotation.x += 0.02;
    //@ts-ignore
    torus.current.rotation.z -= 0.02;
  });

  return (
    <group scale={viewport.width / 3.75}>
      {/* @ts-ignore */}
      <motion.mesh ref={torus} scale={0.3} position={[0, springY, 0]}>
        <torusKnotGeometry args={[1, 0.4, 100, 32]} />
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
