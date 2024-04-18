"use client";

import Link from "next/link";
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
    </>
  );
}
