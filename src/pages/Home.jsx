import React from "react";
import { FaGithub, FaLinkedin, FaRegEnvelope } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import Photo from "../assets/Photo.jpeg";
import resume from "../assets/resume.pdf";
import recipy from "../assets/recipy.png";
import career from "../assets/career.png";
import temple from "../assets/temple.png";
import sports from "../assets/sports.png";
import { Link } from "react-scroll";

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
    <div>
      <section
        id="home"
        className="
          min-h-screen 
          flex 
          items-center
          bg-gradient-to-br
          from-slate-50
          via-blue-50
          to-white
          dark:from-slate-950
          dark:via-slate-900
          dark:to-slate-950"
      >
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <p className="text-blue-600 text-lg font-semibold mb-3">
              👋 Hello, I'm
            </p>

            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
              Ritik <br />
              <span className="text-blue-600">Raushan</span>
            </h1>

            <div className="mt-4 text-2xl md:text-3xl font-semibold text-blue-500">
              <TypeAnimation
                sequence={[
                  "Full Stack Developer",
                  2000,
                  "MERN Stack Developer",
                  2000,
                  "React Developer",
                  2000,
                  "Backend Developer",
                  2000,
                ]}
                speed={50}
                repeat={Infinity}
              />
            </div>

            <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 leading-8 max-w-xl">
              I build responsive, scalable and user-friendly web applications
              using the MERN Stack and Spring Boot. Passionate about creating
              clean UI and robust backend systems.
            </p>

            <div className="flex gap-4 mt-8">
              <Link to="projects" smooth={true} duration={500} offset={-64}>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition hover:scale-105">
                  View Projects
                </button>
              </Link>

              <a
                href={resume}
                download
                className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-full transition hover:scale-105"
              >
                Download Resume
              </a>
            </div>

            <div className="flex gap-5 mt-8 text-3xl text-gray-700 dark:text-white">
              <a href="https://github.com/Ritik-9931" target="_blank">
                <FaGithub className="hover:text-blue-600 transition" />
              </a>

              <a
                href="https://www.linkedin.com/in/ritik-raushan-960288372"
                target="_blank"
              >
                <FaLinkedin className="hover:text-blue-600 transition" />
              </a>

              <a href="mailto:raushanritikrk7372@gmail.com">
                <FaRegEnvelope className="hover:text-blue-600 transition" />
              </a>
            </div>
          </div>

          {/* Right */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-blue-500 blur-3xl opacity-30"></div>

              <img
                src={Photo}
                alt="Ritik Raushan"
                className="relative w-80 h-80 md:w-96 md:h-96 rounded-full object-cover border-8 border-blue-600 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="min-h-screen flex items-center bg-white dark:bg-slate-800 px-6 py-20"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-blue-600 mb-12">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <p className="text-lg leading-8 text-gray-700 dark:text-gray-300">
                I'm a passionate Full Stack Web Developer with experience
                building modern web applications using the MERN Stack and Spring
                Boot. I enjoy solving real-world problems through clean,
                scalable, and user-friendly solutions.
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-gray-100 dark:bg-slate-700 p-5 rounded-xl shadow dark:text-white hover:-translate-y-2 transition-all">
                🎓 <strong>Degree</strong>
                <br />
                Bachelor of Computer Applications
              </div>

              <div className="bg-gray-100 dark:bg-slate-700 p-5 rounded-xl shadow dark:text-white hover:-translate-y-2 transition-all">
                📊 <strong>Percentage</strong>
                <br />
                67.6%
              </div>

              <div className="bg-gray-100 dark:bg-slate-700 p-5 rounded-xl shadow dark:text-white hover:-translate-y-2 transition-all">
                💼 <strong>Looking For</strong>
                <br />
                Full Stack Developer Roles
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="skills"
        className="min-h-screen bg-gray-100 dark:bg-slate-900 py-20 px-6"
      >
        <div className="text-center mb-16">
          <p className="text-blue-600 uppercase tracking-widest font-semibold">
            What I Know
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-2 dark:text-white">
            My Skills
          </h2>

          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mt-4"></div>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:-translate-y-2 transition-all">
            <h3 className="text-xl font-bold mb-4 text-blue-600">Frontend</h3>

            <div className="flex flex-wrap gap-2 mt-4 dark:text-white">
              {["HTML", "CSS", "React", "JavaScript", "TailwindCSS"].map(
                (skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full bg-blue-100 dark:bg-slate-700"
                  >
                    {skill}
                  </span>
                ),
              )}
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:-translate-y-2 transition-all">
            <h3 className="text-xl font-bold mb-4 text-blue-600">Backend</h3>

            <div className="flex flex-wrap gap-2 mt-4 dark:text-white">
              {["Node.js", "Express.js", "Spring Boot"].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 rounded-full bg-blue-100 dark:bg-slate-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:-translate-y-2 transition-all">
            <h3 className="text-xl font-bold mb-4 text-blue-600">Database</h3>

            <div className="flex flex-wrap gap-2 mt-4 dark:text-white">
              {["MongoDb", "MySQL"].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 rounded-full bg-blue-100 dark:bg-slate-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:-translate-y-2 transition-all">
            <h3 className="text-xl font-bold mb-4 text-blue-600">Languages</h3>

            <div className="flex flex-wrap gap-2 mt-4 dark:text-white">
              {["C", "Java", "JavaScript"].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 rounded-full bg-blue-100 dark:bg-slate-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:-translate-y-2 transition-all">
            <h3 className="text-xl font-bold mb-4 text-blue-600">Tools</h3>

            <div className="flex flex-wrap gap-2 mt-4 dark:text-white">
              {["Git", "GitHub", "Postman", "VS Code"].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 rounded-full bg-blue-100 dark:bg-slate-700"
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
        className="min-h-screen bg-gray-100 dark:bg-slate-900 py-20 px-6"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-blue-600 mb-4">
            My Projects
          </h2>

          <p className="text-center text-gray-600 dark:text-gray-300 mb-12">
            Here are some projects I've built using modern web technologies.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
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
                        className="bg-blue-100 dark:bg-slate-700 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-sm"
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
                      className="flex-1 text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
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

      <section id="education" className="bg-white dark:bg-slate-800 py-20 px-6">
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-12">
          Education
        </h2>

        <div className="max-w-5xl mx-auto space-y-6">
          <div className="bg-gray-100 dark:bg-slate-700 p-6 rounded-xl shadow hover:-translate-y-2 transition-all dark:text-white">
            <h3 className="font-bold text-xl">
              Bachelor of Computer Applications
            </h3>

            <p>Patliputra University</p>

            <p>2023 - 2026</p>

            <p>Percentage : 67.6%</p>
          </div>

          <div className="hover:-translate-y-2 transition-all bg-gray-100 dark:bg-slate-700 dark:text-white p-6 rounded-xl shadow">
            <h3 className="font-bold text-xl">Intermediate (12th)</h3>

            <p>BSEB Board</p>

            <p>2021 - 2023</p>

            <p>Percentage : 77.6%</p>
          </div>

          <div className="hover:-translate-y-2 transition-all bg-gray-100 dark:bg-slate-700 p-6 rounded-xl dark:text-white shadow">
            <h3 className="font-bold text-xl">Matriculation (10th)</h3>

            <p>BSEB Board</p>

            <p>2021</p>

            <p>Percentage : 85.4%</p>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="min-h-screen bg-gray-100 dark:bg-slate-900 flex items-center px-6 py-20"
      >
        <div className="max-w-5xl mx-auto w-full">
          <h2 className="text-4xl font-bold text-center text-blue-600 mb-4">
            Get In Touch
          </h2>

          <p className="text-center text-gray-600 dark:text-gray-300 mb-12">
            I'm currently looking for Full Stack Web Developer opportunities.
            Feel free to reach out if you'd like to discuss a project,
            internship, or job opportunity.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Email */}
            <a
              href="mailto:raushanritikrk7372@gmail.com"
              className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6 hover:-translate-y-2 transition-all"
            >
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                📧 Email
              </h3>

              <p className="text-gray-700 dark:text-gray-300 break-all">
                raushanritikrk7372@gmail.com
              </p>
            </a>

            {/* Phone */}
            <a
              href="tel:+917XXXXXXXXX"
              className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6 hover:-translate-y-2 transition-all"
            >
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                📱 Phone
              </h3>

              <p className="text-gray-700 dark:text-gray-300">+91 9931730361</p>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/Ritik-9931"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6 hover:-translate-y-2 transition-all"
            >
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                💻 GitHub
              </h3>

              <p className="text-gray-700 dark:text-gray-300">
                github.com/Ritik-9931
              </p>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/ritik-raushan-960288372"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6 hover:-translate-y-2 transition-all"
            >
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                💼 LinkedIn
              </h3>

              <p className="text-gray-700 dark:text-gray-300 break-all">
                linkedin.com/in/ritik-raushan-960288372
              </p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
