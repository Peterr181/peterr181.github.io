"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import peterPhoto from "../assets/meprog.jpg";
import Link from "next/link";

const Introduction = () => {
  return (
    <section className="mt-36 max-w-[80rem] text-center sm:mb-0 scroll-mt-[100rem]">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={peterPhoto}
              alt="Peter's programming photo"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-30 w-30 rounded-full object-cover border-[0.35rem] border-[#1d4ed8] shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-5 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-2xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Peter.</span> I'm aspiring{" "}
        <span className="font-bold text-[#1d4ed8]">front-end developer</span>.{" "}
        <span>
          I'm developer with 4 months of experience working as a{" "}
          <span className="font-bold text-[#1d4ed8]">React </span>
          developer. My main focus is to create beautiful websites with{" "}
          <span className="text-[#1d4ed8]">scalable code.</span>
        </span>
      </motion.h1>
      <div className="flex justify-center gap-12">
        <Link href="/about">
          <motion.button
            className="p-3 bg-[#1d4ed8] text-white font-bold rounded flex justify-center align-center gap-3"
            animate={{ scale: 1.1 }}
            whileHover={{ scale: 1.2 }}
          >
            Get to know me more{" "}
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
          </motion.button>
        </Link>
        <a href="/PeterCV.pdf" download="PeterCV.pdf">
          <motion.button
            className="p-3 bg-[#1E1E1F] text-white font-bold rounded flex justify-center align-center gap-3"
            animate={{ scale: 1.1 }}
            whileHover={{ scale: 1.2 }}
          >
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
          </motion.button>
        </a>
      </div>
    </section>
  );
};

export default Introduction;
