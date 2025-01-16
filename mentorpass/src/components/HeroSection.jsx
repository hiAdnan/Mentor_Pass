// eslint-disable-next-line no-unused-vars
import React from "react";

import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative py-20 bg-gradient-to-b from-gray-800 via-gray-700 to-gray-800 text-white">
      <div className="container mx-auto px-6 text-center">
        <motion.h1
          className="text-6xl font-extrabold leading-tight mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Unlock Your Potential with World-Class Mentors
        </motion.h1>
        <motion.p
          className="text-xl mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          Transform your career by learning from the best minds in the industry.
        </motion.p>
        <motion.div
          className="flex justify-center items-center space-x-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, repeat: Infinity, repeatType: "reverse" }}
        >
          <a
            href="/signup"
            className="bg-blue-500 text-white px-8 py-4 text-lg rounded-lg shadow-lg hover:bg-blue-600 transition"
          >
            Get Started
          </a>
          <a
            href="#mentors"
            className="bg-transparent border-2 border-blue-500 text-white px-8 py-4 text-lg rounded-lg hover:bg-blue-500 transition"
          >
            Explore Mentors
          </a>
        </motion.div>
        <div className="mt-10">
          <img
            src="/hero-image.jpg"
            alt="Mentorship"
            className="rounded-lg shadow-lg mx-auto"
            style={{ maxHeight: "400px" }}
          />
        </div>
      </div>
    </section>
  );
};




export default HeroSection;