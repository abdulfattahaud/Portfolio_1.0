import { useLocation } from "react-router-dom";
import { useHover } from "./Mouse.jsx";
import { useEffect, useRef } from "react";

export default function SubPageHeader() {
  const { pathname } = useLocation();
  const { setIsHovered } = useHover();

  const hoverAbleEl = useRef([]);

  useEffect(() => {
    if (hoverAbleEl.current) {
      hoverAbleEl.current.forEach((el) => {
        el.addEventListener("mouseover", () =>
          setIsHovered(el.dataset.mouseScale),
        );
        el.addEventListener("touchstart", () => {
          setIsHovered(el.dataset.mouseScale);
        });
        el.addEventListener("mouseout", () => setIsHovered(1));
        el.addEventListener("touchend", () => setIsHovered(1));
      });
    }
  }, []);

  return (
    <div
      className="subpage-header md:mx-auto md:container px-8"
      style={{
        marginBottom: pathname === "/about" ? "0" : "50px",
      }}
    >
      <div className="upper">
        <span
          ref={(el) => hoverAbleEl.current.push(el)}
          className="hoverEffect"
          data-mouse-scale={3}
        >
          Fettah /&nbsp;
        </span>
        <span
          ref={(el) => hoverAbleEl.current.push(el)}
          className="hoverEffect"
          data-mouse-scale={3}
        >
          {pathname
            .replace(/\//g, " ")
            .replace(/\b\w/g, (match) => match.toUpperCase())}
        </span>
      </div>
      <div className="lower ">
        <span
          ref={(el) => hoverAbleEl.current.push(el)}
          className="hoverEffect"
          data-mouse-scale={3}
        >
          Web Developer
        </span>
      </div>
    </div>
  );
}
