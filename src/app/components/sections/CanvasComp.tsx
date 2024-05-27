import { CameraControls, Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Donut from "../ui/3Donut";
import TDLetters from "../ui/3DLetters";
import { useControls } from "leva";

export default function CanvasComp() {
  // const { active } = useControls("Camera Toggle", {
  //   active: { value: false },
  // });
  return (
    <Canvas>
      <Donut />
      <TDLetters />
      {/* <CameraControls 
      // enabled={active} 
      /> */}
      <directionalLight intensity={2} position={[0, 2, 3]} />
      <Environment preset="city" />
    </Canvas>
  );
}
