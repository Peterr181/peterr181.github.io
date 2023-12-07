import React from "react";
import { projectsData } from "@/constants/data";
import Image from "next/image";
import "../../app/globals.css";

const Page = () => {
  return (
    <section className="flex min-h-screen flex-col items-center justify-between p-24 text-white">
      <div className="mt-36 max-w-[100rem] text-center sm:mb-0 scroll-mt-[100rem] ">
        <div className="grid xl:grid-cols-2 md:grid-cols-1 gap-5 ">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-[#1E1E1F] w-full h-full animated-text shadow-lg rounded-xl "
            >
              <img
                src={project.image}
                alt={`Project Image for ${project.name}`}
                className="lg:w-full object-cover lg:h-96 max-w-full "
              />
              <div className="p-6 flex flex-col justify-center items-center gap-3 text-xl md:text-xl">
                <p>{project.description}</p>
                <div className="lg:flex grid grid-cols-2  items-center gap-6">
                  {project.stack.map((tech, techIndex) => (
                    <div
                      className="flex items-center rounded-full bg-[#1d4ed8] px-3 py-1 text-xs font-medium leading-5 text-white "
                      key={techIndex}
                    >
                      <p className="relative  inline-flex items-center text-sm font-bold text-slate-300 hover:text-violet cursor-pointer focus-visible:text-[#1d4ed8] ">
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
