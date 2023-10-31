"use client";

import {
  InstancedRigidBodies,
  vec3,
  Physics,
  RigidBody,
  BallCollider,
} from "@react-three/rapier";
import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const BALLS = 250;

export default function CanvasComponent() {
  const api = useRef(null);
  const ballRef = useRef(null);
  const instancesRef = useRef(null);

  const { viewport, camera } = useThree();

  useFrame(({ mouse }) => {
    // Apply a small impulse to all bodies
    api.current!.forEach((body) => {
      const p = vec3(body.translation());
      //   how we can apply an impulse and force them to the right
      //   p.x += -5;
      //   p.y += 0.01;
      //   p.z += -2;
      p.normalize().multiplyScalar(-0.01);
      body.applyImpulse(p, true);
    });

    // Mouse raycasting
    var vector = new THREE.Vector3(mouse.x, mouse.y, 0);
    vector.unproject(camera);
    var dir = vector.sub(camera.position).normalize();
    var distance = -camera.position.z / dir.z;
    var pos = camera.position.clone().add(dir.multiplyScalar(distance));
    ballRef.current?.setNextKinematicTranslation({
      x: pos.x,
      y: pos.y,
      z: pos.z + 1,
    });
  });

  return (
    <>
      <directionalLight castShadow position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />

      <Physics>
        <group>
          <InstancedRigidBodies
            ref={api}
            instances={Array.from({ length: BALLS }, (_, i) => ({
              key: i,
              position: [Math.floor(i / 30), i % 10, 0],
            }))}
            colliders={"ball"}
            linearDamping={5}
          >
            <instancedMesh
              ref={instancesRef}
              args={[undefined, undefined, BALLS]}
              castShadow
            >
              <sphereGeometry args={[0.2]} />
              <meshPhysicalMaterial
                roughness={0}
                metalness={0.5}
                color={"#fff"}
              />
            </instancedMesh>
          </InstancedRigidBodies>
        </group>
        <RigidBody ref={ballRef} type="kinematicPosition">
          <BallCollider args={[1]} />
        </RigidBody>
      </Physics>
    </>
  );
}
