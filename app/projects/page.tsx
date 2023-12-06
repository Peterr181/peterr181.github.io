import React from "react";
import { projectsData } from "@/constants/data";
import Image from "next/image";

const Page = () => {
  return (
    <section className="flex min-h-screen flex-col items-center justify-between p-24 text-white">
      <div className="mt-36 max-w-[100rem] text-center sm:mb-0 scroll-mt-[100rem] ">
        <div className="grid grid-cols-2 gap-5 ">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-[#1E1E1F] w-full h-full "
            >
              <img
                src={project.image}
                alt={`Project Image for ${project.name}`}
                className="w-full object-cover h-96 "
              />
              <div className="p-6 flex flex-col justify-center items-center gap-3">
                <p>{project.description}</p>
                <div className="flex space-x-4">
                  {project.stack.map((tech, techIndex) => (
                    <p
                      key={techIndex}
                      className="border-[0.20rem] border-[#1d4ed8] font-bold p-3 rounded-md"
                    >
                      {tech}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Page;
