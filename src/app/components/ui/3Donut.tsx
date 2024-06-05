"use client";

import React, { useEffect, useLayoutEffect, useState } from "react";
import { MeshTransmissionMaterial } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useSpring } from "framer-motion";
import { motion } from "framer-motion-3d";
import { useControls } from "leva";

export default function Donut() {
  const { viewport } = useThree();
  const [scale, setScale] = useState(viewport.width / 1.5);
  const [debug, setDebug] = useState(false);

  const { color } = useControls({
    color: { value: "#0ff", label: "Color" },
  });

  useEffect(() => {
    if (viewport.aspect < 0.6) {
      setScale(viewport.aspect * 3.5);
    } else {
      setScale(viewport.aspect * 2.5);
    }
  }, [viewport]);

  const mouse = {
    x: useSpring(0, { stiffness: 400, damping: 90 }),
  };
  useEffect(() => {
    if (window.location.hash === "#debug") {
      setDebug(true);
    }
  }, [setDebug]);

  useEffect(() => {
    const canvas = document.querySelector("#canvas");
    console.log(canvas);
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x.set((e.clientX / window.innerWidth - 0.5) * 10);
    };
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
        position={[mouse.x, 0, -5]}
      >
        <sphereGeometry args={[1, 32, 32]} />
        <MeshTransmissionMaterial
          thickness={0.5}
          roughness={0.16}
          transmission={1}
          ior={1.2}
          chromaticAberration={0.03}
          backside={false}
          color={debug ? color : "#0ff"}
          distortionScale={0.5}
          temporalDistortion={0.1}
        />
      </motion.mesh>
    </>
  );
}
