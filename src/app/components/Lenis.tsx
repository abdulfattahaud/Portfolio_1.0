"use client";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import React from "react";

export default function Lenify({ children }: { children: React.ReactNode }) {
  const lenis = useLenis(({ scroll }) => {});
  return <ReactLenis root>{children}</ReactLenis>;
}
