import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaMoon, FaSun, FaTimes, FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

import useTheme from "./useTheme";
import resume from "../assets/resume.pdf";

const Header = () => {
  const { darkMode, setDarkMode } = useTheme();

  const [listOn, setListOn] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItem = `
    px-5
    py-2
    rounded-full
    cursor-pointer
    font-medium
    transition-all
    duration-300

    hover:bg-red-600
    hover:text-white
    hover:shadow-lg
    hover:shadow-red-500/30
  `;

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl"
      >
        <div
          className={`
            rounded-full
            border
            backdrop-blur-xl

            transition-all
            duration-500

            ${
              scrolled
                ? `
                bg-white/80
                border-gray-200
                shadow-xl

                dark:bg-[#080808]/90
                dark:border-red-900
                dark:shadow-[0_0_30px_rgba(239,68,68,.15)]
                `
                : `
                bg-white/60
                border-white/40

                dark:bg-black/60
                dark:border-red-900/50
                `
            }
          `}
        >
          <div className="h-18 px-8 flex items-center justify-between">
            {/* LEFT */}

            <div className="flex items-center gap-3 cursor-pointer">
              <div className="h-3 w-3 rounded-full bg-red-500 animate-pulse"></div>

              <h1 className="text-2xl font-bold tracking-wide dark:text-white">
                RR
                <span className="text-red-500">.</span>
              </h1>
            </div>

            {/* Desktop Navigation */}

            <nav className="hidden lg:flex items-center gap-2 text-gray-700 dark:text-gray-200">
              <Link
                to="home"
                spy
                smooth
                offset={-80}
                duration={500}
                activeClass="bg-red-600 text-white shadow-lg shadow-red-500/30"
                className={navItem}
              >
                Home
              </Link>

              <Link
                to="about"
                spy
                smooth
                offset={-80}
                duration={500}
                activeClass="bg-red-600 text-white shadow-lg shadow-red-500/30"
                className={navItem}
              >
                About
              </Link>

              <Link
                to="skills"
                spy
                smooth
                offset={-80}
                duration={500}
                activeClass="bg-red-600 text-white shadow-lg shadow-red-500/30"
                className={navItem}
              >
                Skills
              </Link>

              <Link
                to="projects"
                spy
                smooth
                offset={-80}
                duration={500}
                activeClass="bg-red-600 text-white shadow-lg shadow-red-500/30"
                className={navItem}
              >
                Projects
              </Link>

              <Link
                to="education"
                spy
                smooth
                offset={-80}
                duration={500}
                activeClass="bg-red-600 text-white shadow-lg shadow-red-500/30"
                className={navItem}
              >
                Education
              </Link>

              <Link
                to="contact"
                spy
                smooth
                offset={-80}
                duration={500}
                activeClass="bg-red-600 text-white shadow-lg shadow-red-500/30"
                className={navItem}
              >
                Contact
              </Link>
            </nav>

            {/* RIGHT */}

            <div className="flex items-center gap-3">
              {/* Theme */}

              <button
                onClick={() => setDarkMode(!darkMode)}
                className="
                  w-11
                  h-11
                  rounded-full

                  flex
                  items-center
                  justify-center

                  border
                  border-gray-200

                  bg-white
                  text-gray-700

                  transition-all
                  duration-500

                  hover:rotate-180
                  hover:scale-110

                  dark:bg-[#111]
                  dark:border-red-900
                  dark:text-white
                "
              >
                {darkMode ? <FaMoon /> : <FaSun />}
              </button>

              {/* Resume */}

              <a
                href={resume}
                download
                className="
                  hidden
                  md:flex
                  items-center
                  gap-2

                  rounded-full

                  bg-red-600
                  px-6
                  py-3

                  font-medium
                  text-white

                  transition-all
                  duration-300

                  hover:scale-105
                  hover:bg-red-700
                  hover:shadow-lg
                  hover:shadow-red-500/40
                "
              >
                Resume
                <FaArrowRight className="text-sm" />
              </a>

              {/* Mobile Button */}

              <button
                onClick={() => setListOn(!listOn)}
                className="
                  lg:hidden
                  w-11
                  h-11

                  rounded-full

                  border
                  border-gray-200

                  bg-white

                  flex
                  items-center
                  justify-center

                  dark:bg-[#111]
                  dark:border-red-900
                  dark:text-white
                "
              >
                {listOn ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}

      <AnimatePresence>
        {listOn && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="
              lg:hidden
              absolute
              top-20
              left-0
              right-0
              mx-2
            "
          >
            <div
              className="
                rounded-3xl
                border
                border-gray-200
                bg-white/90
                backdrop-blur-xl
                shadow-2xl

                dark:bg-[#0B0B0B]/95
                dark:border-red-900
                dark:shadow-[0_0_40px_rgba(239,68,68,.15)]

                p-3
              "
            >
              <Link
                to="home"
                spy
                smooth
                offset={-80}
                duration={500}
                onClick={() => setListOn(false)}
                activeClass="bg-red-600 text-white"
                className="block rounded-2xl px-5 py-4 font-medium transition hover:bg-red-600 hover:text-white cursor-pointer"
              >
                Home
              </Link>

              <Link
                to="about"
                spy
                smooth
                offset={-80}
                duration={500}
                onClick={() => setListOn(false)}
                activeClass="bg-red-600 text-white"
                className="block rounded-2xl px-5 py-4 font-medium transition hover:bg-red-600 hover:text-white cursor-pointer"
              >
                About
              </Link>

              <Link
                to="skills"
                spy
                smooth
                offset={-80}
                duration={500}
                onClick={() => setListOn(false)}
                activeClass="bg-red-600 text-white"
                className="block rounded-2xl px-5 py-4 font-medium transition hover:bg-red-600 hover:text-white cursor-pointer"
              >
                Skills
              </Link>

              <Link
                to="projects"
                spy
                smooth
                offset={-80}
                duration={500}
                onClick={() => setListOn(false)}
                activeClass="bg-red-600 text-white"
                className="block rounded-2xl px-5 py-4 font-medium transition hover:bg-red-600 hover:text-white cursor-pointer"
              >
                Projects
              </Link>

              <Link
                to="education"
                spy
                smooth
                offset={-80}
                duration={500}
                onClick={() => setListOn(false)}
                activeClass="bg-red-600 text-white"
                className="block rounded-2xl px-5 py-4 font-medium transition hover:bg-red-600 hover:text-white cursor-pointer"
              >
                Education
              </Link>

              <Link
                to="contact"
                spy
                smooth
                offset={-80}
                duration={500}
                onClick={() => setListOn(false)}
                activeClass="bg-red-600 text-white"
                className="block rounded-2xl px-5 py-4 font-medium transition hover:bg-red-600 hover:text-white cursor-pointer"
              >
                Contact
              </Link>

              <a
                href={resume}
                download
                className="
                  flex
                  items-center
                  justify-center
                  gap-2

                  mt-4

                  rounded-2xl

                  bg-red-600
                  py-4

                  text-white
                  font-semibold

                  transition
                  hover:bg-red-700
                "
              >
                Download Resume
                <FaArrowRight />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
