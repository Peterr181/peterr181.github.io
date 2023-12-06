import React from "react";
import Image from "next/image";
import myImage from "../../assets/myface.jpg";
import "../../app/globals.css";
const page = () => {
  return (
    <section className="flex min-h-screen flex-col items-center justify-between p-24 text-white">
      <div className="mt-36 max-w-[100rem] text-center sm:mb-0 scroll-mt-[100rem] ">
        <div className="flex justify-center gap-10 ">
          <div className="w-6/12">
            <h1 className="animated-text mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-2xl">
              <span className="font-bold">Hello, I'm Peter.</span> I'm an
              aspiring{" "}
              <span className="font-bold text-[#1d4ed8]">
                front-end developer
              </span>
              .{" "}
              <span>
                With 4 months of experience working as a{" "}
                <span className="font-bold text-[#1d4ed8]">React </span>
                developer, I have embarked on an exciting journey to craft
                immersive user experiences.{" "}
                <span className="font-bold text-[#1d4ed8]">
                  My passion
                </span>{" "}
                lies in translating creative ideas into functional and visually
                appealing websites with{" "}
                <span className="text-[#1d4ed8]">scalable code.</span>
              </span>{" "}
              <span>
                As I continue to evolve in my role, I am committed to honing my
                skills and staying abreast of the latest{" "}
                <span className="text-[#1d4ed8]">frontend technologies</span>.
                Looking ahead, I am eager to contribute to innovative projects,
                collaborate with talented teams, and contribute to the
                ever-evolving landscape of{" "}
                <span className="text-[#1d4ed8]">web development.</span> Join me
                as I navigate this dynamic field and create a future where
                technology and creativity converge seamlessly.
              </span>
            </h1>
          </div>
          <div>
            <Image
              src={myImage}
              alt="Peter face image"
              width={300}
              className="rounded"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
