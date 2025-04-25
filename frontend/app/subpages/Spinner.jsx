import React from "react";
import { motion } from "framer-motion";

const Spinner = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <motion.div
        className="flex flex-col items-center justify-center space-y-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut", repeatType: "reverse" }}
      >
        <div className="w-16 h-16 border-4 border-t-transparent border-white rounded-full animate-spin" />
        <motion.h1
          className="text-white text-xl font-semibold tracking-wide"
          initial={{ letterSpacing: "-0.05em" }}
          animate={{ letterSpacing: "0.1em" }}
          transition={{ repeat: Infinity, duration: 2, repeatType: "mirror" }}
        >
          WIXAD HOTELS
        </motion.h1>
      </motion.div>
    </div>
  );
};

export default Spinner;