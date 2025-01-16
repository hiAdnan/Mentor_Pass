/* eslint-disable no-unused-vars */
// File: src/components/Settings.jsx
import React from "react";

const Settings = () => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
      <h2 className="text-2xl font-semibold text-blue-400 mb-4">Settings</h2>
      <button className="bg-blue-500 px-6 py-2 rounded-lg hover:bg-blue-600 transition mr-4">
        Update Profile
      </button>
      <button className="bg-blue-500 px-6 py-2 rounded-lg hover:bg-blue-600 transition">
        Change Password
      </button>
    </div>
  );
};

export default Settings;
