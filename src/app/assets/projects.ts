interface Project {
  id: number;
  title: string;
  image: string;
  description: string;
  details: string;
  tags: { label: string; color: string }[];
  github: string;
  live: string;
}

const projectsArr: Project[] = [
  {
    id: 0,
    title: "Project 1",
    image: "/images/project-1.png",
    description: "some description",
    details: "lorem ipusum for now ",
    tags: [
      { label: "html", color: "#fdecc8" },
      { label: "css", color: "#fdecc8" },
      { label: "js", color: "#fdecc8" },
    ],
    github: "github.com/fettahaud/project1",
    live: "project1.com",
  },
  {
    id: 1,
    title: "Project 2",
    image: "/images/project-1.png",
    description: "some description",
    details: "lorem ipusum for now ",
    tags: [
      { label: "react", color: "#fdecc8" },
      { label: "tailwind", color: "#fdecc8" },
    ],
    github: "github.com/fettahaud/project2",
    live: "project2.com",
  },
  {
    id: 2,
    title: "Project 3",
    image: "/images/project-1.png",
    description: "some description",
    details: "lorem ipusum for now ",
    tags: [
      { label: "3js", color: "#fdecc8" },
      { label: "r3f", color: "#fdecc8" },
      { label: "gsap", color: "#fdecc8" },
    ],
    github: "github.com/fettahaud/project3",
    live: "project3.com",
  },
];

export default projectsArr;
