import React, { useEffect, useState } from "react";
import { MeshTransmissionMaterial } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useSpring } from "framer-motion";
import { motion } from "framer-motion-3d";

export default function Donut() {
  const { viewport } = useThree();
  const [scale, setScale] = useState(viewport.width / 1.5);

  useEffect(() => {
    if (viewport.aspect < 0.6) {
      setScale(viewport.aspect * 3.5);
    } else {
      setScale(viewport.aspect * 2.5);
    }
  }, [viewport]);

  const mouse = {
    x: useSpring(0, { stiffness: 400, damping: 90 }),
    y: useSpring(0, { stiffness: 400, damping: 90 }),
  };
  const handleMouseMove = (e: MouseEvent) => {
    mouse.x.set((e.clientX / window.innerWidth - 0.5) * 10);
    mouse.y.set(-(e.clientY / window.innerHeight - 0.5) * 10);
  };
  useEffect(() => {
    const canvas = document.querySelector("canvas");
    if (canvas) {
      canvas.addEventListener("mousemove", handleMouseMove);
    }
    // Clean up the event listener when the component unmounts
    return () => {
      if (canvas) {
        canvas.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  return (
    <>
      {/* @ts-ignore */}
      <motion.mesh
        scale={scale}
        // @ts-ignore
        position={[mouse.x, mouse.y, -5]}
      >
        <sphereGeometry args={[1, 32, 32]} />
        <MeshTransmissionMaterial
          thickness={0.5}
          roughness={0.16}
          transmission={1}
          ior={1.2}
          chromaticAberration={0.03}
          backside={false}
          color={"#0ff"}
          distortionScale={0.5}
          temporalDistortion={0.1}
        />
      </motion.mesh>
    </>
  );
}
