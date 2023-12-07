import React from "react";
import { projectsData } from "@/constants/data";
import Image from "next/image";

const Page = () => {
  return (
    <section className="flex min-h-screen flex-col items-center justify-between p-24 text-white">
      <div className="mt-36 max-w-[100rem] text-center sm:mb-0 scroll-mt-[100rem] ">
        <div className="grid xl:grid-cols-2 md:grid-cols-1 gap-5 ">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-[#1E1E1F] w-full h-full "
            >
              <img
                src={project.image}
                alt={`Project Image for ${project.name}`}
                className="lg:w-full object-cover lg:h-96 max-w-full "
              />
              <div className="p-6 flex flex-col justify-center items-center gap-3 text-xs">
                <p>{project.description}</p>
                <div className="lg:flex grid grid-cols-2  items-center gap-6">
                  {project.stack.map((tech, techIndex) => (
                    <p
                      key={techIndex}
                      className="border-[0.20rem] border-[#1d4ed8] font-bold p-2 rounded-md text-[10px]"
                    >
                      {tech}
                    </p>
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
