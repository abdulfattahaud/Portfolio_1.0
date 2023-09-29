import SubPageHeader from "../components/SubPageHeader.jsx";
import { useEffect, useRef } from "react";
import { useHover } from "../components/Mouse.jsx";

export default function About() {
  const { setIsHovered } = useHover();

  const hoverAbleEl = useRef([]);

  useEffect(() => {
    if (hoverAbleEl.current) {
      hoverAbleEl.current.forEach((el) => {
        el.addEventListener("mouseover", () =>
          setIsHovered(el.dataset.mouseScale),
        );
        el.addEventListener("mouseout", () => setIsHovered(1));
      });
    }
  }, []);

  return (
    <>
      <SubPageHeader />
      <section id="about">
        <div className="md:mx-auto md:container px-8">
          <div
            className="block mb-10"
            ref={(el) => hoverAbleEl.current.push(el)}
            data-mouse-scale={5}
          >
            <h2 className="text-3xl mb-2.5">Who I'm</h2>
            <p>
              Hi I’m Abdulfettah, A Frontend / Creative developer located in
              Istanbul Türkiye, studying Computer Programming at Istanbul
              university . My first experience with programming was when I was a
              high school student, started with C# and continues with Js/Ts
            </p>
          </div>
          <div
            className="block mb-10"
            ref={(el) => hoverAbleEl.current.push(el)}
            data-mouse-scale={5}
          >
            <h2 className="text-3xl mb-2.5">What I do</h2>
            <p>
              In the realm of frontend development, I'm well-versed in a range
              of technologies that empower me to craft visually appealing and
              highly functional user interfaces. My toolkit includes JavaScript,
              TypeScript, React, SCSS, Bootstrap, and Tailwind, enabling me to
              build dynamic and responsive websites with a keen eye for design
              and user experience.
            </p>
            <br />
            <p>
              But what truly sets me apart is my passion for creative
              programming. I delve into the world of Web Graphics Library
              (WebGL), where I create immersive and visually stunning
              experiences. Leveraging the power of libraries like Three.js and
              React Three Fiber, I breathe life into digital landscapes and
              interactive 3D visuals. I'm not afraid to venture into the realm
              of GLSL (OpenGL Shading Language) to craft custom shaders and
              effects that make my projects truly unique.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
