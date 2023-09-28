import { useState } from "react";
import { useHover } from "./Mouse";
import { useRef } from "react";
import { gsap } from "gsap";
import { useNavigate } from "react-router-dom";
import store from "../store.js";

export function Menu() {
  const { menuState, changeMenuState } = store();
  const navigate = useNavigate();
  const menu = useRef();
  const { setIsHovered } = useHover();
  const menuItems = [
    { label: "Home", route: "/" },
    { label: "About", route: "about" },
    { label: "Works", route: "works" },
    { label: "Contact", route: "contact" },
  ];
  if (menuState) {
    gsap.to(menu.current, {
      clipPath: "circle(150% at calc(100% - 90px) 60px)",
      ease: "in-out",
      duration: 0.5,
    });
  } else {
    gsap.to(menu.current, {
      clipPath: "circle(0% at calc(100% - 90px) 60px)",
      duration: 0.5,
    });
  }

  const clickHandler = (item) => {
    navigate(item.route);
    changeMenuState(false);
  };

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
              onClick={() => clickHandler(item)}
            >
              {item.label}
            </div>
          );
        })}
      </div>
    </div>
  );
}
