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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
              massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
              fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
              Gonna make this two columns, text on left and on side particles
              animating with scroll magna interdum eu. Curabitur pellentesque
              nibh nibh, at maximus ante fermentum sit amet. Pellentesque
              commodo lacus at sodales sodales. Quisque sagittis orci ut diam
              condimentum, vel euismod erat placerat.
            </p>
          </div>
          <div
            className="block mb-10"
            ref={(el) => hoverAbleEl.current.push(el)}
            data-mouse-scale={5}
          >
            <h2 className="text-3xl mb-2.5">What I do</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
              massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
              fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
              vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum
              auctor ornare leo, non suscipit magna interdum eu. Curabitur
              pellentesque nibh nibh, at maximus ante fermentum sit amet.
              Pellentesque commodo lacus at sodales sodales. Quisque sagittis
              orci ut diam condimentum, vel euismod erat placerat.
            </p>
          </div>
          <div
            className="block mb-10"
            ref={(el) => hoverAbleEl.current.push(el)}
            data-mouse-scale={5}
          >
            <h2 className="text-3xl mb-2.5">What I do</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
              massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
              fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
              vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum
              auctor ornare leo, non suscipit magna interdum eu. Curabitur
              pellentesque nibh nibh, at maximus ante fermentum sit amet.
              Pellentesque commodo lacus at sodales sodales. Quisque sagittis
              orci ut diam condimentum, vel euismod erat placerat.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
