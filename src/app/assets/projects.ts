enum ColorOption {
  FADEC9 = "#FADEC9",
  E8DEEE = "#E8DEEE",
  DBEDDB = "#DBEDDB",
  D3E5EF = "#D3E5EF",
  EFE3D3 = "#EFE3D3",
  EFD5D3 = "#EFD5D3",
  EFEAD3 = "#EFEAD3",
  FDECC8 = "#FDECC8",
  F1F0EF = "#F1F0EF",
  F5E0E9 = "#F5E0E9",
  EEE0DA = "#EEE0DA",
  DAC9FA = "#DAC9FA",
}

const colorOptions: ColorOption[] = Object.values(ColorOption);

function getRandomColor(): ColorOption {
  const randomIndex = Math.floor(Math.random() * colorOptions.length);
  return colorOptions[randomIndex];
}

interface Project {
  id: number;
  title: string;
  image?: string;
  description?: string;
  details?: string;
  tags: { label: string; color: ColorOption }[];
  github: string;
  live: string;
}

const projectsArr: Project[] = [
  {
    id: 0,
    title: "2D Particles",
    image: "/images/project-1.png",
    description: "some description",
    details: "lorem ipusum for now ",
    tags: [
      { label: "JS", color: getRandomColor() },
      { label: "WebGl", color: getRandomColor() },
      { label: "3Js", color: getRandomColor() },
    ],
    github: "https://github.com/FettahAud/2D-Particles",
    live: "https://2-d-particles.vercel.app/",
  },
  {
    id: 1,
    title: "Travel Visualizer",
    tags: [
      { label: "JS", color: getRandomColor() },
      { label: "GLSL", color: getRandomColor() },
      { label: "R3f", color: getRandomColor() },
    ],
    github: "https://github.com/FettahAud/travel-viualizer",
    live: "https://travel-visualizer.vercel.app/",
  },
  {
    id: 2,
    title: "Sphere Curl",
    tags: [
      { label: "R3F", color: getRandomColor() },
      { label: "WebGl", color: getRandomColor() },
      { label: "Fbo", color: getRandomColor() },
    ],
    github: "https://github.com/FettahAud/curl-particles",
    live: "https://sphere-curl.vercel.app/",
  },
  {
    id: 3,
    title: "Fbo Particles",
    tags: [
      { label: "R3F", color: getRandomColor() },
      { label: "Fbo", color: getRandomColor() },
      { label: "Shaders", color: getRandomColor() },
      { label: "Js", color: getRandomColor() },
    ],
    github: "https://github.com/FettahAud/fbo-particles",
    live: "https://fbo-particles-nine.vercel.app/",
  },
  {
    id: 4,
    title: "Ping pong game",
    tags: [
      { label: "R3F", color: getRandomColor() },
      { label: "Rapier", color: getRandomColor() },
      { label: "Js", color: getRandomColor() },
    ],
    github: "https://github.com/FettahAud/pingpong",
    live: "https://pingpong-silk.vercel.app",
  },
  {
    id: 5,
    title: "Hover Animation",
    tags: [
      { label: "HTML", color: getRandomColor() },
      { label: "Scss", color: getRandomColor() },
      { label: "Js", color: getRandomColor() },
      { label: "Animations", color: getRandomColor() },
    ],
    github: "https://github.com/FettahAud/hover-animation",
    live: "https://hover-animation.vercel.app/",
  },
  {
    id: 6,
    title: "Fox Animations",
    tags: [
      { label: "3Js", color: getRandomColor() },
      { label: "Gsap", color: getRandomColor() },
      { label: "Animations", color: getRandomColor() },
    ],
    github: "https://github.com/FettahAud/Walking-Fox",
    live: "https://moving-fox.vercel.app/",
  },
  {
    id: 7,
    title: "Physics animation",
    tags: [
      { label: "R3F", color: getRandomColor() },
      { label: "Rapier", color: getRandomColor() },
    ],
    github: "https://github.com/FettahAud/rapier-test",
    live: "https://rapier-test.vercel.app/",
  },
  {
    id: 8,
    title: "Animating triangles",
    tags: [
      { label: "R3F", color: getRandomColor() },
      { label: "Shaders", color: getRandomColor() },
      { label: "WebGl", color: getRandomColor() },
    ],
    github: "https://github.com/FettahAud/Animating-Triangles",
    live: "https://animating-triangles.vercel.app/",
  },
  {
    id: 9,
    title: "Slider Animation",
    tags: [
      { label: "Js", color: getRandomColor() },
      { label: "Scss", color: getRandomColor() },
      { label: "Gsap", color: getRandomColor() },
    ],
    github: "https://github.com/FettahAud/Codrop-Clones/tree/main/SlideShow",
    live: "https://fettahaud.github.io/Codrop-Clones/SlideShow/src/index.html",
  },
];

export default projectsArr;
