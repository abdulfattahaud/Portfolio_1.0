"use client";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function Magnetic({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement | null>(null);

  const mouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { width, height, left, top } = ref.current!.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    xTo(x);
    yTo(y);
  };

  const mouseLeave = () => {
    xTo(0);
    yTo(0);
  };

  const xTo = gsap.quickTo(ref.current, "x", {
    duration: 1,
    ease: "elastic.out(1, .2",
  });
  const yTo = gsap.quickTo(ref.current, "y", {
    duration: 1,
    ease: "elastic.out(1, .2",
  });
  return (
    <div
      className="magnetic"
      ref={ref}
      onMouseMove={mouseMove}
      onMouseLeave={mouseLeave}
    >
      <div className="bounding-rect"></div>
      {children}
    </div>
  );
}
