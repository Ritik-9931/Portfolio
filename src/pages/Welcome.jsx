import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaArrowRight, FaMoon, FaSun } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import useTheme from "../components/useTheme";

const Welcome = () => {
  const navigate = useNavigate();
  const { darkMode, setDarkMode } = useTheme();

  const [entering, setEntering] = useState(false);
  const [particles, setParticles] = useState([]);

  // Generate floating particles
  useEffect(() => {
    const arr = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      size: Math.random() * 6 + 3,
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: Math.random() * 10 + 12,
      delay: Math.random() * 5,
    }));

    setParticles(arr);
  }, []);

  const enterPortfolio = () => {
    setEntering(true);

    setTimeout(() => {
      navigate("/home");
    }, 900);
  };

  return (
    <AnimatePresence>
      {!entering && (
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{
            scale: 1.15,
            opacity: 0,
            filter: "blur(10px)",
          }}
          transition={{ duration: 0.8 }}
          className="
          relative
          min-h-screen
          overflow-hidden

          bg-gray-50
          dark:bg-[#050505]

          flex
          items-center
          justify-center
          px-6
          "
        >
          {/* Theme Toggle */}

          <div className="absolute top-8 right-8 z-50">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="
      h-12
      w-12
      rounded-full

      border
      border-gray-200
      dark:border-red-900

      bg-white/80
      dark:bg-[#0B0B0B]/80

      backdrop-blur-xl

      flex
      items-center
      justify-center

      text-xl

      shadow-lg

      transition-all
      duration-300

      hover:scale-110
      hover:rotate-12

      text-blue-600
      dark:text-red-500
    "
            >
              {darkMode ? <FaMoon /> : <FaSun />}
            </button>
          </div>
          {/* Background Grid */}
          <div
            className="
            absolute
            inset-0
            opacity-30

            bg-[linear-gradient(rgba(0,0,0,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,.04)_1px,transparent_1px)]
            dark:bg-[linear-gradient(rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.04)_1px,transparent_1px)]

            bg-[size:60px_60px]
            "
          />

          {/* Top Glow */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.25, 0.45, 0.25],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
            }}
            className="
            absolute
            -top-40
            left-20
            h-[420px]
            w-[420px]
            rounded-full

            bg-blue-500/20
            blur-[150px]

            dark:bg-red-500/20
            "
          />

          {/* Bottom Glow */}
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.25, 0.4, 0.25],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
            }}
            className="
            absolute
            bottom-0
            right-10
            h-[350px]
            w-[350px]
            rounded-full

            bg-cyan-400/20
            blur-[140px]

            dark:bg-red-700/20
            "
          />

          {/* Floating Particles */}
          {particles.map((particle) => (
            <motion.span
              key={particle.id}
              initial={{
                opacity: 0,
                y: 40,
              }}
              animate={{
                opacity: [0.2, 0.8, 0.2],
                y: [-20, 20, -20],
              }}
              transition={{
                duration: particle.duration,
                delay: particle.delay,
                repeat: Infinity,
              }}
              style={{
                width: particle.size,
                height: particle.size,
                left: `${particle.left}%`,
                top: `${particle.top}%`,
              }}
              className="
              absolute
              rounded-full

              bg-blue-500/70

              dark:bg-red-500/70
              "
            />
          ))}

          {/* Main Glass Card */}

          <motion.div
            initial={{
              opacity: 0,
              y: 60,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              duration: 1,
              delay: 0.4,
            }}
            className="
            relative
            z-20

            w-full
            max-w-4xl

            rounded-[40px]

            border
            border-white/20
            dark:border-red-900

            bg-white/70
            dark:bg-[#0B0B0B]/70

            backdrop-blur-2xl

            shadow-2xl
            dark:shadow-[0_0_60px_rgba(239,68,68,.15)]

            p-12
            md:p-20
            text-center
            "
          >
            {/* RR Logo */}

            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 12,
                delay: 0.8,
              }}
              className="
              mx-auto

              h-24
              w-24

              rounded-full

              flex
              items-center
              justify-center

              text-4xl
              font-bold

              bg-blue-600
              dark:bg-red-600

              text-white

              shadow-xl
              "
            >
              RR
            </motion.div>

            {/* Small Heading */}

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="
              mt-8

              uppercase
              tracking-[6px]

              font-semibold

              text-blue-600
              dark:text-red-500
              "
            >
              Full Stack Developer
            </motion.p>

            {/* Name */}

            <motion.h1
              initial={{
                y: 40,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                duration: 0.8,
                delay: 1.2,
              }}
              className="
              mt-5

              text-5xl
              md:text-7xl

              font-black

              text-gray-900
              dark:text-white
              "
            >
              Ritik
              <span className="text-blue-600 dark:text-red-500"> Raushan</span>
            </motion.h1>

            {/* Type Animation */}

            <div
              className="
              mt-8

              text-xl
              md:text-3xl

              font-semibold

              text-gray-600
              dark:text-gray-300

              h-12
              "
            >
              <TypeAnimation
                sequence={[
                  "Building Modern Web Experiences",
                  2000,
                  "MERN Stack Developer",
                  2000,
                  "React & Spring Boot Developer",
                  2000,
                  "Creating Clean UI & Robust Backend",
                  2000,
                ]}
                speed={50}
                repeat={Infinity}
              />
            </div>

            {/* Description */}

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.7 }}
              className="
              mt-8

              mx-auto

              max-w-2xl

              text-lg
              leading-8

              text-gray-600
              dark:text-gray-400
              "
            >
              Passionate about building responsive, scalable and user-friendly
              applications using React, Node.js, MongoDB and Spring Boot.
            </motion.p>

            {/* Enter Button */}

            <motion.button
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 2,
                duration: 0.6,
              }}
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.96,
              }}
              onClick={enterPortfolio}
              className="
              group
              relative

              mt-12

              inline-flex
              items-center
              gap-3

              overflow-hidden

              rounded-full

              bg-blue-600
              dark:bg-red-600

              px-10
              py-5

              text-lg
              font-semibold

              text-white

              shadow-xl

              transition-all
              duration-300

              hover:shadow-[0_15px_40px_rgba(37,99,235,.35)]
              dark:hover:shadow-[0_15px_40px_rgba(239,68,68,.35)]
              "
            >
              {/* Hover Shine */}

              <span
                className="
                absolute
                inset-0

                -translate-x-full

                bg-gradient-to-r
                from-transparent
                via-white/30
                to-transparent

                group-hover:translate-x-full

                transition-transform
                duration-1000
                "
              />

              <span className="relative">Enter Portfolio</span>

              <FaArrowRight
                className="
                relative

                transition-transform
                duration-300

                group-hover:translate-x-2
                "
              />
            </motion.button>

            {/* Small Text */}

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 2.4,
              }}
              className="
              mt-8

              text-sm
              tracking-[3px]
              uppercase

              text-gray-500
              dark:text-gray-500
              "
            >
              Click to Begin
            </motion.p>

            {/* Scroll Indicator */}

            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
              className="
              mt-14

              flex
              justify-center
              "
            >
              <div
                className="
                h-14
                w-8

                rounded-full

                border-2
                border-blue-500
                dark:border-red-500

                flex
                justify-center
                "
              >
                <motion.div
                  animate={{
                    y: [2, 18, 2],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                  }}
                  className="
                  mt-2

                  h-3
                  w-3

                  rounded-full

                  bg-blue-500
                  dark:bg-red-500
                  "
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Floating Decorative Rings */}

          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
            absolute
            -top-32
            -right-32

            h-80
            w-80

            rounded-full

            border

            border-blue-500/20
            dark:border-red-500/20
            "
          />

          <motion.div
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: 55,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
            absolute
            -bottom-36
            -left-36

            h-[420px]
            w-[420px]

            rounded-full

            border

            border-blue-400/10
            dark:border-red-400/10
            "
          />
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Welcome;
