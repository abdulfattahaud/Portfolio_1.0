"use client";
import * as React from "react";

type ExperienceProps = {
  title: string;
  dateRange: string;
  positions: {
    title: string;
    description: string;
    projects: string[];
  }[];
};

const Experience: React.FC<ExperienceProps> = ({
  title,
  dateRange,
  positions,
}) => {
  return (
    <section className="mt-12 max-md:mt-8">
      <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-200 pb-2">
        {title}
      </h2>
      {positions.map((position, index) => (
        <div key={index} className="mt-6">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold text-gray-800">
              {position.title}
            </h3>
            <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
              {dateRange}
            </span>
          </div>
          <div
            className="mt-3 text-gray-600 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: position.description }}
          />
          {position.projects.length > 0 && (
            <div className="mt-4">
              <p className="text-sm font-semibold text-gray-700 mb-2">
                Projects
              </p>
              <ul className="space-y-2">
                {position.projects.map((project, index) => (
                  <li key={index}>
                    <a
                      href={project}
                      target="_blank"
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      <span className="mr-2">→</span>
                      {project}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </section>
  );
};

type ContactProps = {
  website: string;
  email: string;
  linkedin: string;
};

const Contact: React.FC<ContactProps> = ({ website, email, linkedin }) => (
  <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
    <h2 className="text-xl font-bold text-gray-900 mb-4">Contact</h2>
    <div className="space-y-3">
      <a
        href={website}
        className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
      >
        <span className="w-6">🌐</span>
        <span className="ml-2">{website}</span>
      </a>
      <a
        href={`mailto:${email}`}
        className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
      >
        <span className="w-6">📧</span>
        <span className="ml-2">{email}</span>
      </a>
      <a
        href={linkedin}
        className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
      >
        <span className="w-6">🔗</span>
        <span className="ml-2">{linkedin}</span>
      </a>
    </div>
  </div>
);

const ResumeContent: React.FC = () => {
  const experiences: ExperienceProps[] = [
    {
      title: "Fulltime Frontend Developer - 24/25",
      dateRange: "Aug 04/Present",
      positions: [
        {
          title: "Creative Frontend Developer @StepByTech",
          description: `At <b>StepByTech</b> I am responsible for delivering complete projects from Figma designs to fully functional applications integrated with APIs. My work spans across multiple areas including:<br /><br />
        • Building responsive and interactive user interfaces using Next.js, Tailwind CSS, and Shadcn UI components<br />
        • Creating immersive 3D experiences and creative projects using Three.js and React Three Fiber<br /> 
        • Developing animated landing pages and websites with GSAP animations and transitions<br />
        • Implementing complex dashboard interfaces with data visualization and real-time updates<br /><br />
        I work closely with the product engineering team to ensure high-quality deliverables while maintaining clean code architecture and optimal performance. My focus is on creating engaging user experiences through both functional and creative development.`,
          projects: [
            "https://stepbytech.com/",
            "https://zadlaw.stepbytech.com/",
            "https://dev.markmedia.net/",
          ],
        },
      ],
    },
    {
      title: "Freelancer Developer - 22/24",
      dateRange: "Mar 12/Present",
      positions: [
        {
          title: "Part time Website Animator @GraniteMarketing",
          description: `At <b>GraniteMarketing</b> I am responsible for enhancing Webflow websites with custom animations and interactive experiences. My work involves:<br /><br />
        • Implementing smooth page transitions and animations using Barba.js for seamless navigation<br />
        • Creating engaging scroll-triggered animations and effects with GSAP<br />
        • Writing custom JavaScript code to add unique interactive elements and functionality<br />
        • Optimizing animation performance and ensuring cross-browser compatibility<br /><br />
        I work closely with designers to bring their creative visions to life while maintaining clean, maintainable code that enhances the user experience through fluid animations and transitions.`,
          projects: [
            "https://editoria-development.webflow.io/",
            "https://europtima.webflow.io/",
            "https://www.stil1827.be/",
          ],
        },
        {
          title: "Part time Creative Developer @Qoves",
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
      ],
    },
    {
      title: "Frontend Developer - 21/22",
      dateRange: "Jun 22/Dec 22",
      positions: [
        {
          title: "Frontend Developer @Kumsal Ajans",
          description: `As a <b>Frontend Developer</b> I was responsible for building full product from scratch to deliver it with product engineering team, using Laravel as a backend and Figma as design platform,
      <br /><br />
      I gained valuable experience in that term, learned how Front/Back communicate and work together to provide a perfect product, I learned about custom cms system which was built there by an older Senior developer, they call it <b>Kumsal Panel</b>
      <br /><br />
      I had to mention also my experience with <b>Jira</b>, my first use case was there, I learned how big products being managed through the entire team without single word out of mouth `,
          projects: [],
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="space-y-16">
          {/* New Header Section */}
          <header className="relative">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-1/2 h-48 bg-gradient-to-l from-blue-50 to-transparent -z-10" />

            {/* Main Content */}
            <div className="space-y-8">
              {/* Name and Title */}
              <div>
                <h1 className="text-5xl font-bold text-gray-900">
                  Abdulfettah Adwani
                </h1>
                <h2 className="mt-3 text-xl text-blue-600 font-medium">
                  Creative Frontend Developer
                </h2>
              </div>

              {/* Summary and Skills */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* About Me */}
                <div className="prose prose-lg">
                  <p className="text-gray-700 leading-relaxed">
                    I&apos;m a{" "}
                    <span className="font-semibold">Frontend Developer</span>{" "}
                    based in Istanbul with{" "}
                    <span className="font-semibold">4 years of experience</span>{" "}
                    in the software industry.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    My focus area for the past few years has been Creative
                    development with 3JS, WebGL, and R3F.
                  </p>
                </div>

                {/* Key Skills */}
                <div className="space-y-4">
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                    Core Technologies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Next.js",
                      "Three.js",
                      "React",
                      "TypeScript",
                      "GSAP",
                      "Tailwind CSS",
                      "WebGL",
                      "R3F",
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </header>

          {/* Experience Section */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Experience
            </h2>
            {experiences.map((exp, index) => (
              <Experience
                key={index}
                title={exp.title}
                dateRange={exp.dateRange}
                positions={exp.positions}
              />
            ))}
          </section>

          {/* Education Section */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Education</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900">
                Associate Degree in Computer Programming
                <span className="ml-2 text-blue-600">
                  2023 (present education)
                </span>
              </h3>
              <p className="mt-2 text-gray-600">
                Istanbul University - Istanbul/Türkiye
              </p>
            </div>
          </section>

          {/* Contact Section - Moved to bottom */}
          <section className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Let&apos;s Connect
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <a
                href={`mailto:fettahaud@gmail.com`}
                className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors group"
              >
                <span className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-sm group-hover:shadow-md transition-shadow">
                  📧
                </span>
                <div className="flex flex-col">
                  <span className="text-sm text-gray-500">Email</span>
                  <span className="font-medium">fettahaud@gmail.com</span>
                </div>
              </a>
              <a
                href="https://fettah.dev"
                target="_blank"
                className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors group"
              >
                <span className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-sm group-hover:shadow-md transition-shadow">
                  🌐
                </span>
                <div className="flex flex-col">
                  <span className="text-sm text-gray-500">Website</span>
                  <span className="font-medium">fettah.dev</span>
                </div>
              </a>
              <a
                href="https://linkedin.com/fettah-aud"
                target="_blank"
                className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors group"
              >
                <span className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-sm group-hover:shadow-md transition-shadow">
                  🔗
                </span>
                <div className="flex flex-col">
                  <span className="text-sm text-gray-500">LinkedIn</span>
                  <span className="font-medium">fettah-aud</span>
                </div>
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

const Resume = () => {
  return <ResumeContent />;
};

export default Resume;
