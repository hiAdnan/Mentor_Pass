/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const faqs = [
    {
      question: "What is MentorPass?",
      answer: "MentorPass connects you with top mentors to help solve business challenges."
    },
    {
      question: "How does it work?",
      answer: "Sign up, choose your mentor, and book a session. It’s that easy!"
    },
    {
      question: "What are the pricing plans?",
      answer: "We offer Lite, Standard, and Premium plans to suit your needs."
    },
    {
      question: "How do I get started?",
      answer: "Click on Get Started and create your profile to begin your mentorship journey."
    }
  ];
  
  const FAQs = () => {
    const [openIndex, setOpenIndex] = useState(null);
  
    const toggleFAQ = (index) => {
      setOpenIndex(openIndex === index ? null : index);
    };
  
    return (
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-800 rounded-lg overflow-hidden">
                <button
                  className="w-full text-left p-4 bg-gray-800 hover:bg-gray-700"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="text-lg font-bold text-blue-400">{faq.question}</h3>
                </button>
                {openIndex === index && (
                  <div className="p-4 bg-gray-700">
                    <p className="text-gray-300">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
export default FAQs;