import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaMoon, FaSun, FaTimes } from "react-icons/fa";
import useTheme from "./useTheme";
import resume from "../assets/resume.pdf";

const Header = () => {
  const { darkMode, setDarkMode } = useTheme();

  const [listOn, setListOn] = useState(false);

  const navItem =
    "px-4 py-2 rounded-full cursor-pointer transition-all duration-300 hover:bg-blue-500 hover:text-white";

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/80 dark:bg-slate-900/80 border-b border-gray-200 dark:border-slate-700">
      <div className="max-w-7xl mx-auto h-16 px-6 flex items-center justify-between">
        <button
          onClick={() => setListOn(!listOn)}
          className="md:hidden text-2xl dark:text-white"
        >
          {listOn ? <FaTimes /> : <FaBars />}
        </button>

        <h1 className="text-2xl font-bold tracking-wide">
          <span className="text-blue-600">&lt;</span>
          RR
          <span className="text-blue-600">/&gt;</span>
        </h1>

        {listOn && (
          <div
            className={`top-12 m-2 fixed inset-0 z-40 bg-white dark:bg-slate-900
  transform transition-transform duration-300
  ${listOn ? "translate-x-0" : "-translate-x-full"}
  md:hidden`}
          >
            <ul className="space-y-2 bg-gray-200 rounded-2xl dark:text-white dark:bg-gray-700 p-2 text-2xl font-sans font-semibold">
              <li>
                <Link
                  to="home"
                  spy
                  smooth
                  offset={-64}
                  duration={500}
                  onClick={() => setListOn(false)}
                  className="block px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-white cursor-pointer"
                  activeClass="bg-blue-600 text-white"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="about"
                  spy
                  smooth
                  offset={-64}
                  duration={500}
                  onClick={() => setListOn(false)}
                  className="block px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-white cursor-pointer"
                  activeClass="bg-blue-600 text-white"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  to="skills"
                  spy
                  smooth
                  offset={-64}
                  duration={500}
                  onClick={() => setListOn(false)}
                  className="block px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-white cursor-pointer"
                  activeClass="bg-blue-600 text-white"
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  to="projects"
                  spy
                  smooth
                  offset={-64}
                  duration={500}
                  onClick={() => setListOn(false)}
                  className="block px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-white cursor-pointer"
                  activeClass="bg-blue-600 text-white"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  spy
                  smooth
                  offset={-64}
                  duration={500}
                  onClick={() => setListOn(false)}
                  className="block px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-white cursor-pointer"
                  activeClass="bg-blue-600 text-white"
                >
                  conatct
                </Link>
              </li>
            </ul>
          </div>
        )}

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-2 text-gray-700 dark:text-gray-200 font-medium">
          <Link
            to="home"
            spy
            smooth
            offset={-64}
            duration={500}
            activeClass="bg-blue-600 text-white"
            className={navItem}
          >
            Home
          </Link>

          <Link
            to="about"
            spy
            smooth
            offset={-64}
            duration={500}
            activeClass="bg-blue-600 text-white"
            className={navItem}
          >
            About
          </Link>

          <Link
            to="skills"
            spy
            smooth
            offset={-64}
            duration={500}
            activeClass="bg-blue-600 text-white"
            className={navItem}
          >
            Skills
          </Link>

          <Link
            to="projects"
            spy
            smooth
            offset={-64}
            duration={500}
            activeClass="bg-blue-600 text-white"
            className={navItem}
          >
            Projects
          </Link>

          <Link
            to="contact"
            spy
            smooth
            offset={-64}
            duration={500}
            activeClass="bg-blue-600 text-white"
            className={navItem}
          >
            Contact
          </Link>
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="w-10 h-10 rounded-full bg-gray-200 dark:bg-slate-700 flex items-center justify-center hover:scale-110 transition dark:text-white"
          >
            {darkMode ? <FaMoon /> : <FaSun />}
          </button>

          <a
            href={resume}
            download
            className="hidden md:block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full transition"
          >
            Resume
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
