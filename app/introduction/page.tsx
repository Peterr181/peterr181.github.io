import React from "react";
import Image from "next/image";
import peterPhoto from "../../assets/meprog.jpg";
import Link from "next/link";
import "../../app/globals.css";

const Page = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className="mt-36 max-w-[80rem] text-center sm:mb-0 scroll-mt-[100rem]">
        <div className="flex items-center justify-center">
          <div className="relative">
            <div className="image-container">
              <Image
                src={peterPhoto}
                alt="Peter's programming photo"
                width="192"
                height="192"
                quality="95"
                priority={true}
                className="h-30 w-30 rounded-full object-cover border-[0.35rem] border-[#1d4ed8] shadow-xl"
              />
            </div>

            <span className="greeting-emoji">👋</span>
          </div>
        </div>

        <h1 className="mb-10 mt-4 px-4 lg:text-2xl text-xs font-medium !leading-[1.5] sm:text-2xl">
          <span className="font-bold">Hello, I&apos;m Peter.</span> I&apos;m
          aspiring{" "}
          <span className="font-bold text-[#1d4ed8]">front-end developer</span>.{" "}
          <span>
            I&apos;m developer with 4 months of experience working as a{" "}
            <span className="font-bold text-[#1d4ed8]">React </span>
            developer. My main focus is to create beautiful websites with{" "}
            <span className="text-[#1d4ed8] underline">scalable code.</span>
          </span>
        </h1>
        <div className="flex justify-center gap-12 mainButtons">
          <Link href="/about">
            <button className="get-to-know-button p-3 bg-[#1d4ed8] text-white font-bold rounded flex justify-center align-center gap-3  lg:text-base text-xs">
              Know me more{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-arrow-narrow-right"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 12l14 0" />
                <path d="M15 16l4 -4" />
                <path d="M15 8l4 4" />
              </svg>
            </button>
          </Link>
          <a href="./PeterCV.pdf" download="PeterCV.pdf">
            <button className="download-cv-button p-3 bg-[#1E1E1F] text-white font-bold rounded flex justify-center align-center gap-3 lg:text-base text-xs">
              Download CV
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-download"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
                <path d="M7 11l5 5l5 -5" />
                <path d="M12 4l0 12" />
              </svg>
            </button>
          </a>
        </div>
      </section>
    </main>
  );
};

export default Page;
