"use client";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function Magnetic({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = ref.current;
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

    const xTo = gsap.quickTo(node, "x", {
      duration: 1,
      ease: "elastic.out(1, .2",
    });
    const yTo = gsap.quickTo(node, "y", {
      duration: 1,
      ease: "elastic.out(1, .2",
    });

    node!.addEventListener("mousemove", (e) => mouseMove(e));
    node!.addEventListener("mouseleave", mouseLeave);
    return () => {
      node!.removeEventListener("mousemove", (e) => mouseMove(e));
      node!.removeEventListener("mouseleave", mouseLeave);
    };
  }, [ref]);
  return (
    <div className="magnetic" ref={ref}>
      <div className="bounding-rect"></div>
      {children}
    </div>
  );
}
