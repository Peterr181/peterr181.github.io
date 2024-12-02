"use client";
import React, { useState } from "react";
import Image from "next/image";
import myImage from "../../assets/myface2.jpg";
import "../../app/globals.css";
import Modal from "@/components/Modal";

const Page = () => {
  const [showModal, setShowModal] = useState(false);

  const [jobs] = useState([
    {
      company: "Consilium",
      position: "Junior Next.js Developer",
      skills: [
        "Next.js",
        "React",
        "Tailwind",
        "Git",
        "Zustand",
        "Jira",
        "Styled components",
        "react-admin",
        "Figma",
      ],
      timeline: "Jan 2024 — Oct 2024",
    },
    {
      company: "Comarch",
      position: "Junior Java Developer",
      skills: ["Java", "Spring", "Maven", "Git", "Postman", "Jira"],
      timeline: "Jul 2024 — Aug 2024",
      link: "https://comarch.com",
    },
    {
      company: "Prosta Edukacja",
      position: "Front-end Developer, Intern",
      skills: ["React", "Next.js", "Tailwind", "SCSS", "Figma", "SCRUM"],
      timeline: "Mar 2023 — Aug 2023",
      link: "https://prostaedukacja.com.pl/",
    },
  ]);

  return (
    <>
      <section className="flex min-h-screen flex-col items-center justify-between sm:p-24 p-9 text-white">
        <div className="mt-36 max-w-[100rem] text-center sm:mb-0 scroll-mt-[100rem] ">
          <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-10">
            <div className="lg:w-6/12 w-full">
              <h1 className="animated-text mb-10 mt-4  text-lg  lg:text-2xl  !leading-[1.5] md:text-2xl xl:text-2xl">
                <span className="font-bold">Hello, Im Peter.</span> Im an
                aspiring{" "}
                <span className="font-bold text-[#1d4ed8]">
                  front-end developer
                </span>
                .{" "}
                <span>
                  With one year of experience working as a{" "}
                  <span className="font-bold text-[#1d4ed8]">React </span>
                  developer, I have embarked on an exciting journey to craft
                  immersive user experiences. I have been working also as a Java
                  Developer for three months.{" "}
                  <span className="font-bold text-[#1d4ed8]">
                    My passion
                  </span>{" "}
                  lies in translating creative ideas into functional and
                  visually appealing websites with{" "}
                  <span className="text-[#1d4ed8]">scalable code.</span>
                </span>{" "}
                <span>
                  As I continue to evolve in my role, I am committed to honing
                  my skills and staying abreast of the latest{" "}
                  <span className="text-[#1d4ed8]">frontend technologies</span>.
                  Looking ahead, I am eager to contribute to innovative
                  projects, collaborate with talented teams, and contribute to
                  the ever-evolving landscape of{" "}
                  <span className="text-[#1d4ed8]">web development.</span> Join
                  me as I navigate this dynamic field and create a future where
                  technology and creativity converge seamlessly.
                </span>
              </h1>
              <div className="lg:flex lg:justify-center hidden ">
                <button
                  className="get-to-know-button p-3 bg-[#1d4ed8] text-white font-bold rounded flex justify-center align-center gap-3 animated-button lg:text-base text-sm"
                  onClick={() => setShowModal(true)}
                >
                  See employment history
                </button>
              </div>
            </div>
            <div className="flex justify-center shadow-lg rounded-xl relative">
              <Image
                src={myImage}
                alt="Peter face image"
                width={380}
                className="rounded-[21px]"
                quality={100}
              />
              <div className="absolute bottom-[-20px] left-0 right-0 h-6 bg-blue-500 opacity-50 blur-lg"></div>
              <div className="absolute bottom-[-20px]  left-0 h-6 w-6 bg-blue-500 opacity-50 blur-lg"></div>
              <div className="absolute bottom-[-20px]  right-0 h-6 w-6 bg-blue-500 opacity-50 blur-lg"></div>
            </div>
            <div className="lg:hidden flex justify-center">
              <button
                className="get-to-know-button p-3 bg-[#1d4ed8] text-white font-bold rounded flex justify-center align-center gap-3 animated-button lg:text-base text-sm sm:mt-10 shadow-lg"
                onClick={() => setShowModal(true)}
              >
                See employment history
              </button>
            </div>
          </div>
        </div>
      </section>

      <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
        <div className="rounded-xl flex flex-col text-center gap-4">
          {jobs.map((job, index) => (
            <div
              key={index}
              className={`mb-6 ${
                index !== jobs.length - 1 ? "border-b border-gray-800 pb-6" : ""
              }`}
            >
              <a
                href={job.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1d4ed8] text-xl lg:text-4xl mb-3 text-center font-bold "
              >
                {job.company}
              </a>
              <p className="text-md text-gray-300 text-center mt-3">
                {job.position}
              </p>
              <div className="flex flex-wrap justify-center gap-3 mt-3 mb-3">
                {job.skills.map((skill, i) => (
                  <div
                    key={i}
                    className="flex items-center rounded-full bg-[#1d4ed8] px-3 py-1 text-xs font-medium leading-5 text-white"
                  >
                    <p className="text-sm text-slate-300 font-bold">{skill}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm text-center text-gray-400">
                {job.timeline}
              </p>
            </div>
          ))}
        </div>
      </Modal>
    </>
  );
};

export default Page;
