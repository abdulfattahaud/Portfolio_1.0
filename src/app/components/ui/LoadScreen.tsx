"use client";

import { useLayoutEffect } from "react";
import { Logo } from "./Logo";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function LoadScreen({ setLoading, loading }: any) {
  useLayoutEffect(() => {
    const handleLoad = () => setLoading(false);

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  });

  useGSAP(() => {
    if (!loading) {
      gsap.to(".load-screen", {
        duration: 1,
        y: "-100%",
        ease: "power2.inOut",
      });
    }
  }, [loading]);
  return (
    <div className="load-screen">
      <Logo />
    </div>
  );
}
