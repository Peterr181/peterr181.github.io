"use client";
import React from "react";
import { motion } from "framer-motion";
import { navLinks } from "../constants/data";
import Link from "next/link";

const Header = () => {
  return (
    <nav className="relative">
      <motion.div
        className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none  bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full   dark:bg-opacity-75 mt-12 flex gap-3 items-center justify-center text-lg p-9 border-[0.35rem] border-[#1d4ed8] sm:opacity-0  "
        initial={{ y: -300, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      >
        <ul className="flex gap-6 items-center justify-center navigationMobile">
          {navLinks.map((link, index) => (
            <li key={index} className="font-bold">
              <Link
                href={link.hash}
                className="hover:text-[#1d4ed8] transition-colors duration-200"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </motion.div>
    </nav>
  );
};

export default Header;
