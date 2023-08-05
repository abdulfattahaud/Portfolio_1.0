import { OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";

export default function Experience() {
  return (
    <>
      <OrbitControls makeDefault />

      <directionalLight castShadow position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />

      <mesh>
        <sphereGeometry />
        <meshStandardMaterial color="orange" />
      </mesh>
    </>
  );
}
