"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import "../../app/globals.css";
import Modal from "@/components/Modal";

interface LearningHistoryItem {
  subject: string;
  date: Date;
  timeDifference?: string;
}

const Page = () => {
  const [showModal, setShowModal] = useState(false);

  const [learningHistory, setLearningHistory] = useState<LearningHistoryItem[]>(
    [
      { subject: "React", date: new Date("2022-11-10") },
      { subject: "Typescript", date: new Date("2023-03-01") },
      { subject: "Next.js", date: new Date("2023-08-15") },
      { subject: "HTML", date: new Date("2022-02-15") },
      { subject: "CSS", date: new Date("2022-06-30") },
      { subject: "Javascript", date: new Date("2022-06-30") },
      { subject: "SCSS", date: new Date("2022-07-30") },
      { subject: "Figma", date: new Date("2022-10-30") },
      { subject: "Express.js", date: new Date("2023-10-30") },
      // Add more subjects and dates as needed
    ]
  );

  useEffect(() => {
    const now = new Date().getTime();

    const updatedHistory = learningHistory.map((item) => {
      const timeDiff = now - item.date.getTime();
      const years = Math.floor(timeDiff / (365 * 24 * 60 * 60 * 1000));
      const months = Math.floor(
        (timeDiff % (365 * 24 * 60 * 60 * 1000)) / (30 * 24 * 60 * 60 * 1000)
      );
      const days = Math.floor(
        (timeDiff % (30 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000)
      );
      const formattedDifference = `${years} year${
        years !== 1 ? "s" : ""
      } ${months} month${months !== 1 ? "s" : ""}`;

      return {
        ...item,
        timeDifference: formattedDifference,
      } as LearningHistoryItem;
    });

    setLearningHistory(updatedHistory);
  }, []);

  return (
    <>
      <section className="flex min-h-screen flex-col items-center justify-between p-24 text-white">
        <div className="mt-36 max-w-[100rem] text-center sm:mb-0 scroll-mt-[100rem] ">
          <div>
            <h2 className=" lg:text-4xl text-xl mb-10">
              Technologies <span className="text-[#1d4ed8]">I know</span> very
              well and <span className="text-[#1d4ed8]">still learning</span>
            </h2>
            <div>
              <div className="flex justify-center flex-col items-center">
                <div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 gap-10 justify-center items-center grid-cols-2">
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                    width={100}
                    alt="programming language icon"
                    height={100}
                    className="fade-in-text group transform transition-transform hover:scale-105 "
                  />
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                    width={100}
                    alt="programming language icon"
                    height={100}
                    className="fade-in-text group transform transition-transform hover:scale-105"
                  />
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                    width={100}
                    alt="programming language icon"
                    height={100}
                    className="fade-in-text group transform transition-transform hover:scale-105"
                  />
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                    width={100}
                    alt="programming language icon"
                    height={100}
                    className="fade-in-text group transform transition-transform hover:scale-105"
                  />
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                    width={100}
                    alt="programming language icon"
                    height={100}
                    className="fade-in-text group transform transition-transform hover:scale-105"
                  />
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
                    width={100}
                    alt="programming language icon"
                    height={100}
                    className="fade-in-text group transform transition-transform hover:scale-105"
                  />
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
                    width={100}
                    alt="programming language icon"
                    height={100}
                    className="fade-in-text group transform transition-transform hover:scale-105"
                  />
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
                    width={100}
                    alt="programming language icon"
                    height={100}
                    className="fade-in-text group transform transition-transform hover:scale-105"
                  />
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
                    width={100}
                    alt="programming language icon"
                    height={100}
                    className="fade-in-text group transform transition-transform hover:scale-105"
                  />
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/electron/electron-original.svg"
                    width={100}
                    alt="programming language icon"
                    height={100}
                    className="fade-in-text group transform transition-transform hover:scale-105"
                  />
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                    width={100}
                    alt="programming language icon"
                    height={100}
                    className="fade-in-text group transform transition-transform hover:scale-105"
                  />
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
                    width={100}
                    alt="programming language icon"
                    height={100}
                    className="fade-in-text group transform transition-transform hover:scale-105"
                  />
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg"
                    width={100}
                    alt="programming language icon"
                    height={100}
                    className="fade-in-text group transform transition-transform hover:scale-105"
                  />
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
                    width={100}
                    alt="programming language icon"
                    height={100}
                    className="fade-in-text group transform transition-transform hover:scale-105"
                  />
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
                    width={100}
                    alt="programming language icon"
                    height={100}
                    className="fade-in-text group transform transition-transform hover:scale-105"
                  />
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
                    width={100}
                    alt="programming language icon"
                    height={100}
                    className="fade-in-text group transform transition-transform hover:scale-105"
                  />
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
                    width={100}
                    alt="programming language icon"
                    height={100}
                    className="fade-in-text group transform transition-transform hover:scale-105"
                  />
                  <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                    width={100}
                    alt="programming language icon"
                    height={100}
                    className="fade-in-text group transform transition-transform hover:scale-105"
                  />
                </div>
                <div className="mt-9">
                  <button
                    className="get-to-know-button p-3 bg-[#1d4ed8] text-white font-bold rounded flex justify-center align-center gap-3 lg:text-base text-xs "
                    onClick={() => setShowModal(true)}
                  >
                    Check my main technologies
                  </button>
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </section>
      <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
        <h2 className="font-bold text-xl text-center">Coding since</h2>{" "}
        <div className="grid grid-cols-2 gap-3 mt-4">
          {" "}
          {learningHistory.map((item) => (
            <div key={item.subject} className="bg-[#121212] p-3 rounded-xl">
              {" "}
              <p className="text-[#1d4ed8] text-sm text-center font-bold">
                {" "}
                {item.subject}{" "}
              </p>{" "}
              <p className="text-xs text-center">{item.timeDifference}</p>{" "}
            </div>
          ))}{" "}
        </div>
      </Modal>
    </>
  );
};

export default Page;
