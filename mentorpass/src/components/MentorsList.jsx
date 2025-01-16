/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// File: src/components/MentorsList.jsx
import React from "react";

const MentorsList = ({ mentors }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
      <h2 className="text-2xl font-semibold text-blue-400 mb-4">Favorite Mentors</h2>
      <ul className="space-y-4">
        {mentors.map((mentor, index) => (
          <li key={index} className="text-lg">
            {mentor.name}: {mentor.specialty}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MentorsList;
