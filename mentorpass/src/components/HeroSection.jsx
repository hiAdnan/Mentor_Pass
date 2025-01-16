/* eslint-disable no-unused-vars */
// File path: src/components/HeroSection.jsx

import React from "react";
import { motion } from "framer-motion";
import { FaApple, FaGoogle, FaFacebookF, FaTwitter, FaLinkedin } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <section className="relative py-20 bg-black text-white">
      <div className="container mx-auto px-6 flex flex-col items-center text-center">
        {/* Header Section */}
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold leading-tight mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Book 1:1 calls with the world’s top startup mentors.
        </motion.h1>
        <motion.div
          className="flex items-center space-x-2 text-lg md:text-xl mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <div className="flex space-x-1 text-green-400">
            <span>⭐</span>
            <span>⭐</span>
            <span>⭐</span>
            <span>⭐</span>
            <span>⭐</span>
          </div>
          <p>4.92/5 Rating (1000s of calls)</p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.3 }}
        >
          <a
            href="/signup"
            className="bg-purple-600 text-white px-6 py-3 text-lg rounded-lg shadow-lg hover:bg-purple-700 hover:shadow-xl transition transform hover:-translate-y-1"
          >
            Become a Member
          </a>
        </motion.div>

        {/* Subtext */}
        <motion.p
          className="text-sm text-gray-400 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          Learn from founders/operators of top DTC brands.
        </motion.p>

        {/* Logos - React Icons */}
        <motion.div
          className="flex items-center justify-center space-x-6 mt-4 opacity-75"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.6 }}
        >
          <FaApple size={30} className="text-gray-400 hover:text-white transition duration-300" />
          <FaGoogle size={30} className="text-gray-400 hover:text-white transition duration-300" />
          <FaFacebookF size={30} className="text-gray-400 hover:text-white transition duration-300" />
          <FaTwitter size={30} className="text-gray-400 hover:text-white transition duration-300" />
          <FaLinkedin size={30} className="text-gray-400 hover:text-white transition duration-300" />
        </motion.div>

        {/* Image */}
        <motion.div
          className="relative mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.8 }}
        >
          <div className="relative rounded-lg overflow-hidden shadow-lg group">
            <img
              src="/src/assets/hero.png"
              alt="Video Call"
              className="object-cover transform transition-transform duration-500 group-hover:scale-105 h-64"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
