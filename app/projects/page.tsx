import React from "react";
import { projectsData } from "@/constants/data";
import Image from "next/image";
import "../../app/globals.css";

const Page = () => {
  return (
    <section className="flex min-h-screen flex-col items-center justify-between p-6 sm:p-12 md:p-16 lg:p-24 text-white">
      <div className="mt-16 lg:mt-36 text-center sm:mb-0 m-auto max-w-[1200px]">
        <h2 className="lg:text-4xl text-md mb-10">
          My personal<span className="text-[#1d4ed8]"> projects</span> I did by{" "}
          <span className="text-[#1d4ed8]">myself</span>
        </h2>

        <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-12">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-transparent h-full animated-text shadow-lg rounded-2xl border-[0.35rem] border-[#1d4ed8] w-full"
            >
              <div className="w-full h-[300px]">
                <img
                  src={project.image}
                  alt={`Project Image for ${project.name}`}
                  className="w-full h-full object-cover rounded-t-2xl"
                />
              </div>

              <div className="p-6 flex flex-col justify-center items-center gap-3 text-xl md:text-xl">
                <div className="flex items-center gap-6 ">
                  <h2 className="text-2xl font-bold">{project.name}</h2>
                  <a href={project.github}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="#fff"
                      className="cursor-pointer"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                </div>
                <p className="text-lg">{project.description}</p>
                <div className="flex flex-wrap justify-center items-center gap-2">
                  {project.stack.map((tech, techIndex) => (
                    <div
                      className="flex items-center rounded-full bg-[#1d4ed8] px-3 py-1 text-xs font-medium leading-5 text-white"
                      key={techIndex}
                    >
                      <p className="text-sm font-bold text-slate-300 hover:text-violet cursor-pointer">
                        {tech}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-9">
          <a
            href="https://github.com/Peterr181"
            className="download-cv-button p-3 bg-[#1E1E1F] text-white font-bold rounded flex justify-center align-center gap-3"
          >
            Check more here!
          </a>
        </div>
      </div>
    </section>
  );
};

export default Page;
