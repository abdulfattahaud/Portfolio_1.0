import SubPageHeader from "../components/SubPageHeader.jsx";
import projects from "../projectsArr.js";
import { useHover } from "../components/Mouse.jsx";

export default function Projects() {
  const { setIsHovered } = useHover();
  return (
    <>
      <SubPageHeader />
      <section id="projects">
        <div className="md:mx-auto md:container px-8 h-1">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project mb-5"
              onMouseEnter={() => setIsHovered(4)}
              onMouseLeave={() => setIsHovered(1)}
            >
              <div className="labels">
                <h1 className="text-2xl">{project.name}</h1>
                <p className="text-lg">{project.description}</p>
              </div>
              <div className="image-wrapper">
                <img src={project.image} alt="" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
