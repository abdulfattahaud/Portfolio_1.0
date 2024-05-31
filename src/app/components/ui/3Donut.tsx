import React, { useEffect, useRef, useState } from "react";
import { MeshTransmissionMaterial, useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import {
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { motion } from "framer-motion-3d";
import * as THREE from "three";

export default function Donut() {
  const { viewport } = useThree();
  const torus = useRef<THREE.Mesh>(null);
  const [scale, setScale] = useState((viewport.height * viewport.width) / 25);
  const { scrollYProgress } = useScroll({
    //@ts-ignore
    container: ".hero",
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 2.5]);
  const springY = useSpring(y, { stiffness: 400, damping: 90 });
  // useFrame(({ clock }) => {
  // if (!torus.current) return;
  // torus.current.rotation.z = clock.getElapsedTime();
  // torus.current.rotation.y = clock.getElapsedTime();
  // torus.current.rotation.x = clock.getElapsedTime();
  // torus.current.position.y = Math.sin(clock.getElapsedTime()) * 0.1;
  // torus.current.position.x = Math.sin(clock.getElapsedTime());
  // });
  useEffect(() => {
    setScale((viewport.height * viewport.width) / 25);
  }, [viewport.height, viewport.width]);
  const mouse = {
    x: useSpring(0, { stiffness: 400, damping: 90 }),
    y: useSpring(0, { stiffness: 400, damping: 90 }),
  };
  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.x.set((e.clientX / window.innerWidth - 0.5) * 10);
      mouse.y.set(-(e.clientY / window.innerHeight - 0.5) * 10);
    };

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
        ref={torus}
        scale={scale}
        position={[mouse.x, mouse.y, -5]}
        // onMouseMove={() => console.log("hovered")}
      >
        {/* <torusGeometry args={[1, 0.4, 100, 32]} /> */}
        <sphereGeometry args={[1, 32, 32]} />
        {/* @ts-ignore */}
        <MeshTransmissionMaterial
          thickness={0.5}
          roughness={0.16}
          transmission={1}
          ior={1.2}
          chromaticAberration={0.03}
          backside={true}
          color={"#0ff"}
        />
      </motion.mesh>
    </>
  );
}
