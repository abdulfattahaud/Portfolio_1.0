import { Svg } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { motion } from "framer-motion-3d";
import { useEffect, useState } from "react";

import { useControls } from "leva";

export default function TDLetters() {
  const { viewport } = useThree();
  const [scale, setScale] = useState(viewport.width / 9.4);
  const [yPos, setYPos] = useState(viewport.height / 2 - 3);

  useEffect(() => {
    if (viewport.width < 500) {
      setScale(viewport.width / 10);
      setYPos(viewport.height / 2 - 3.5);
    } else {
      setScale(viewport.width / 9.4);
    }
  }, [viewport.width, viewport.height]);
  useEffect(() => {
    setYPos(viewport.height / 2 - 2.3);
  }, [viewport.height]);
  return (
    <motion.group scale={scale} position={[0, yPos, -2]}>
      <Svg src="/FLetter.svg" scale={0.01} position={[-6.5, 0, 0]} />
      <Svg src="/ELetter.svg" scale={0.01} position={[-4.6, 0, 0]} />
      <Svg src="/TLetter.svg" scale={0.01} position={[-2.7, 0, 0]} />
      <Svg src="/TLetter.svg" scale={0.01} position={[-0.5, 0, 0]} />
      <Svg src="/ALetter.svg" scale={0.01} position={[1.7, 0, 0]} />
      <Svg src="/HLetter.svg" scale={0.01} position={[4.4, 0, 0]} />
    </motion.group>
  );
}
