"use client";

import { useRef } from "react";
import { useLenis } from "@studio-freight/react-lenis";
import { Logo } from "../ui/Logo";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Header({ loaded }: { loaded: boolean }) {
  const header = useRef<HTMLHeadingElement | null>(null);
  const lenis = useLenis();

  useGSAP(() => {
    if (header.current) {
      gsap.set(".header .logo", {
        y: "-200%",
      });
      if (loaded) {
        gsap.to(".header .logo", {
          duration: 0.5,
          y: "0%",
          delay: 0.75,
          ease: "power2.out",
        });
      }
    }
  }, [loaded]);
  return (
    <header ref={header} className="header">
      <Logo />
      <div>
        <ul>
          <li
            className="active"
            onClick={() => {
              lenis.scrollTo("#main");
            }}
          >
            Home
          </li>
          <li
            onClick={() => {
              lenis.scrollTo("#projects");
            }}
          >
            Projects
          </li>
          <li
            onClick={() => {
              lenis.scrollTo("#about");
            }}
          >
            About
          </li>
          <li
            onClick={() => {
              lenis.scrollTo("#contact");
            }}
          >
            Contact
          </li>
        </ul>
      </div>
    </header>
  );
}
