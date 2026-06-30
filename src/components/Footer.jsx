import React from "react";
import { Link } from "react-scroll";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-300 dark:bg-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* Top */}
        <div className="flex flex-col md:flex-row justify-between gap-10">

          {/* Left */}
          <div>
            <h2 className="text-3xl font-bold text-white">
              Ritik <span className="text-blue-500">Raushan</span>
            </h2>

            <p className="mt-3 text-gray-400 max-w-md leading-7">
              Full Stack Web Developer passionate about building responsive,
              scalable, and user-friendly web applications using the MERN Stack
              and Spring Boot.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3">
              {["home", "about", "skills", "projects", "education", "contact"].map(
                (item) => (
                  <Link
                    key={item}
                    to={item}
                    smooth
                    duration={500}
                    offset={-64}
                    className="capitalize cursor-pointer hover:text-blue-500 transition"
                  >
                    {item}
                  </Link>
                )
              )}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Connect With Me
            </h3>

            <div className="flex gap-5 text-2xl">

              <a
                href="https://github.com/Ritik-9931"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition hover:scale-110"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/ritik-raushan-960288372"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition hover:scale-110"
              >
                <FaLinkedin />
              </a>

              <a
                href="mailto:raushanritikrk7372@gmail.com"
                className="hover:text-blue-500 transition hover:scale-110"
              >
                <FaEnvelope />
              </a>

            </div>

            <p className="mt-5 text-gray-400">
              Let's build something amazing together.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 my-8"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-sm text-gray-400 text-center md:text-left">
            © {new Date().getFullYear()} <strong>Ritik Raushan</strong>. All
            Rights Reserved.
            <br />
            Designed & Developed using React, Tailwind CSS, and JavaScript.
          </p>

          <Link
            to="home"
            smooth
            duration={500}
            className="w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center cursor-pointer transition hover:-translate-y-1"
          >
            <FaArrowUp className="text-white" />
          </Link>

        </div>

      </div>
    </footer>
  );
};

export default Footer;