/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// File: src/components/UpcomingSession.jsx
import React from "react";

const UpcomingSession = ({ nextSession }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
      <h2 className="text-2xl font-semibold text-blue-400 mb-4">Upcoming Session</h2>
      <p className="text-lg">Your next session is on: <strong>{nextSession}</strong></p>
    </div>
  );
};

export default UpcomingSession;
