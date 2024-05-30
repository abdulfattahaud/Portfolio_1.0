"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { ImageUtils } from "three";
import { ScrollTrigger } from "gsap/all";

interface Project {
  title: string;
  category: string;
  client: string;
  year: string;
  body: {
    title: string;
    link: string;
    list: string[];
    gallery: { src: string; alt: string }[];
  };
}

const projects: Project[] = [
  {
    title: "Project One",
    category: "Web Development",
    client: "Practice",
    year: "2024",
    body: {
      title: "Project title / Description",
      link: "https://fettah.dev",
      list: ["Development", "Web Animation", "React", "Next.js"],
      gallery: [
        // { src: "", alt: "" },
        // { src: "", alt: "" },
        // { src: "", alt: "" },
      ],
    },
  },
  {
    title: "Project One",
    category: "Web Development",
    client: "Practice",
    year: "2024",
    body: {
      title: "Project title / Description",
      link: "https://fettah.dev",
      list: ["Development", "Web Animation", "React", "Next.js"],
      gallery: [
        // { src: "", alt: "" },
        // { src: "", alt: "" },
        // { src: "", alt: "" },
      ],
    },
  },
  {
    title: "Project One",
    category: "Web Development",
    client: "Practice",
    year: "2024",
    body: {
      title: "Project title / Description",
      link: "https://fettah.dev",
      list: ["Development", "Web Animation", "React", "Next.js"],
      gallery: [
        // { src: "", alt: "" },
        // { src: "", alt: "" },
        // { src: "", alt: "" },
      ],
    },
  },
  {
    title: "Project One",
    category: "Web Development",
    client: "Practice",
    year: "2024",
    body: {
      title: "Project title / Description",
      link: "https://fettah.dev",
      list: ["Development", "Web Animation", "React", "Next.js"],
      gallery: [
        // { src: "", alt: "" },
        // { src: "", alt: "" },
        // { src: "", alt: "" },
      ],
    },
  },
];

const fetchProjects = async () => {
  const res = await fetch(
    "https://decisive-chocolate-cc1b05bddb.strapiapp.com/api/projects?populate=*"
  );
  const data = await res.json();
  return data;
};

const ProjectRow = ({
  Title,
  category,
  client,
  year,
  longTitle,
  link,
  images,
  techs,
}) => {
  const item = useRef<HTMLDivElement | null>(null);
  const projectBody = useRef<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);
  const imageList = images.data.map(({ attributes }) => ({ ...attributes }));
  console.log(imageList);

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
    // ScrollTrigger.refresh();
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
        <p className="cell">{Title}</p>
        <p className="cell">{category}</p>
        <p className="cell">{client}</p>
        <p className="cell">{year}</p>
        <div className="row-bg"></div>
      </div>
      <div ref={projectBody} className="project-body" style={{ height: "0" }}>
        <h1 className="title">{longTitle}</h1>
        <button className="but link">
          <Link href={link} target="_blank">
            See Website
          </Link>
        </button>
        <ul className="techs">
          {/* split line by - */}
          {techs.split("-").map((tech, i) => (
            <li key={i} className="tech">
              {tech}
            </li>
          ))}
        </ul>
        <div className="gallery">
          {imageList.map((img, i) => (
            <div key={i} className="img-wrapper">
              <Image
                src={img.url}
                alt={img.alternativeText}
                width={img.width}
                height={384}
              />
            </div>
          ))}
          {/* <div className="img-wrapper">
            <Image src={"/01.png"} width={1920} height={1280} alt="" />
          </div> */}
        </div>
      </div>
    </>
  );
};

export default function Projects() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetchProjects().then(({ data }) => {
      setProjects(data);
    });
  }, []);
  return (
    <section className="projects">
      <div className="projects-table">
        <div className="row header">
          <div className="cell">Project</div>
          <div className="cell">Category</div>
          <div className="cell">Client</div>
          <div className="cell">Year</div>
        </div>
        {projects.map((project) => (
          <ProjectRow key={project.id} {...project.attributes} />
        ))}
      </div>
    </section>
  );
}
