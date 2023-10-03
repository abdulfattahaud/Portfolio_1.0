import { useRef, useState } from "react";
import { useHover } from "./Mouse";
import store from "../store.js";

export default function MenuIcon() {
  const { menuState, changeMenuState } = store();
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
      onClick={() => changeMenuState(!menuState)}
      onMouseEnter={() => iconHover()}
      onMouseLeave={() => iconUnHover()}
      onTouchStart={() => iconHover()}
      onTouchEnd={() => iconUnHover()}
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="50"
      viewBox="0 0 39 24"
      fill="none"
    >
      <path
        d="M2 2H37"
        stroke="#e63946"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d={hover ? "M2 12H37" : "M2 12H29"}
        stroke="#e63946"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d={hover ? "M2 22H37" : "M2 22H20"}
        stroke="#e63946"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}
