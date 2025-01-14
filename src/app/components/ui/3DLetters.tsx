import { Svg } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
// import { useScroll, useSpring, useTransform } from "framer-motion";
import { motion } from "framer-motion-3d";
import { useEffect, useState } from "react";
// import { useEffect } from "react";

// import { useControls } from "leva";

export default function TDLetters() {
  // const { viewport } = useThree();
  // const [scale, setScale] = useState(viewport.width / 10);
  // const [center, setCenter] = useState(viewport.width / 2);
  // const updateScale = () => {
  //   setCenter(viewport.width / 2);
  //   if (document.documentElement.clientWidth < 768) {
  //     setScale(0.6);
  //   } else {
  //     setScale(viewport.width / 10);
  //   }
  // };
  // useEffect(() => {
  //   updateScale();
  //   window.addEventListener("resize", updateScale);
  //   return () => {
  //     window.removeEventListener("resize", updateScale);
  //   };
  // }, []);
  // const { x } = useControls("3D Letters", { x: { value: 0, step: 0.1 } });

  // const { scrollYProgress } = useScroll();
  // const y = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
  // const springY = useSpring(y, { stiffness: 400, damping: 90 });
  const { gl, camera } = useThree();
  const resizeHandler = () => {
    gl.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // camera. = window.innerWidth / window.innerHeight;
  };
  useEffect(() => {
    gl.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  }, []);
  return (
    <motion.group position={[0, 0, -2]}>
      <Svg src="/fettah.svg" scale={0.008} position={[0, 0, 0]} />
    </motion.group>
  );
}
