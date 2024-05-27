import { Svg } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
// import { useScroll, useSpring, useTransform } from "framer-motion";
import { motion } from "framer-motion-3d";
// import { useEffect } from "react";

// import { useControls } from "leva";

export default function TDLetters() {
  const { viewport } = useThree();
  // const { x } = useControls("3D Letters", { x: { value: 0, step: 0.1 } });

  // const { scrollYProgress } = useScroll();
  // const y = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
  // const springY = useSpring(y, { stiffness: 400, damping: 90 });
  return (
    <motion.group
      scale={viewport.width / 7.6}
      position={[0, viewport.height / 2 - 1, -2]}
    >
      {/* <motion.group position={[0, springY, 0]}> */}
      <Svg src="/FLetter.svg" scale={0.01} position={[-5.3, 0, 0]} />
      {/* </motion.group> */}
      {/* <motion.group position={[0, springY, 0]}> */}
      <Svg src="/ELetter.svg" scale={0.01} position={[-3.3, 0, 0]} />
      {/* </motion.group> */}
      {/* <motion.group position={[0, springY, 0]}> */}
      <Svg src="/TLetter.svg" scale={0.01} position={[-1.3, 0, 0]} />
      {/* </motion.group> */}
      {/* <motion.group position={[0, springY, 0]}> */}
      <Svg src="/TLetter.svg" scale={0.01} position={[1, 0, 0]} />
      {/* </motion.group> */}
      {/* <motion.group position={[0, springY, 0]}> */}
      <Svg src="/HLetter.svg" scale={0.01} position={[3.3, 0, 0]} />
      {/* </motion.group> */}
    </motion.group>
  );
}
