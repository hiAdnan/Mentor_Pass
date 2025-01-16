// File: src/components/FAQs.jsx
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What is MentorPass?",
    answer: "MentorPass connects you with top mentors to help solve business challenges.",
    icon: "❓",
  },
  {
    question: "How does it work?",
    answer: "Sign up, choose your mentor, and book a session. It’s that easy!",
    icon: "⚙️",
  },
  {
    question: "What are the pricing plans?",
    answer: "We offer Lite, Standard, and Premium plans to suit your needs.",
    icon: "💰",
  },
  {
    question: "How do I get started?",
    answer: "Click on Get Started and create your profile to begin your mentorship journey.",
    icon: "🚀",
  },
];

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Question */}
              <button
                className={`w-full flex items-center justify-between p-4 text-left bg-gradient-to-r ${openIndex === index
                    ? "from-blue-600 to-purple-700"
                    : "from-gray-800 to-gray-700"
                  } hover:from-blue-600 hover:to-purple-700`}
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex items-center space-x-2">
                  <span className="text-xl">{faq.icon}</span>
                  <h3 className="text-lg font-bold text-white">{faq.question}</h3>
                </div>
                <span
                  className={`ml-4 text-2xl transition-transform ${openIndex === index ? "rotate-180" : "rotate-0"
                    }`}
                >
                  ⌄
                </span>
              </button>

              {/* Animated Answer */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="p-4 bg-gray-800"
                  >
                    <p className="text-gray-300">{faq.answer}</p>
                  </motion.div>

                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
