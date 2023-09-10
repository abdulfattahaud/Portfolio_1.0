import { useRef, useState } from "react";
import { useHover } from "./Mouse";

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
