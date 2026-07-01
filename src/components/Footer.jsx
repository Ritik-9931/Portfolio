import React from "react";
import { Link } from "react-scroll";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
  FaHeart,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-[#050505] py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main Card */}

        <div
          className="
          rounded-[32px]
          border
          border-gray-200
          bg-white
          dark:bg-[#0B0B0B]
          dark:border-red-900
          shadow-xl
          dark:shadow-[0_0_50px_rgba(239,68,68,.15)]
          overflow-hidden
          "
        >
          {/* Top */}

          <div className="grid lg:grid-cols-3 gap-12 p-10">
            {/* Left */}

            <div>
              <p className="uppercase tracking-[5px] text-blue-600 dark:text-red-500 font-semibold">
                Portfolio
              </p>

              <h2 className="mt-3 text-4xl font-bold text-gray-900 dark:text-white">
                Ritik{" "}
                <span className="text-blue-600 dark:text-red-500">Raushan</span>
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
                Passionate Full Stack Developer focused on building fast,
                responsive and scalable web applications using the MERN Stack
                and Spring Boot.
              </p>

              {/* Social */}

              <div className="flex gap-4 mt-8">
                <a
                  href="https://github.com/Ritik-9931"
                  target="_blank"
                  rel="noreferrer"
                  className="
                  h-14
                  w-14
                  rounded-full
                  border
                  border-gray-200
                  dark:border-red-800
                  flex
                  items-center
                  justify-center
                  text-2xl
                  bg-gray-100
                  dark:bg-red-950/40
                  hover:scale-110
                  hover:bg-blue-600
                  hover:text-white
                  dark:hover:bg-red-600
                  transition-all
                  duration-300
                  "
                >
                  <FaGithub />
                </a>

                <a
                  href="https://www.linkedin.com/in/ritik-raushan-960288372"
                  target="_blank"
                  rel="noreferrer"
                  className="
                  h-14
                  w-14
                  rounded-full
                  border
                  border-gray-200
                  dark:border-red-800
                  flex
                  items-center
                  justify-center
                  text-2xl
                  bg-gray-100
                  dark:bg-red-950/40
                  hover:scale-110
                  hover:bg-blue-600
                  hover:text-white
                  dark:hover:bg-red-600
                  transition-all
                  duration-300
                  "
                >
                  <FaLinkedin />
                </a>

                <a
                  href="mailto:raushanritikrk7372@gmail.com"
                  className="
                  h-14
                  w-14
                  rounded-full
                  border
                  border-gray-200
                  dark:border-red-800
                  flex
                  items-center
                  justify-center
                  text-2xl
                  bg-gray-100
                  dark:bg-red-950/40
                  hover:scale-110
                  hover:bg-blue-600
                  hover:text-white
                  dark:hover:bg-red-600
                  transition-all
                  duration-300
                  "
                >
                  <FaEnvelope />
                </a>
              </div>
            </div>

            {/* Navigation */}

            <div>
              <p className="uppercase tracking-[5px] text-blue-600 dark:text-red-500 font-semibold">
                Navigation
              </p>

              <div className="mt-6 flex flex-col gap-4">
                {[
                  "home",
                  "about",
                  "skills",
                  "projects",
                  "education",
                  "contact",
                ].map((item) => (
                  <Link
                    key={item}
                    to={item}
                    smooth
                    duration={500}
                    offset={-70}
                    className="
                    capitalize
                    cursor-pointer
                    text-lg
                    text-gray-700
                    dark:text-gray-300
                    hover:text-blue-600
                    dark:hover:text-red-500
                    transition
                    "
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>

            {/* Right */}

            <div className="flex flex-col justify-between">
              <div>
                <p className="uppercase tracking-[5px] text-blue-600 dark:text-red-500 font-semibold">
                  Available For
                </p>

                <h3 className="mt-5 text-3xl font-bold dark:text-white">
                  Full Stack Developer
                </h3>

                <p className="mt-5 leading-8 text-gray-600 dark:text-gray-400">
                  Open to internships, freelance work and full-time
                  opportunities. Let's build something great together.
                </p>

                <a
                  href="mailto:raushanritikrk7372@gmail.com"
                  className="
                  inline-block
                  mt-8
                  rounded-full
                  bg-blue-600
                  dark:bg-red-600
                  px-8
                  py-4
                  text-white
                  hover:bg-blue-700
                  dark:hover:bg-red-700
                  transition
                  "
                >
                  Hire Me
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}

          <div className="border-t border-gray-200 dark:border-red-900"></div>

          {/* Bottom */}

          <div className="px-10 py-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-center md:text-left text-gray-600 dark:text-gray-400 flex items-center gap-2">
              © {new Date().getFullYear()} Ritik Raushan • Made with
              <FaHeart className="text-red-500" />
              using React & Tailwind CSS
            </p>

            <Link
              to="home"
              smooth
              duration={500}
              className="
              h-14
              w-14
              rounded-full
              bg-blue-600
              dark:bg-red-600
              text-white
              flex
              items-center
              justify-center
              cursor-pointer
              hover:-translate-y-2
              hover:scale-110
              transition-all
              duration-300
              "
            >
              <FaArrowUp />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;