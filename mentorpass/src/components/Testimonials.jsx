// File: mentorpass/src/components/Testimonials.jsx
// eslint-disable-next-line no-unused-vars
import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Product Manager",
    feedback:
      "MentorPass has been a game-changer for my career. Highly recommend!",
    image: "/person1.jpg",
  },
  {
    name: "Michael Lee",
    role: "Software Engineer",
    feedback: "The mentorship sessions are super insightful and practical.",
    image: "/person2.jpg",
  },
  {
    name: "Emily Davis",
    role: "Designer",
    feedback: "I landed my dream job with the help of my mentor.",
    image: "/person3.jpg",
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="py-16 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white"
    >
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          What People Say
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="relative p-6 bg-gray-800 shadow-xl rounded-xl text-center hover:scale-105 hover:shadow-2xl transition-transform duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.3, duration: 0.5 }}
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 blur-lg opacity-30"></div>

              {/* Image */}
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="mx-auto mb-6 h-24 w-24 rounded-full border-4 border-blue-500 shadow-md"
              />

              {/* Feedback */}
              <p className="text-gray-300 italic mb-4">
                &ldquo;{testimonial.feedback}&rdquo;
              </p>

              {/* Name & Role */}
              <h3 className="text-lg font-bold text-white">{testimonial.name}</h3>
              <p className="text-sm text-blue-400 font-medium">{testimonial.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
