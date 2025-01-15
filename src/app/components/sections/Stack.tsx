"use client";
// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

import {
  CSSL,
  HTML,
  JS,
  SASS,
  TS,
  React,
  NextJS,
  ThreeJS,
  R3F,
  Figma,
  GSAP,
  Tailwind,
  git,
  github,
  Vite,
  FramerMotion,
} from "../ui/StackLogos";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

export default function Stack() {
  const stack = [
    HTML,
    CSSL,
    SASS,
    JS,
    TS,
    React,
    NextJS,
    Tailwind,
    ThreeJS,
    R3F,
    Figma,
    GSAP,
    FramerMotion,
    git,
    github,
    Vite,
  ];
  // useGSAP(() => {
  //   ScrollTrigger.create({
  //     trigger: "#stack",
  //     markers: false,
  //     start: "top 0",
  //     end: "100% 0",
  //     pin: true,
  //     pinSpacing: false,
  //   });
  // });
  return (
    <div id="stack" className="stack">
      <article>
        <h1 className="heading">Technologies in My Stack</h1>
        <div className="logos-wrapper">
          <Splide
            aria-label="Stack Logos"
            options={{
              type: "loop",
              gap: "60px",
              perPage: 10,
              focus: "center",
              pagination: false,
              arrows: false,
              drag: "free",

              autoScroll: {
                speed: 0.7,
                autoStart: true,
                pauseOnHover: false,
                loop: true,
              },
              breakpoints: {
                768: {
                  gap: "30px",
                },
              },
            }}
            extensions={{ AutoScroll }}
          >
            {stack.map((Logo, i) => (
              <SplideSlide key={i}>
                <Logo />
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </article>
    </div>
  );
}
