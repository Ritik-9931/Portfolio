import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import iron from "../assets/iron.png";

const Welcome = () => {
  const navigate = useNavigate();

  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Fill the canvas with black
    const gradient = ctx.createLinearGradient(
      0,
      0,
      canvas.width,
      canvas.height,
    );

    gradient.addColorStop(0, "#06b6d4");
    gradient.addColorStop(0.5, "#8b5cf6");
    gradient.addColorStop(1, "#ec4899");

    ctx.fillStyle = gradient;
    // ctx.fillStyle = "gray";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Erase instead of drawing
    ctx.globalCompositeOperation = "destination-out";
  }, []);

  const paint = (e) => {
    const ctx = canvasRef.current.getContext("2d");

    ctx.beginPath();
    ctx.arc(e.clientX, e.clientY, 50, 0, Math.PI * 2);
    ctx.fill();
  };

  //   const [position, setPosition] = useState({ x: 0, y: 0 });
  return (
    <div
      onMouseMove={(e) =>
        setPosition({
          x: e.clientX,
          y: e.clientY,
        })
      }
      onClick={() => navigate("/home")}
      className="relative overflow-hidden min-h-screen min-w-screen bg-[radial-gradient(circle_at_center,#1e3a8a_0%,#0f172a_45%,#020617_100%)] text-white flex items-center justify-center"
    >
      <img
        src={iron}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />

      <canvas
        ref={canvasRef}
        onMouseMove={paint}
        className="absolute inset-0 z-10"
      />

      {/* <div
        className="pointer-events-none absolute h-80 w-80 rounded-full blur-3xl"
        style={{
          left: position.x - 160,
          top: position.y - 160,
          background:
            "radial-gradient(circle, rgba(34,211,238,0.35) 0%, transparent 70%)",
        }}
      /> */}

      {/* //   <div
    //     className="absolute inset-0"
    //     style={{
    //       background: `radial-gradient(
    //             circle 220px at ${position.x}px ${position.y}px,
    //             rgba(255,255,255,0.1) 0%,
    //             transparent 40%,
    //             rgba(0,0,0,0.95) 70%  
    //         )`,
    //       transition: "background 0.05s linear",
    //     }}
    //   /> */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative z-20 text-center"
      >
        <motion.p
          initial={{ y: -30, rotate: -180, opacity: 0 }}
          animate={{ y: 0, rotate: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.8, ease: "easeInOut" }}
          className="text-3xl font-semibold"
        >
          Welcome to My
        </motion.p>
        <motion.h1
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 8,
            duration: 1,
          }}
          className="text-7xl font-bold text-cyan-400 drop-shadow-[0_0_30px_rgba(34,211,238,0.8)]"
        >
          Portfolio Website
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="mt-6 text-gray-400"
        >
          Click anywhere to continue →
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Welcome;
