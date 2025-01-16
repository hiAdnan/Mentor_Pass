/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const isValidEmail = (email) => {
    // Simple email regex
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleLogin = () => {
    if (!isValidEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // Get the user data stored in localStorage
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser) {
      if (email === storedUser.email && password === storedUser.password) {
        // If credentials match, redirect to checkout page
        navigate("/checkout");
      } else {
        alert("Invalid email or password.");
      }
    } else {
      alert("No user found. Please sign up.");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-3xl font-bold text-white mb-6">Login</h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setError(""); // Clear error message when the email is updated
          }}
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={handleLogin}
          className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition"
        >
          Login
        </button>
        <p className="text-gray-400 mt-4 text-center">
          Don&#39;t have an account?{" "}
          <a href="/signup" className="text-blue-400 hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
