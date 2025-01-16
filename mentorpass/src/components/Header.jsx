// eslint-disable-next-line no-unused-vars
import React from "react";
const Header = () => {
  return (
    <header className="bg-gradient-to-r from-gray-900 to-gray-800 shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-3xl font-extrabold text-white">MentorPass</h1>
        <nav className="flex space-x-6">
          <a href="#hero" className="text-white hover:underline">Home</a>
          <a href="#mentors" className="text-white hover:underline">Mentors</a>
          <a href="#pricing" className="text-white hover:underline">Pricing</a>
          <a href="#testimonials" className="text-white hover:underline">Testimonials</a>
          <a href="#faqs" className="text-white hover:underline">FAQs</a>
          <a href="/login" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Login</a>
        </nav>
      </div>
    </header>
  );
};


export default Header;
