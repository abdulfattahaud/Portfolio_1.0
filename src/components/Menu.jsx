import { useEffect, useState } from "react";
import { useHover } from "./Mouse";
import { useRef } from "react";
import { gsap } from "gsap";

export function MenuIcon({ isOpen, setIsOpen }) {
  const { setIsHovered } = useHover();
  const [hover, setHover] = useState(false);
  const icon = useRef();
  const iconHover = () => {
    setIsHovered(4);
    setHover(true);
  };
  const iconUnHover = () => {
    setIsHovered(1);
    setHover(false);
  };

  return (
    <svg
      ref={icon}
      id="menu-icon"
      onClick={() => setIsOpen(!isOpen)}
      onMouseEnter={() => iconHover()}
      onMouseLeave={() => iconUnHover()}
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="50"
      viewBox="0 0 39 24"
      fill="none"
    >
      <path
        d="M2 2H37"
        stroke={isOpen ? "#111e2d" : "#e1e1e1"}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d={hover ? "M2 12H37" : "M2 12H29"}
        stroke={isOpen ? "#111e2d" : "#e1e1e1"}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d={hover ? "M2 22H37" : "M2 22H20"}
        stroke={isOpen ? "#111e2d" : "#e1e1e1"}
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Menu({ isOpen }) {
  const menu = useRef();
  const { setIsHovered } = useHover();
  const menuItems = ["Home", "About", "Works", "Contact"];
  if (isOpen) {
    gsap.to(menu.current, {
      clipPath: "circle(150% at calc(100% - 45px) 45px)",
      ease: "in-out",
      duration: 0.5,
    });
  } else {
    gsap.to(menu.current, {
      clipPath: "circle(0% at calc(100% - 45px) 45px)",
      duration: 0.5,
    });
  }

  return (
    <div ref={menu} id="menu">
      <div
        className="menu-wrapper"
        onMouseEnter={() => setIsHovered(0)}
        onMouseLeave={() => setIsHovered(1)}
      >
        {menuItems.map((item, i) => {
          const [hover, setHover] = useState(false);
          return (
            <div
              key={i}
              className={`menu-item ${hover ? "hover" : ""}`}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
}
