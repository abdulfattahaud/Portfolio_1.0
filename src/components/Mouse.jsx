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
  const { hover } = useHover();

  const moveLight = () => {
    const mouse = document.querySelector("#mouse");
    let mouseX = 0;
    let mouseY = 0;

    const updateMousePosition = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      updateMouseElementPosition();
    };

    const updateMouseElementPosition = () => {
      const x = mouseX + window.scrollX;
      const y = mouseY + window.scrollY;

      // Set the position of the "mouse" element
      mouse.style.left = `${x}px`;
      mouse.style.top = `${y}px`;
    };

    const handleMouseMove = (e) => {
      // Update mouse position when the mouse or touch moves
      updateMousePosition(e);
    };

    const handleScroll = () => {
      // Update mouse position when scrolling
      updateMouseElementPosition();
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    // Return a cleanup function to remove the event listeners when the component unmounts.
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  };

  useEffect(() => {
    const cleanup = moveLight();
    return () => {
      cleanup(); // Call the cleanup function when the component unmounts.
    };
  }, []);

  return <div id="mouse" style={{ transform: `scale(${hover})` }}></div>;
}
