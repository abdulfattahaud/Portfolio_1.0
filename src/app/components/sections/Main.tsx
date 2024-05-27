"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ALetter, ELetter, FLetter, HLetter, TLetter } from "../ui/HeroLetters";
import CanvasComp from "./CanvasComp";

gsap.registerPlugin(ScrollTrigger);

export default function Main() {
  useGSAP(() => {
    const tl = gsap.timeline();
    ScrollTrigger.create({
      trigger: ".hero",
      start: "top 70px",
      end: "100% 70px",
      scrub: 1,
      markers: false,
      animation: tl,
      pin: true,
      pinSpacing: false,
      // once: true,
    });
    // take odd
    // tl.from(
    //   ".letter:first-child",
    //   {
    //     y: -40,
    //     ease: "power2.out",
    //     duration: 0.75,
    //   },
    //   0
    // )
    //   .from(
    //     ".letter:nth-child(2)",
    //     {
    //       y: 40,
    //       ease: "power2.out",
    //     },
    //     0
    //   )
    //   .from(
    //     ".letter:nth-child(3)",
    //     {
    //       y: -20,
    //       ease: "power2.out",
    //     },
    //     0
    //   )
    //   .from(
    //     ".letter:nth-child(4)",
    //     {
    //       y: -80,
    //       ease: "power2.out",
    //     },
    //     0
    //   )
    //   .from(
    //     ".letter:nth-child(5)",
    //     {
    //       y: 30,
    //       ease: "power2.out",
    //     },
    //     0
    //   )
    //   .from(
    //     ".letter:nth-child(6)",
    //     {
    //       y: -20,
    //       ease: "power2.out",
    //     },
    //     0
    //   );
    // // take even
  });
  return (
    <section className="hero" id="main">
      <div className="canvas-wrapper">
        <CanvasComp />
      </div>
      {/* <div className="letters">
          <FLetter />
          <ELetter />
          <TLetter />
          <TLetter />
          <ALetter />
          <HLetter />
        </div> */}
    </section>
  );
}
