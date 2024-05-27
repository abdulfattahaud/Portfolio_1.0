import React, { useRef } from "react";
import { MeshTransmissionMaterial, useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion-3d";

export default function Donut() {
  const { nodes } = useGLTF("/torrus.glb");
  const { viewport } = useThree();
  const torus = useRef(null);
  const { scrollYProgress } = useScroll({
    container: ".hero",
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 2.5]);
  useFrame(() => {
    torus.current.rotation.x += 0.02;
  });

  return (
    <group scale={viewport.width / 3.75}>
      <motion.mesh ref={torus} {...nodes.Torus002} position={[0, y, 0]}>
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
