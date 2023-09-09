import React, { createContext, useContext, useState, useRef } from "react";
import gsap from "gsap";
import { useEffect } from "react";

export default function Mouse() {
  const mouse = useRef();
  const { hover } = useHover();
  const moveLight = () => {
    const x = gsap.quickTo("#mouse", "left", {
      duration: 0.1,
    });
    const y = gsap.quickTo("#mouse", "top", {
      duration: 0.1,
    });

    window.addEventListener("pointermove", (e) => {
      x(e.clientX);
      y(e.clientY);
    });
  };
  useEffect(() => {
    moveLight();
  }, []);
  return (
    <div ref={mouse} id="mouse" style={{ transform: `scale(${hover})` }}></div>
  );
}

const HoverContext = createContext();

export function useHover() {
  return useContext(HoverContext);
}

export function HoverProvider({ children }) {
  const [hover, setIsHovered] = useState(1);

  return (
    <HoverContext.Provider value={{ hover, setIsHovered }}>
      {children}
    </HoverContext.Provider>
  );
}
