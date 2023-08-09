import { gsap } from "gsap";
import { useRef } from "react";
import { useEffect } from "react";

export default function Main() {
  const titleRef = useRef();
  const secondTitleRef = useRef();
  const title = "My name is Fettah";
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
      }
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
  });
  return (
    <section id="main" className="w-full">
      <div className="title">
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
    </section>
  );
}
