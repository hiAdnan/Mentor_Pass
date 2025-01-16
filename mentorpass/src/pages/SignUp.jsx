/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
  
    const handleSignup = () => {
      if (email && password && password === confirmPassword) {
        navigate("/checkout");
      } else if (password !== confirmPassword) {
        alert("Passwords do not match.");
      } else {
        alert("Please fill in all fields.");
      }
    };
  
    return (
      <div className="min-h-screen flex justify-center items-center bg-gray-900">
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-96">
          <h2 className="text-3xl font-bold text-white mb-6">Sign Up</h2>
          <input
            type="email"
            placeholder="Email"
            className="w-full mb-4 p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full mb-4 p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full mb-4 p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button
            onClick={handleSignup}
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition"
          >
            Sign Up
          </button>
          <p className="text-gray-400 mt-4 text-center">
            Already have an account? <a href="/login" className="text-blue-400 hover:underline">Login</a>
          </p>
        </div>
      </div>
    );
  };
  
export default SignUp;