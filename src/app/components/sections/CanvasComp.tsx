import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Donut from "../ui/3Donut";
import TDLetters from "../ui/3DLetters";
export default function CanvasComp() {
  return (
    <Canvas>
      <Donut />
      <TDLetters />
      {/* <CameraControls /> */}
      <directionalLight intensity={2} position={[0, 2, 3]} />
      <Environment preset="night" />
    </Canvas>
  );
}
