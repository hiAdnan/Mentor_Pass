/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-gradient-to-r from-gray-900 to-gray-800 shadow-lg z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Brand Logo */}
        <h1 className="text-2xl md:text-3xl font-extrabold text-white">
          MentorPass
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <a
            href="#hero"
            className="text-white text-sm md:text-base hover:underline transition-all"
          >
            Home
          </a>
          <a
            href="#mentors"
            className="text-white text-sm md:text-base hover:underline transition-all"
          >
            Mentors
          </a>
          <a
            href="#pricing"
            className="text-white text-sm md:text-base hover:underline transition-all"
          >
            Pricing
          </a>
          <a
            href="#testimonials"
            className="text-white text-sm md:text-base hover:underline transition-all"
          >
            Testimonials
          </a>
          <a
            href="#faqs"
            className="text-white text-sm md:text-base hover:underline transition-all"
          >
            FAQs
          </a>
          <a
            href="/login"
            className="bg-blue-500 text-white text-sm md:text-base px-4 py-2 rounded-lg hover:bg-blue-600 transition-all"
          >
            Login
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-900">
          <nav className="flex flex-col space-y-4 p-4">
            <a
              href="#hero"
              className="text-white text-sm hover:underline transition-all"
            >
              Home
            </a>
            <a
              href="#mentors"
              className="text-white text-sm hover:underline transition-all"
            >
              Mentors
            </a>
            <a
              href="#pricing"
              className="text-white text-sm hover:underline transition-all"
            >
              Pricing
            </a>
            <a
              href="#testimonials"
              className="text-white text-sm hover:underline transition-all"
            >
              Testimonials
            </a>
            <a
              href="#faqs"
              className="text-white text-sm hover:underline transition-all"
            >
              FAQs
            </a>
            <a
              href="/login"
              className="bg-blue-500 text-white text-sm px-4 py-2 rounded-lg hover:bg-blue-600 transition-all"
            >
              Login
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
