import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaRegEnvelope,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import { SiJavascript, SiTailwindcss } from "react-icons/si";
import { TypeAnimation } from "react-type-animation";
import Photo from "../assets/Photo.jpeg";
import resume from "../assets/resume.pdf";
import recipy from "../assets/recipy.png";
import career from "../assets/career.png";
import temple from "../assets/temple.png";
import sports from "../assets/sports.png";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import jarvish from "../assets/jarvish.mp4";

const Home = () => {
  const projects = [
    {
      id: 1,
      title: "Recipe Finder",
      image: recipy,
      description:
        "A platfor to find different types of food recipies, also save favorite food. This create using public api.",
      tech: ["React"],
      github:
        "https://github.com/Ritik-9931/React_Projects/tree/master/Recipe_Finder",
      live: "https://recipe-finder9931.vercel.app",
    },
    {
      id: 2,
      title: "CareerPath",
      image: career,
      description:
        "A platform where you can find jobs, and save favorite jobs. It is created by public Api",
      tech: ["React"],
      github:
        "https://github.com/Ritik-9931/React_Projects/tree/master/CareerPath",
      live: "https://careerpath-theta.vercel.app",
    },
    {
      id: 8,
      title: "Sports Partner",
      image: sports,
      description:
        "A platform to find sports partners, create games, join communities, and chat with players.",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      github: "https://github.com/Ritik-9931/Sports-Partner",
      live: "https://sportspartner-one.vercel.app",
    },
    {
      id: 9,
      title: "Indian Temple & Heritage",
      image: temple,
      description:
        "Explore India's monuments, culture, and historical places with an interactive interface.",
      tech: ["React", "Tailwind CSS", "MongoDB", "Express"],
      github: "https://github.com/Ritik-9931/Indian-Heritage",
      live: "https://indianheritage-nine.vercel.app/",
    },
    // Add more projects
  ];
  return (
    <div
      className="
      min-h-screen
      bg-gray-50
      text-gray-900
      dark:bg-[#050505]
      dark:text-white
      transition-colors
      duration-500
      "
    >
      <section
        id="home"
        className="relative overflow-hidden py-24 px-6 bg-gray-50 dark:bg-[#050505]"
      >
        {/* Background Glow */}
        <div className="absolute left-1/2 top-20 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-[160px] dark:bg-red-500/20"></div>

        <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            {/* Badge */}

            <div className="inline-flex items-center gap-3 rounded-full border border-gray-200 dark:border-red-900 bg-white/70 dark:bg-red-950/20 backdrop-blur-xl px-5 py-2 shadow-lg">
              <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>

              <span className="text-sm font-medium text-gray-700 dark:text-red-300">
                Available for Full Stack Developer Roles
              </span>
            </div>

            {/* Heading */}

            <h1 className="mt-8 text-6xl md:text-7xl xl:text-8xl font-black leading-none">
              Hi,
              <br />
              I'm{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-red-500 dark:to-orange-400 bg-clip-text text-transparent">
                Ritik
              </span>
            </h1>

            {/* Type Animation */}

            <div className="mt-8 inline-flex rounded-full border border-gray-200 dark:border-red-900 bg-white dark:bg-[#0B0B0B] px-6 py-3 shadow-lg">
              <TypeAnimation
                sequence={[
                  "Full Stack Developer",
                  2000,
                  "MERN Stack Developer",
                  2000,
                  "React Developer",
                  2000,
                  "Spring Boot Developer",
                  2000,
                ]}
                repeat={Infinity}
                speed={50}
                className="text-lg font-semibold text-blue-600 dark:text-red-400"
              />
            </div>

            {/* Description */}

            <p className="mt-8 max-w-xl text-lg leading-8 text-gray-600 dark:text-gray-400">
              I build responsive, scalable and high-performance web applications
              using React, Node.js, Express, MongoDB and Spring Boot with a
              focus on clean UI and modern user experiences.
            </p>

            {/* Buttons */}

            <div className="mt-10 flex flex-wrap gap-5">
              <Link to="projects" smooth duration={500} offset={-64}>
                <button className="rounded-full bg-blue-600 dark:bg-red-600 px-8 py-4 text-white font-semibold transition hover:scale-105 hover:shadow-xl">
                  View Projects →
                </button>
              </Link>

              <a
                href={resume}
                download
                className="rounded-full border border-gray-300 dark:border-red-900 px-8 py-4 font-semibold transition hover:bg-gray-100 dark:hover:bg-red-950"
              >
                Download Resume
              </a>
            </div>

            {/* Social */}

            <div className="mt-10 flex gap-5">
              <a
                href="https://github.com/Ritik-9931"
                target="_blank"
                rel="noreferrer"
                className="h-14 w-14 rounded-full border border-gray-200 dark:border-red-900 bg-white dark:bg-[#0B0B0B] flex items-center justify-center shadow-lg transition hover:-translate-y-2 hover:bg-blue-600 hover:text-white dark:hover:bg-red-600"
              >
                <FaGithub size={26} />
              </a>

              <a
                href="https://www.linkedin.com/in/ritik-raushan-960288372"
                target="_blank"
                rel="noreferrer"
                className="h-14 w-14 rounded-full border border-gray-200 dark:border-red-900 bg-white dark:bg-[#0B0B0B] flex items-center justify-center shadow-lg transition hover:-translate-y-2 hover:bg-blue-600 hover:text-white dark:hover:bg-red-600"
              >
                <FaLinkedin size={26} />
              </a>

              <a
                href="mailto:raushanritikrk7372@gmail.com"
                className="h-14 w-14 rounded-full border border-gray-200 dark:border-red-900 bg-white dark:bg-[#0B0B0B] flex items-center justify-center shadow-lg transition hover:-translate-y-2 hover:bg-blue-600 hover:text-white dark:hover:bg-red-600"
              >
                <FaEnvelope size={24} />
              </a>
            </div>
          </div>

          {/* Right */}

          <div className="relative flex justify-center">
            {/* Glow */}

            <div className="absolute h-96 w-96 rounded-full bg-blue-500/20 blur-[120px] dark:bg-red-500/20"></div>

            {/* Floating Icons */}

            <FaReact className="absolute left-0 top-10 text-6xl text-cyan-500 animate-bounce" />

            <SiJavascript className="absolute right-4 top-16 text-5xl text-yellow-400 animate-pulse" />

            <FaHtml5 className="absolute bottom-16 left-6 text-5xl text-orange-500 animate-bounce" />

            <SiTailwindcss className="absolute bottom-12 right-0 text-5xl text-sky-400 animate-pulse" />

            {/* Card */}

            <div className="relative rounded-[40px] border border-gray-200 dark:border-red-900 bg-white dark:bg-[#0B0B0B] p-6 shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent dark:from-red-500/10"></div>

              <img
                src={Photo}
                alt="Ritik"
                className="relative w-[380px] rounded-[30px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-28 px-6 bg-gray-50 dark:bg-[#050505]">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}

          <div className="text-center mb-16">
            <p className="uppercase tracking-[5px] font-semibold text-blue-600 dark:text-red-500">
              Who I Am
            </p>

            <h2 className="mt-3 text-5xl font-bold text-gray-900 dark:text-white">
              About Me
            </h2>

            <p className="mt-5 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Passionate about building beautiful, scalable and user-friendly
              web applications with modern technologies.
            </p>
          </div>

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
      dark:shadow-[0_0_45px_rgba(239,68,68,.15)]
      overflow-hidden
      transition-all
      duration-500
      hover:-translate-y-2
      hover:shadow-2xl
      "
          >
            <div className="grid lg:grid-cols-2">
              {/* Left */}

              <div className="p-12 flex flex-col justify-center">
                <span className="inline-block w-fit rounded-full bg-blue-50 border border-blue-200 px-5 py-2 text-blue-700 dark:bg-red-950/40 dark:border-red-800 dark:text-red-300">
                  Full Stack Developer
                </span>

                <h3 className="mt-6 text-4xl font-bold text-gray-900 dark:text-white leading-tight">
                  I build digital products that are
                  <span className="text-blue-600 dark:text-red-500">
                    {" "}
                    fast, modern & scalable.
                  </span>
                </h3>

                <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
                  I'm Ritik Raushan, a passionate Full Stack Web Developer who
                  enjoys creating clean UI, robust backend systems, and modern
                  web experiences using the MERN Stack and Spring Boot.
                </p>

                <p className="mt-5 text-lg leading-8 text-gray-600 dark:text-gray-400">
                  I love solving real-world problems, continuously learning new
                  technologies, and transforming ideas into responsive web
                  applications.
                </p>
              </div>

              {/* Right */}

              <div className="p-10 bg-gradient-to-br from-blue-50 to-white dark:from-red-950/20 dark:to-[#0B0B0B]">
                <div className="grid gap-6">
                  <div
                    className="
            rounded-3xl
            bg-white
            border
            border-gray-200
            p-6
            shadow-md

            dark:bg-[#101010]
            dark:border-red-900
            "
                  >
                    <p className="text-sm uppercase tracking-[3px] text-blue-600 dark:text-red-500">
                      Education
                    </p>

                    <h3 className="mt-2 text-2xl font-bold dark:text-white">
                      Bachelor of Computer Applications
                    </h3>

                    <p className="mt-2 text-gray-600 dark:text-gray-400">
                      Patliputra University
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div
                      className="
              rounded-3xl
              bg-white
              border
              border-gray-200
              p-6

              dark:bg-[#101010]
              dark:border-red-900
              "
                    >
                      <h4 className="text-4xl font-bold text-blue-600 dark:text-red-500">
                        67.6%
                      </h4>

                      <p className="mt-2 text-gray-600 dark:text-gray-400">
                        Graduation
                      </p>
                    </div>

                    <div
                      className="
              rounded-3xl
              bg-white
              border
              border-gray-200
              p-6

              dark:bg-[#101010]
              dark:border-red-900
              "
                    >
                      <h4 className="text-4xl font-bold text-blue-600 dark:text-red-500">
                        MERN
                      </h4>

                      <p className="mt-2 text-gray-600 dark:text-gray-400">
                        Tech Stack
                      </p>
                    </div>
                  </div>

                  <div
                    className="
            rounded-3xl
            bg-blue-600
            dark:bg-red-600
            text-white
            p-7
            "
                  >
                    <h3 className="text-2xl font-bold">
                      Looking for Opportunities 🚀
                    </h3>

                    <p className="mt-3 opacity-90 leading-7">
                      Open to Full Stack Developer, React Developer, Backend
                      Developer, Internship and Software Engineer roles.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="py-24 px-6 bg-gray-50 dark:bg-[#050505]">
        <div className="text-center mb-16">
          <p className="text-red-600 uppercase tracking-widest font-semibold">
            What I Know
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-2 dark:text-white">
            My Skills
          </h2>

          <div className="w-24 h-1 bg-red-600 mx-auto rounded-full mt-4"></div>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-1 lg:grid-cols-1 gap-8">
          <div className="max-w-6xl mx-auto">
            <div className="overflow-hidden rounded-[32px] border border-gray-200 bg-white shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl dark:border-red-900 dark:bg-[#0B0B0B] dark:shadow-[0_0_50px_rgba(239,68,68,0.15)]">
              {/* Content */}
              <div className="p-10">
                <p className="text-sm font-semibold uppercase tracking-[5px] text-blue-600 dark:text-red-500">
                  Frontend
                </p>

                <h2 className="mt-3 text-5xl font-bold text-gray-900 dark:text-white">
                  Frontend Development
                </h2>

                <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-400">
                  Building fast, responsive and interactive web interfaces using
                  React.js, JavaScript and Tailwind CSS.
                </p>

                {/* Skills */}

                <div className="mt-8 flex flex-wrap gap-4">
                  {["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"].map(
                    (skill) => (
                      <span
                        key={skill}
                        className="
              rounded-full
              border
              border-blue-200
              bg-blue-50
              px-5
              py-3
              font-medium
              text-blue-700
              transition-all
              duration-300

              hover:scale-105
              hover:bg-blue-600
              hover:text-white

              dark:border-red-800
              dark:bg-red-950/40
              dark:text-red-200

              dark:hover:border-red-600
              dark:hover:bg-red-600
              dark:hover:text-white
              "
                      >
                        {skill}
                      </span>
                    ),
                  )}
                </div>
              </div>

              {/* Video */}

              <div className="px-10 pb-10">
                <div className="relative">
                  {/* Glow */}

                  <div className="absolute inset-0 rounded-3xl bg-blue-500/20 blur-3xl dark:bg-red-500/20" />

                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="
          relative
          h-[450px]
          w-full
          rounded-3xl
          border
          border-gray-200
          object-cover
          shadow-xl

          dark:border-red-900
          dark:shadow-[0_0_40px_rgba(239,68,68,.25)]
          "
                  >
                    <source src={jarvish} type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
          </div>

          <br />

          <div className="p-10 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl dark:border-red-900 dark:bg-[#0B0B0B] dark:shadow-[0_0_50px_rgba(239,68,68,0.15)]">
            <h3 className="text-sm font-semibold uppercase tracking-[5px] text-blue-600 dark:text-red-500">
              Backend
            </h3>

            <div className="flex flex-wrap gap-2 mt-4 dark:text-white">
              {["Node.js", "Express.js", "Spring Boot"].map((skill) => (
                <span
                  key={skill}
                  className="
              rounded-full
              border
              border-blue-200
              bg-blue-50
              px-5
              py-3
              font-medium
              text-blue-700
              transition-all
              duration-300

              hover:scale-105
              hover:bg-blue-600
              hover:text-white

              dark:border-red-800
              dark:bg-red-950/40
              dark:text-red-200

              dark:hover:border-red-600
              dark:hover:bg-red-600
              dark:hover:text-white
              "
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="p-10 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl dark:border-red-900 dark:bg-[#0B0B0B] dark:shadow-[0_0_50px_rgba(239,68,68,0.15)]">
            <h3 className="text-sm font-semibold uppercase tracking-[5px] text-blue-600 dark:text-red-500">
              Database
            </h3>

            <div className="flex flex-wrap gap-2 mt-4 dark:text-white">
              {["MongoDb", "MySQL"].map((skill) => (
                <span
                  key={skill}
                  className="
              rounded-full
              border
              border-blue-200
              bg-blue-50
              px-5
              py-3
              font-medium
              text-blue-700
              transition-all
              duration-300

              hover:scale-105
              hover:bg-blue-600
              hover:text-white

              dark:border-red-800
              dark:bg-red-950/40
              dark:text-red-200

              dark:hover:border-red-600
              dark:hover:bg-red-600
              dark:hover:text-white
              "
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="p-10 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl dark:border-red-900 dark:bg-[#0B0B0B] dark:shadow-[0_0_50px_rgba(239,68,68,0.15)]">
            <h3 className="text-sm font-semibold uppercase tracking-[5px] text-blue-600 dark:text-red-500">
              Languages
            </h3>

            <div className="flex flex-wrap gap-2 mt-4 dark:text-white">
              {["C", "Java", "JavaScript"].map((skill) => (
                <span
                  key={skill}
                  className="
              rounded-full
              border
              border-blue-200
              bg-blue-50
              px-5
              py-3
              font-medium
              text-blue-700
              transition-all
              duration-300

              hover:scale-105
              hover:bg-blue-600
              hover:text-white

              dark:border-red-800
              dark:bg-red-950/40
              dark:text-red-200

              dark:hover:border-red-600
              dark:hover:bg-red-600
              dark:hover:text-white
              "
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="p-10 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl dark:border-red-900 dark:bg-[#0B0B0B] dark:shadow-[0_0_50px_rgba(239,68,68,0.15)]">
            <h3 className="text-sm font-semibold uppercase tracking-[5px] text-blue-600 dark:text-red-500">
              Tools
            </h3>

            <div className="flex flex-wrap gap-2 mt-4 dark:text-white">
              {["Git", "GitHub", "Postman", "VS Code"].map((skill) => (
                <span
                  key={skill}
                  className="
              rounded-full
              border
              border-blue-200
              bg-blue-50
              px-5
              py-3
              font-medium
              text-blue-700
              transition-all
              duration-300

              hover:scale-105
              hover:bg-blue-600
              hover:text-white

              dark:border-red-800
              dark:bg-red-950/40
              dark:text-red-200

              dark:hover:border-red-600
              dark:hover:bg-red-600
              dark:hover:text-white
              "
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="py-24 px-6 bg-gray-50 dark:bg-[#050505]"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-red-600 mb-4">
            My Projects
          </h2>

          <p className="text-center text-gray-600 dark:text-gray-300 mb-12">
            Here are some projects I've built using modern web technologies.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="p-10 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl dark:border-red-900 dark:bg-[#0B0B0B] dark:shadow-[0_0_50px_rgba(239,68,68,0.15)]"
              >
                {/* Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-52 object-cover"
                />
                . {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 mb-5">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="bg-blue dark:hover:border-red-600 dark:hover:bg-red-600 dark:hover:text-white text-blue-700  hover:bg-blue-600 hover:text-white dark:bg-red-950/40 dark:border-red-800 border-2 dark:text-red-300 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center bg-gray-900 text-white py-2 rounded-lg hover:bg-gray-700 transition"
                    >
                      GitHub
                    </a>

                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="education"
        className="py-24 px-6 bg-gray-50 dark:bg-[#050505]"
      >
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-16">
            <p className="text-blue-600 dark:text-red-500 uppercase tracking-[5px] font-semibold">
              Academic Journey
            </p>

            <h2 className="mt-3 text-5xl font-bold text-gray-900 dark:text-white">
              Education
            </h2>

            <p className="mt-5 text-lg text-gray-600 dark:text-gray-400">
              My educational background and academic achievements.
            </p>
          </div>

          <div className="relative">
            {/* Timeline */}
            <div className="absolute left-6 top-0 h-full w-1 rounded-full bg-blue-500 dark:bg-red-600"></div>

            <div className="space-y-10">
              {/* BCA */}
              <div className="relative pl-20">
                <div className="absolute left-2 top-8 h-8 w-8 rounded-full bg-blue-600 border-4 border-white dark:border-[#050505] dark:bg-red-600"></div>

                <div
                  className="
            rounded-3xl
            border
            border-gray-200
            bg-white
            p-8
            shadow-xl
            transition-all
            duration-300

            hover:-translate-y-2
            hover:shadow-2xl

            dark:bg-[#0B0B0B]
            dark:border-red-900
            dark:hover:shadow-[0_0_40px_rgba(239,68,68,.2)]
          "
                >
                  <span className="text-sm uppercase tracking-[4px] text-blue-600 dark:text-red-500">
                    2023 - 2026
                  </span>

                  <h3 className="mt-2 text-3xl font-bold dark:text-white">
                    Bachelor of Computer Applications
                  </h3>

                  <p className="mt-3 text-gray-600 dark:text-gray-400">
                    Patliputra University
                  </p>

                  <span className="inline-block mt-6 rounded-full bg-blue-50 border border-blue-200 px-4 py-2 text-blue-700 dark:bg-red-950/40 dark:border-red-800 dark:text-red-300">
                    Percentage : 67.6%
                  </span>
                </div>
              </div>

              {/* 12th */}

              <div className="relative pl-20">
                <div className="absolute left-2 top-8 h-8 w-8 rounded-full bg-blue-600 border-4 border-white dark:border-[#050505] dark:bg-red-600"></div>

                <div
                  className="
            rounded-3xl
            border
            border-gray-200
            bg-white
            p-8
            shadow-xl
            transition-all
            duration-300

            hover:-translate-y-2
            hover:shadow-2xl

            dark:bg-[#0B0B0B]
            dark:border-red-900
            dark:hover:shadow-[0_0_40px_rgba(239,68,68,.2)]
          "
                >
                  <span className="text-sm uppercase tracking-[4px] text-blue-600 dark:text-red-500">
                    2021 - 2023
                  </span>

                  <h3 className="mt-2 text-3xl font-bold dark:text-white">
                    Intermediate (12th)
                  </h3>

                  <p className="mt-3 text-gray-600 dark:text-gray-400">
                    Bihar School Examination Board (BSEB)
                  </p>

                  <span className="inline-block mt-6 rounded-full bg-blue-50 border border-blue-200 px-4 py-2 text-blue-700 dark:bg-red-950/40 dark:border-red-800 dark:text-red-300">
                    Percentage : 77.6%
                  </span>
                </div>
              </div>

              {/* 10th */}

              <div className="relative pl-20">
                <div className="absolute left-2 top-8 h-8 w-8 rounded-full bg-blue-600 border-4 border-white dark:border-[#050505] dark:bg-red-600"></div>

                <div
                  className="
            rounded-3xl
            border
            border-gray-200
            bg-white
            p-8
            shadow-xl
            transition-all
            duration-300

            hover:-translate-y-2
            hover:shadow-2xl

            dark:bg-[#0B0B0B]
            dark:border-red-900
            dark:hover:shadow-[0_0_40px_rgba(239,68,68,.2)]
          "
                >
                  <span className="text-sm uppercase tracking-[4px] text-blue-600 dark:text-red-500">
                    2021
                  </span>

                  <h3 className="mt-2 text-3xl font-bold dark:text-white">
                    Matriculation (10th)
                  </h3>

                  <p className="mt-3 text-gray-600 dark:text-gray-400">
                    Bihar School Examination Board (BSEB)
                  </p>

                  <span className="inline-block mt-6 rounded-full bg-blue-50 border border-blue-200 px-4 py-2 text-blue-700 dark:bg-red-950/40 dark:border-red-800 dark:text-red-300">
                    Percentage : 85.4%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-6 bg-gray-50 dark:bg-[#050505]">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-16">
            <p className="text-blue-600 dark:text-red-500 uppercase tracking-[5px] font-semibold">
              Let's Connect
            </p>

            <h2 className="mt-3 text-5xl font-bold text-gray-900 dark:text-white">
              Get In Touch
            </h2>

            <p className="mt-5 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              I'm actively looking for Full Stack Developer opportunities,
              internships, and freelance projects. Feel free to reach out.
            </p>
          </div>

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
      dark:shadow-[0_0_40px_rgba(239,68,68,.15)]
      p-10
      mb-10
      transition-all
      duration-300
      hover:-translate-y-2
      hover:shadow-2xl
      "
          >
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
              Let's Build Something Amazing 🚀
            </h3>

            <p className="mt-5 text-lg text-gray-600 dark:text-gray-400 leading-8">
              Whether you have a project idea, internship opportunity, or simply
              want to connect, I'd love to hear from you.
            </p>

            <a
              href="mailto:raushanritikrk7372@gmail.com"
              className="
        inline-block
        mt-8
        rounded-full
        bg-blue-600
        px-8
        py-4
        text-white
        transition

        hover:bg-blue-700

        dark:bg-red-600
        dark:hover:bg-red-700
        "
            >
              Say Hello 👋
            </a>
          </div>

          {/* Contact Cards */}

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Email */}

            <a
              href="mailto:raushanritikrk7372@gmail.com"
              className="
        rounded-3xl
        border
        border-gray-200
        bg-white
        dark:bg-[#0B0B0B]
        dark:border-red-900
        p-8
        shadow-xl
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-2xl
        dark:hover:shadow-[0_0_40px_rgba(239,68,68,.15)]
        "
            >
              <div className="text-5xl">
                <FaEnvelope className="text-5xl text-blue-600 dark:text-red-500" />
              </div>

              <h3 className="mt-5 text-xl font-bold dark:text-white">Email</h3>

              <p className="mt-2 text-gray-600 dark:text-gray-400 break-all">
                raushanritikrk7372 @gmail.com
              </p>
            </a>

            {/* Phone */}

            <a
              href="tel:+919931730361"
              className="
        rounded-3xl
        border
        border-gray-200
        bg-white
        dark:bg-[#0B0B0B]
        dark:border-red-900
        p-8
        shadow-xl
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-2xl
        dark:hover:shadow-[0_0_40px_rgba(239,68,68,.15)]
        "
            >
              <div className="text-5xl">
                <FaPhoneAlt className="text-5xl text-blue-600 dark:text-red-500" />
              </div>

              <h3 className="mt-5 text-xl font-bold dark:text-white">Phone</h3>

              <p className="mt-2 text-gray-600 dark:text-gray-400">
                +91 99317 30361
              </p>
            </a>

            {/* GitHub */}

            <a
              href="https://github.com/Ritik-9931"
              target="_blank"
              rel="noreferrer"
              className="
        rounded-3xl
        border
        border-gray-200
        bg-white
        dark:bg-[#0B0B0B]
        dark:border-red-900
        p-8
        shadow-xl
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-2xl
        dark:hover:shadow-[0_0_40px_rgba(239,68,68,.15)]
        "
            >
              <div className="text-5xl">
                <FaGithub className="text-5xl text-blue-600 dark:text-red-500" />
              </div>

              <h3 className="mt-5 text-xl font-bold dark:text-white">GitHub</h3>

              <p className="mt-2 text-gray-600 dark:text-gray-400">
                github.com/Ritik-9931
              </p>
            </a>

            {/* LinkedIn */}

            <a
              href="https://www.linkedin.com/in/ritik-raushan-960288372"
              target="_blank"
              rel="noreferrer"
              className="
        rounded-3xl
        border
        border-gray-200
        bg-white
        dark:bg-[#0B0B0B]
        dark:border-red-900
        p-8
        shadow-xl
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-2xl
        dark:hover:shadow-[0_0_40px_rgba(239,68,68,.15)]
        "
            >
              <div className="text-5xl">
                <FaLinkedin className="text-5xl text-blue-600 dark:text-red-500" />
              </div>

              <h3 className="mt-5 text-xl font-bold dark:text-white">
                LinkedIn
              </h3>

              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Connect with me
              </p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
