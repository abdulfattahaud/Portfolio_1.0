"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import Magnetic from "../Magnetic";
import { useLenis } from "@studio-freight/react-lenis";

export default function Header() {
  const header = useRef<HTMLHeadingElement | null>(null);
  const lenis = useLenis();
  console.log(lenis);
  return (
    <header ref={header} className="header">
      <div
        className="logo"
        onClick={() => {
          lenis.scrollTo(0);
        }}
      >
        <span className="copy">&copy;</span>
        <span className="text">
          <span>Code By Fettah Adwani</span>
        </span>
      </div>
      <div>
        <ul>
          <Magnetic>
            <li
              className="active"
              onClick={() => {
                lenis.scrollTo("#main");
              }}
            >
              Home
            </li>
          </Magnetic>
          <Magnetic>
            <li
              onClick={() => {
                lenis.scrollTo("#projects");
              }}
            >
              {/* <Link href={"#projects"}>Projects</Link> */}
              Projects
            </li>
          </Magnetic>
          <Magnetic>
            <li
              onClick={() => {
                lenis.scrollTo("#about");
              }}
            >
              About
            </li>
          </Magnetic>
          <Magnetic>
            <li
              onClick={() => {
                lenis.scrollTo("#contact");
              }}
            >
              Contact
            </li>
          </Magnetic>
        </ul>
      </div>
    </header>
  );
}
