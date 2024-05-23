"use client";

import { useRef } from "react";
import { useLenis } from "@studio-freight/react-lenis";
import { Logo } from "../ui/Logo";

export default function Header() {
  const header = useRef<HTMLHeadingElement | null>(null);
  const lenis = useLenis();
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
