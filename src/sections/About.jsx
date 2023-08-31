import hoverEffect from "hover-effect";
import { useEffect, useRef } from "react";

export default function About() {
  const img = useRef();
  const hover = () => {
    img.current.replaceChildren();
    new hoverEffect({
      parent: img.current,
      intensity: 0.2,
      angle: 90,
      image1: "../me-1.jpg",
      image2: "../me-2.jpg",
      displacementImage: "../dis-5.jpg",
    });
  };
  useEffect(() => {
    hover();
  });
  return (
    <section id="about" className="gap-5 flex-col md:flex-row mx-5 h-full">
      <div className="text-cont">
        <p className="text-2xl">About me</p>
        <p>I'm A Frontend Developer in my twenties</p>
      </div>
      <div ref={img} className="photo-wrapper"></div>
    </section>
  );
}
