"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

export default function Header() {
  const header = useRef<HTMLHeadingElement | null>(null);
  useEffect(() => {
    const scroll = () => {
      if (window.scrollY > 0) {
        header.current?.classList.add("floating");
      } else {
        header.current?.classList.remove("floating");
      }
    };
    window.addEventListener("scroll", scroll);
    return () => {
      window.removeEventListener("scroll", scroll);
    };
  }, []);
  return (
    <header ref={header} className="header">
      <Link className="logo" href={"#main"}>
        FETTAH
      </Link>
      <div>
        <ul>
          <li className="active">
            <Link href={"#main"}>Home</Link>
          </li>
          <li>
            <Link href={"#projects"}>Projects</Link>
          </li>

          <li>
            <Link href={"#about"}>About</Link>
          </li>
          <li>
            <Link href={"#contact"}>Contact</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
