import { gsap } from "gsap";
import { useRef } from "react";
import { useEffect } from "react";
import { useHover } from "../components/Mouse";

export default function Main() {
  const titleRef = useRef();
  const scrollRef = useRef();
  const secondTitleRef = useRef();
  const { setIsHovered } = useHover();

  const title = "This is Fettah";
  const secondTitle = "A Frontend/Creative Developer";
  const tl = gsap.timeline();
  useEffect(() => {
    tl.fromTo(
      titleRef.current.children,
      {
        opacity: 0,
        duration: 1,
        top: -20,
      },
      {
        opacity: 1,
        stagger: 0.05,
        top: 0,
      },
      "+=0.5"
    ).fromTo(
      secondTitleRef.current.children,
      {
        opacity: 0,
        duration: 1,
        top: -15,
      },
      {
        opacity: 1,
        stagger: 0.05,
        top: 0,
      },
      "-=1.2"
    );
  }, []);
  return (
    <section id="main" className="w-full">
      <div
        className="title"
        onMouseEnter={() => setIsHovered(10)}
        onMouseLeave={() => setIsHovered(1)}
      >
        <h1 ref={titleRef}>
          {[...title].map((e, i) => (
            <span key={i}>{e}</span>
          ))}
        </h1>
        <h2 ref={secondTitleRef}>
          {[...secondTitle].map((e, i) => (
            <span key={i}>{e}</span>
          ))}
        </h2>
      </div>
      <div ref={scrollRef} className="scroll">
        <img src="../../svg/scroll-down.svg" />
      </div>
    </section>
  );
}
