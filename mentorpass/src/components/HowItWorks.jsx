// File: src/components/HowItWorks.jsx
/* eslint-disable no-unused-vars */
import React from "react";
import { FaUserPlus, FaSearch, FaChalkboardTeacher } from 'react-icons/fa';

const HowItWorks = () => {
  const steps = [
    {
      step: "Step 1",
      description: "Sign up and create your profile.",
      icon: <FaUserPlus size={40} className="text-blue-500" />,
    },
    {
      step: "Step 2",
      description: "Browse mentors and choose the right fit.",
      icon: <FaSearch size={40} className="text-blue-500" />,
    },
    {
      step: "Step 3",
      description: "Book your first session and start learning!",
      icon: <FaChalkboardTeacher size={40} className="text-blue-500" />,
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-gradient-to-r from-gray-800 to-gray-700 rounded-xl text-center shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <div className="relative mb-6">
                <div className="mx-auto mb-6">{item.icon}</div>
                <div className="absolute inset-0 h-20 w-20 mx-auto rounded-full border border-blue-500 blur-lg opacity-30"></div>
              </div>
              <h3 className="text-2xl font-semibold text-blue-400 mb-2">
                {item.step}
              </h3>
              <p className="text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
