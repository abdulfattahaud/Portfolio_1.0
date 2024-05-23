"use client";

import { useLayoutEffect, useState } from "react";
import { Logo } from "./Logo";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function LoadScreen() {
  const [loading, setLoading] = useState(true);
  useLayoutEffect(() => {
    window.addEventListener("load", () => setLoading(false));
    return () => {
      window.removeEventListener("load", () => setLoading(false));
    };
  }, []);
  useGSAP(
    () => {
      if (!loading) {
        gsap.to(".load-screen", {
          duration: 1,
          y: "-100%",
          ease: "power2.inOut",
        });
      }
    },
    { dependencies: [loading] }
  );
  return (
    <div className="load-screen">
      <Logo />
    </div>
  );
}
