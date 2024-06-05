import * as React from "react";

type ExperienceProps = {
  title: string;
  dateRange: string;
  position: string;
  description: string;
  projects: string[];
};

const Experience: React.FC<ExperienceProps> = ({
  title,
  dateRange,
  position,
  description,
  projects,
}) => {
  return (
    <section className="mt-12 max-md:mt-10 max-md:max-w-full font-geist">
      <h2 className="text-3xl font-semibold text-zinc-700">{title}</h2>
      <p className="mt-6 text-xl font-semibold text-zinc-600">
        &gt; {position} <span className="text-zinc-600">{dateRange}</span>
      </p>
      <p
        className="self-start mt-3 ml-5 text-lg text-black max-md:max-w-full"
        dangerouslySetInnerHTML={{ __html: description }}
      ></p>
      {projects.length > 0 && (
        <div className="mt-6 max-md:max-w-full text-black">
          <p className="mb-4">Some of projects I worked on there:</p>
          <ul className="flex flex-col ml-4">
            {projects.map((project, index) => (
              <li key={index}>
                <a href={project}>- {project}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};

type ContactProps = {
  website: string;
  email: string;
  linkedin: string;
};

const Contact: React.FC<ContactProps> = ({ website, email, linkedin }) => (
  <div className="flex flex-col grow px-6 py-px w-full text-lg text-black bg-white max-md:px-5 max-md:mt-7 font-geist">
    <h2 className="text-xl font-semibold">Contact</h2>
    <p className="mt-3.5">
      🌐 <a href={website}>{website}</a>
    </p>
    <p className="mt-3">
      📧 <a href={`mailto:${email}`}>{email}</a>
    </p>
    <p className="mt-3">
      🔗 <a href={linkedin}>{linkedin}</a>
    </p>
  </div>
);

const Resume: React.FC = () => {
  const experiences = [
    {
      title: "Freelancer Developer - 22/24",
      dateRange: "Dec 23/May 24",
      position: "Part time Creative Developer @Qoves",
      description: `At <b>Qoves</b> I was responsible for building creative landing pages based on Figma designs provided by the team,
        I had to work with the full product engineering team to make Saas product for both client and customer sides beside creative development.<br /> <br />
        By <b>creative</b> development, I mean anything out of the box like web animations, 3d on the web, particles systems, and web shading, etc.<br /><br />
        In that short term, I could take my skills in development to a higher level. I learned about <b>Strapi</b> for CMS management and got introduced to Lottie for extreme complex web animations.`,
      projects: [
        "https://entrepreneurs-tawny.vercel.app/",
        "https://qoves-saas-local-ten.vercel.app/",
        "https://qoves-saas-customer.vercel.app/",
      ],
    },
    {
      title: "Frontend Developer - 21/22",
      dateRange: "Jun 22/Dec 22",
      position: "Frontend Developer @Kumsal Ajans",
      description: `As a <b>Frontend Developer</b> I was responsible for building full product from scratch to deliver it with product engineering team, using Laravel as a backend and Figma as design platform,
<br /><br />
      I gained valuable experience in that term, learned how Front/Back communicate and work together to provide a perfect product, I learned about custom cms system which was built there by an older Senior developer, they call it <b>Kumsal Panel</b>
      <br /><br />
      I had to mention also my experience with <b>Jira</b>, my first use case was there, I learned how big products being managed through the entire team without single word out of mouth `,
      projects: [],
    },
  ];

  return (
    <div className="flex justify-center items-center px-16 py-20 bg-white max-md:px-5 font-geist">
      <div className="flex flex-col mt-20 w-full max-w-[1100px] max-md:mt-10 max-md:max-w-full">
        <header className="text-5xl font-semibold text-black font-geist max-md:max-w-full max-md:text-4xl">
          Abdulfettah Adwani
        </header>

        <section className="mt-12 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[65%] max-md:ml-0 max-md:w-full">
              <article className="grow justify-center px-10 py-8 w-full text-lg text-black bg-zinc-100 max-md:px-5 max-md:mt-7 max-md:max-w-full">
                I&apos;m a{" "}
                <span className="font-semibold">Frontend Developer</span> based
                in Istanbul with
                <span className="font-semibold">4 years of experience</span> in
                the software industry. My focus area for the past few years has
                been Creative development with 3JS, WebGL, and R3F.
              </article>
            </div>
            <aside className="flex flex-col ml-5 w-[35%] max-md:ml-0 max-md:w-full">
              <Contact
                website="https://fettah.dev"
                email="fettahaud@gmail.com"
                linkedin="https://linkedin.com/fettah-aud"
              />
            </aside>
          </div>
        </section>

        <section className="mt-16 max-md:mt-10 max-md:max-w-full">
          <header className="text-5xl font-semibold text-black">
            Experience
          </header>
          {experiences.map((exp, index) => (
            <Experience
              key={index}
              title={exp.title}
              dateRange={exp.dateRange}
              position={exp.position}
              description={exp.description}
              projects={exp.projects}
            />
          ))}
        </section>

        <section className="mt-16 max-md:mt-10 max-md:max-w-full">
          <header className="text-5xl font-semibold text-black">
            Education
          </header>
          <article className="mt-7 text-xl text-black max-md:max-w-full">
            <span className="font-medium">
              Associate Degree in Computer Programming -{" "}
            </span>
            <span className="font-medium text-[#5D5D5D]">
              2023 (present education)
            </span>
          </article>
          <p className="mt-2 text-lg text-black max-md:max-w-full">
            Istanbul University - Istanbul/Türkiye
          </p>
        </section>
      </div>
    </div>
  );
};

export default Resume;
