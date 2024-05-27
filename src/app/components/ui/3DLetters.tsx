import { Svg } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useControls } from "leva";

export default function TDLetters() {
  const { viewport } = useThree();
  // const { x } = useControls("3D Letters", { x: { value: 0, step: 0.1 } });

  return (
    <group
      scale={viewport.width / 7.6}
      position={[0, viewport.height / 2 - 1, -2]}
    >
      <Svg src="/FLetter.svg" scale={0.01} position={[-5.3, 0, 0]} />
      <Svg src="/ELetter.svg" scale={0.01} position={[-3.3, 0, 0]} />
      <Svg src="/TLetter.svg" scale={0.01} position={[-1.3, 0, 0]} />
      <Svg src="/TLetter.svg" scale={0.01} position={[1, 0, 0]} />
      <Svg src="/HLetter.svg" scale={0.01} position={[3.3, 0, 0]} />
    </group>
  );
}
