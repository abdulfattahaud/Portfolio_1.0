"use client";

import { Canvas } from "@react-three/fiber";
import Link from "next/link";
import CanvasComponent from "../Canvas";
import Magnetic from "../Magnetic";
import { useLenis } from "@studio-freight/react-lenis";

export default function Main() {
  const lenis = useLenis();
  return (
    <>
      <section className="hero" id="main">
        <h1 className="title">
          Hi there,
          <br />
          I’m Abd Al-Fattah,
          <br />
          a Frontend / Creative
          <br />
          Developer
        </h1>

        <div className="actions">
          <Magnetic>
            <div
              className="buf buf-primary"
              onClick={() => lenis.scrollTo("#projects")}
            >
              See what I do
            </div>
          </Magnetic>
          <Magnetic>
            <div className="buf buf-black">
              <Link href="mailto:fettahaud@gmail.com">Hire me</Link>
            </div>
          </Magnetic>
        </div>
      </section>
      {/* <div id="canvas-wrapper">
        <Canvas
          camera={{
            fov: 45,
            near: 0.1,
            far: 200,
            position: [-4, 3, 6],
          }}
        >
          <CanvasComponent />
        </Canvas>
      </div> */}
    </>
  );
}
