import { devImages, toolImages } from "@/app/assets/Images";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="mx-auto container px-8 md:px-0 ">
      {/* <h1 className="section-title">About</h1> */}
      <div className="block me">
        <h2>Who I&apos;m</h2>
        <p>
          Hi I’m Abdelfattah, A Frontend / Creative developer located in
          Istanbul Türkiye from Syria, studying Computer Programming at Istanbul
          university.
          <br /> My first experience with programming was when I was a high
          school student, started with C# and continues with Js/Ts
        </p>
      </div>
      <div className="block do">
        <h2>What I do</h2>
        <p>
          I&apos;m a Frontend / Creative developer, I love to create beautiful
          websites and web apps, I&apos;m also interested in UI/UX design and
          creating beautiful user interfaces,
          <br /> I&apos;m also interested in 3D design and animation, I’m using
          Blender for 3D design and animation,
        </p>
      </div>
      <div className="block skills">
        <h2>My Skills</h2>
        <p>
          My main focus is on Frontend Development, and I have experience with
          various technologies such as HTML, CSS, JavaScript, TypeScript, React,
          Next.js, and more. I&apos;m also interested in 3D design and
          animation, and I use Blender for that. Additionally, I have experience
          with 3D libraries such as Three.js and React Three Fiber.
        </p>
      </div>
      {/* <div className="block stack">
        <h2>My Tech Stack</h2>
        <div className="dev">
          <h3>Development</h3>
          <ul>
            {devImages.map((image, id) => (
              <li key={id}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="tools">
          <h3>Tools</h3>
          <ul>
            {toolImages.map((image, id) => (
              <li key={id}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                />
              </li>
            ))}
          </ul>
        </div>
      </div> */}
    </section>
  );
}
