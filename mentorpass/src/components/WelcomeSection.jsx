/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// File: src/components/WelcomeSection.jsx
import React from "react";

const WelcomeSection = ({ name }) => {
  return (
    <div className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 text-white py-20 px-4 rounded-lg shadow-lg text-center">
      <h1 className="text-5xl font-extrabold mb-4">Welcome, {name}!</h1>
      <p className="text-xl mb-8">You&#39;re logged in and ready to explore MentorPass!</p>

      <div className="max-w-3xl mx-auto text-left space-y-6">
        <h2 className="text-3xl font-semibold text-gray-300">What’s Next?</h2>
        <ul className="list-inside list-disc text-lg text-gray-200">
          <li>Browse through a curated list of mentors</li>
          <li>Schedule your first session and start learning</li>
          <li>Track your progress and learn at your own pace</li>
        </ul>
      </div>

      <div className="mt-12">
        <button
          onClick={() => alert("Explore Mentors!")}
          className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg text-xl font-semibold transition duration-300"
        >
          Explore Mentors
        </button>
      </div>
    </div>
  );
};

export default WelcomeSection;
