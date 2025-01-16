/* eslint-disable no-unused-vars */
import React from 'react';

const HowItWorks = () => {
    return (
      <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "Step 1",
                description: "Sign up and create your profile.",
                icon: "https://via.placeholder.com/100",
              },
              {
                step: "Step 2",
                description: "Browse mentors and choose the right fit.",
                icon: "https://via.placeholder.com/100",
              },
              {
                step: "Step 3",
                description: "Book your first session and start learning!",
                icon: "https://via.placeholder.com/100",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gray-800 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={item.icon}
                  alt={item.step}
                  className="mx-auto mb-4 h-20 w-20"
                />
                <h3 className="text-xl font-bold mb-2">{item.step}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  

export default HowItWorks;