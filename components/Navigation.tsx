"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { navLinks } from "../constants/data";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  return (
    <nav className="relative ">
      <motion.div
        className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none  bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full   dark:bg-opacity-75 mt-12 flex gap-3 items-center justify-center text-lg p-9 border-[0.35rem] border-[#1d4ed8] hidden xmd:flex  "
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
      <motion.div
        className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-opacity-75 mt-12 gap-3 items-center justify-center text-lg p-9 border-[0.35rem] border-[#1d4ed8] hidden xmd:hidden "
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

      {/* Hamburger menu */}
      <motion.div
        className={`fixed w-full h-full bg-black z-40 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: isMenuOpen ? 1 : 0 }}
      >
        <motion.div
          className="flex justify-center items-center h-full "
          initial={{ scale: 0 }}
          animate={{ scale: isMenuOpen ? 1 : 0 }}
        >
          <ul className="flex flex-col items-center justify-center gap-6">
            {navLinks.map((link, index) => (
              <li key={index} className="font-bold">
                <Link
                  href={link.hash}
                  className="text-white hover:text-[#1d4ed8] transition-colors duration-200"
                  onClick={closeMenu}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>

      {/* Close menu button */}
      {isMenuOpen && (
        <button
          className="fixed top-4 right-4 text-white z-50"
          onClick={closeMenu}
        >
          X
        </button>
      )}

      {/* Hamburger icon */}
      <motion.div
        className="fixed top-0 left-1/2 bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:rounded-full dark:bg-opacity-75 mt-12 gap-3 items-center justify-center text-lg p-9 border-[0.35rem] border-[#1d4ed8] xmd:hidden flex rounded-full cursor-pointer"
        initial={{ y: -300, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
        onClick={toggleMenu}
      >
        <ul className="flex gap-6 items-center justify-center">
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-menu-2 "
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
              <path d="M4 6l16 0" />
              <path d="M4 12l16 0" />
              <path d="M4 18l16 0" />
            </svg>
          </li>
        </ul>
      </motion.div>
    </nav>
  );
};

export default Header;
