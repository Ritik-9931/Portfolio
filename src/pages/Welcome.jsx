import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/home")}
      className="min-h-screen min-w-screen bg-[radial-gradient(circle_at_center,#1e3a8a_0%,#0f172a_45%,#020617_100%)] text-white flex items-center justify-center"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="text-center"
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
            initial={{y:100}}
          animate={{ y: 0}}
          transition={{ 
            type: "spring",
            stiffness: 200,
            damping: 8,
            duration: 1
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
