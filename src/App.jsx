// Import Swiper styles
import "swiper/css";
import "./styles/home.scss";
import Main from "./sections/Main.jsx";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Footer from "./sections/Footer";
import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export default function App() {
  const mouse = useRef();
  const moveLight = () => {
    const x = gsap.quickTo("#mouse", "left", {
      duration: 0.5,
    });
    const y = gsap.quickTo("#mouse", "top", {
      duration: 0.5,
    });

    window.addEventListener("pointermove", (e) => {
      x(e.clientX);
      y(e.clientY);
    });
  };
  useLayoutEffect(() => {
    moveLight();
    // return () => window.removeEventListener("pointermove" );
  });
  return (
    <div id="app">
      <div ref={mouse} id="mouse"></div>
      <Main />
    </div>
  );
}
