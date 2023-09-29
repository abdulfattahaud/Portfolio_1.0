import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
} from "react";
import gsap from "gsap";

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

export default function Mouse() {
  const mouseRef = useRef();
  const { hover } = useHover();

  const moveLight = () => {
    const x = gsap.quickTo("#mouse", "left", {
      duration: 0.1,
    });
    const y = gsap.quickTo("#mouse", "top", {
      duration: 0.1,
    });

    const handleMouseMove = (e) => {
      x(e.clientX);
      y(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleMouseMove);

    // Return a cleanup function to remove the event listeners when the component unmounts.
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleMouseMove);
    };
  };

  useEffect(() => {
    const cleanup = moveLight();
    return () => {
      cleanup(); // Call the cleanup function when the component unmounts.
    };
  }, []);

  return (
    <div
      ref={mouseRef}
      id="mouse"
      style={{ transform: `scale(${hover})` }}
    ></div>
  );
}
