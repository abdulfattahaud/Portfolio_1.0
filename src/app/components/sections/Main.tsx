"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Main() {
  const creative = useRef<HTMLSpanElement | null>(null);
  const wrapper = useRef<HTMLDivElement | null>(null);
  const webgl = useRef<HTMLDivElement | null>(null);
  const list = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!creative.current) return;
    const tl = gsap.timeline({
      defaults: { ease: "expo.inOut", duration: 1 },
      repeat: -1,
    });

    tl.to(list.current!.querySelectorAll("span"), {
      yPercent: 0,
    })
      .to(list.current!.querySelectorAll("span"), {
        yPercent: -100,
      })
      .to(list.current!.querySelectorAll("span"), {
        yPercent: -200,
      })
      .to(list.current!.querySelectorAll("span"), {
        yPercent: -300,
      })
      .to(list.current!.querySelectorAll("span"), {
        yPercent: -400,
      });
  }, []);
  return (
    <section className="hero bg-[#0F0F0F] px-[var(--margin-x)]" id="main">
      <div className="h-full flex items-center">
        <div className="flex flex-col cursor-default">
          <h1 className="text-[6rem] leading-[1.25] font-bold">
            Abdulfettah <span className="font-light">Adwani</span>
          </h1>
          <h2 ref={wrapper} className="text-[4rem] leading-[1.25]">
            <span ref={creative}>
              A <span className="underline">Creative</span>{" "}
              <div
                ref={webgl}
                id="webgl-placeholder"
                className="placeholder overflow-hidden inline-flex relative"
              >
                <span className="opacity-0">WebGl</span>
                <div
                  ref={list}
                  className="hide overflow-hidden inline-flex items-center left-0 top-0 absolute flex-col max-h-full"
                >
                  <span>Web</span>
                  <span>WebGl</span>
                  <span>GSAP</span>
                  <span>3JS</span>
                  <span>Web</span>
                </div>{" "}
              </div>{" "}
            </span>
            Developer
          </h2>
        </div>
      </div>
    </section>
  );
}
