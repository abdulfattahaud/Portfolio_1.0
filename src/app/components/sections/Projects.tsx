"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";

interface Project {
  title: string;
  category: string;
  client: string;
  year: number;
  body: {
    title: string;
    link: string;
    list: string[];
    gallery: { src: string; alt: string }[];
  };
}

const projects: Project[] = [
  {
    title: "Can Yilmaz Portfolio",
    category: "Landing Page",
    client: "Can Yilmaz",
    year: 2023,
    body: {
      title: "Can Yilmaz's personal animated portfolio",
      link: "https://can-portfolio-plum.vercel.app/",
      list: [
        "Landing Page Development",
        "Web Animation",
        "React",
        "Next.js",
        "GSAP",
      ],
      gallery: [
        { src: "/projects images/can-yilmaz-01.png", alt: "" },
        { src: "/projects images/can-yilmaz-02.png", alt: "" },
        { src: "/projects images/can-yilmaz-03.png", alt: "" },
      ],
    },
  },
  {
    title: "Entrepreneurs",
    category: "React App",
    client: "Qoves",
    year: 2024,
    body: {
      title: "A React site for Qoves client's entrepreneurs",
      link: "https://entrepreneurs-tawny.vercel.app/",
      list: ["React", "Landing Page", "Next.js", "GSAP", "Lottie Files"],
      gallery: [
        { src: "/projects images/ent-01.png", alt: "" },
        { src: "/projects images/ent-02.png", alt: "" },
        { src: "/projects images/ent-03.png", alt: "" },
      ],
    },
  },
  {
    title: "Komet Website",
    category: "React App",
    client: "Qoves",
    year: 2024,
    body: {
      title: "A React site for Qoves client's Komet",
      link: "https://komet-next.vercel.app/",
      list: ["React", "Next.js", "Landing Page", "GSAP", "THREE.js"],
      gallery: [
        { alt: "", src: "/projects images/komet-01.png" },
        { alt: "", src: "/projects images/komet-02.png" },
        { alt: "", src: "/projects images/komet-03.png" },
      ],
    },
  },
];

const ProjectRow = ({ title, category, client, year, body }: Project) => {
  const item = useRef<HTMLDivElement | null>(null);
  const projectBody = useRef<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);

  const enterAnimation = (e: any) => {
    const currentItem = item.current;
    if (!currentItem) return;
    let t = e.target.getBoundingClientRect();
    e.clientY < t.top + t.height / 2
      ? gsap.fromTo(
          currentItem.querySelector(".row-bg"),
          {
            top: "-100%",
          },
          {
            top: 0,
            duration: 0.2,
          }
        )
      : gsap.fromTo(
          currentItem.querySelector(".row-bg"),
          {
            top: "100%",
            duration: 0.2,
          },
          { top: 0, duration: 0.2 }
        );
  };
  const leaveAnimation = (e: any) => {
    const currentItem = item.current;
    if (!currentItem) return;
    let t = e.target.getBoundingClientRect();
    if (!currentItem) return;
    e.clientY < t.top + t.height / 2
      ? gsap.to(currentItem.querySelector(".row-bg"), {
          top: "-100%",
          duration: 0.2,
        })
      : gsap.to(currentItem.querySelector(".row-bg"), {
          top: "100%",
          duration: 0.2,
        });
  };

  useEffect(() => {
    const currentItem = item.current;
    if (!currentItem) return;
    currentItem.addEventListener("mouseenter", enterAnimation);
    currentItem.addEventListener("mouseleave", leaveAnimation);
    currentItem.addEventListener("click", () => setOpen(!open));

    return () => {
      if (!currentItem) return;
      currentItem.removeEventListener("mouseenter", (e: any) =>
        enterAnimation(e)
      );
      currentItem.removeEventListener("mouseleave", (e: any) =>
        leaveAnimation(e)
      );
      currentItem.removeEventListener("click", (e: any) => setOpen(!open));
    };
  });

  useEffect(() => {
    const currentProjectBody = projectBody.current;
    if (!currentProjectBody) return;
    if (open) {
      gsap.to(currentProjectBody, {
        height: "auto",
        duration: 0.3,
      });
    } else {
      gsap.to(currentProjectBody, {
        height: "0",
        duration: 0.3,
      });
    }
  }, [open]);
  return (
    <>
      <div ref={item} className="row body">
        <p className="cell">{title}</p>
        <p className="cell">{category}</p>
        <p className="cell">{client}</p>
        <p className="cell">{year}</p>
        <div className="row-bg"></div>
      </div>
      <div ref={projectBody} className="project-body" style={{ height: "0" }}>
        <h1 className="title">{body.title}</h1>
        <button className="but link">
          <Link href={body.link}>See Website</Link>
        </button>
        <ul>
          {body.list.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
        <div className="gallery">
          {body.gallery.map((img, i) => (
            <Image
              key={i}
              src={img.src}
              alt={img.alt}
              width={400}
              height={400}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projects-table">
        <div className="row header">
          <div className="cell">Project</div>
          <div className="cell">Category</div>
          <div className="cell">Client</div>
          <div className="cell">Year</div>
        </div>
        {projects.map((project, i) => (
          <ProjectRow key={i} {...project} />
        ))}
      </div>
    </section>
  );
}
