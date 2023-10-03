import * as THREE from "three";
import { MeshSurfaceSampler } from "three/examples/jsm/math/MeshSurfaceSampler";

const vertex = `
attribute vec3 position2;
uniform float progress;
varying vec2 vUv;
void main(){
  vUv = uv;
  vec3 finalPos = mix(position, position2, sin(progress) * 2.);  
  vec4 mvPosition = modelViewMatrix * vec4( finalPos, 1.0 );
  gl_PointSize =  1.5;
  gl_Position = projectionMatrix * mvPosition;
}
`;
const fragment = `
varying vec2 vUv;

void main(){
    vec3 color = vec3(0.902,0.224,0.275);
    gl_FragColor = vec4(color, 1.0);
}
`;

import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";

const size = 128;
const number = size * size;
function getModelData(shape) {
  const boxGeometry = shape.toNonIndexed();
  const material = new THREE.MeshNormalMaterial();
  const box = new THREE.Mesh(boxGeometry, material);
  const position = new THREE.Vector3();
  const data = new Float32Array(number * 3);
  const uv = new Float32Array(number * 2);
  const sampler = new MeshSurfaceSampler(box).build();
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      const index = i * size + j;
      sampler.sample(position);

      data[3 * index] = position.x;
      data[3 * index + 1] = position.y;
      data[3 * index + 2] = position.z;

      uv[2 * index] = j / (size - 1);
      uv[2 * index + 1] = i / (size - 1);
    }
  }
  return { data, uv };
}

const normalize = (val, max, min) => (val - min) / (max - min);
function ModalPoints() {
  const material = useRef();
  // const [prog, setProg] = useState(0);
  let prog = 0;
  const { data } = getModelData(new THREE.BoxGeometry(5, 5, 5, 50, 50, 50));
  const data2 = getModelData(new THREE.SphereGeometry(3, 64, 32)).data;

  useFrame(({ clock }) => {
    if (material.current) {
      material.current.uniforms.progress.value = prog;
    }
  });

  useEffect(() => {
    document.querySelector(".col-wrapper").addEventListener("scroll", (e) => {
      prog = normalize(e.target.scrollTop, e.target.offsetHeight, 0);
    });
  }, []);

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={data}
          count={number}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-position2"
          array={data2}
          count={number}
          itemSize={3}
        />
      </bufferGeometry>
      <shaderMaterial
        ref={material}
        vertexShader={vertex}
        fragmentShader={fragment}
        uniforms={{
          progress: { value: 0 },
        }}
      />
    </points>
  );
}
export default function Particles() {
  return (
    <Canvas
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 15],
      }}
    >
      <ModalPoints />
    </Canvas>
  );
}
