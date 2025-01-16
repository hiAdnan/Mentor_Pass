/* eslint-disable no-unused-vars */
// File: src/components/LogoutButton.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Redirect to the homepage (or login page)
    navigate("/"); // This will take the user back to the homepage.
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition"
    >
      Logout
    </button>
  );
};

export default LogoutButton;
