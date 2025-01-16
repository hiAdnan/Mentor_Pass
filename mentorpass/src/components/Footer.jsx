//src\components\Footer.jsx
// eslint-disable-next-line no-unused-vars
import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* About Section */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-blue-500">About MentorPass</h4>
            <p className="text-gray-400 text-lg leading-relaxed">
              MentorPass connects you with top mentors to accelerate your growth. Trusted by startups and professionals worldwide.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-blue-500">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#hero" className="text-gray-400 hover:text-white transition duration-300">Home</a></li>
              <li><a href="#mentors" className="text-gray-400 hover:text-white transition duration-300">Mentors</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-white transition duration-300">Pricing</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-white transition duration-300">Testimonials</a></li>
              <li><a href="#faqs" className="text-gray-400 hover:text-white transition duration-300">FAQs</a></li>
            </ul>
          </div>

          {/* Contact / Follow Us Section */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-blue-500">Follow Us</h4>
            <div className="flex space-x-6 mb-8">
              <a href="#" className="text-gray-400 hover:text-blue-500 transition duration-300"><FaFacebook size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition duration-300"><FaTwitter size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-pink-500 transition duration-300"><FaInstagram size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-blue-700 transition duration-300"><FaLinkedin size={24} /></a>
            </div>
            <form className="mt-8">
              <h4 className="text-xl font-semibold mb-4 text-blue-500">Message Us</h4>
              <input type="text" placeholder="Your Name" className="w-full mb-4 p-3 bg-gray-800 border border-gray-700 rounded text-white focus:ring-2 focus:ring-blue-500" />
              <input type="email" placeholder="Your Email" className="w-full mb-4 p-3 bg-gray-800 border border-gray-700 rounded text-white focus:ring-2 focus:ring-blue-500" />
              <textarea placeholder="Your Message" className="w-full mb-4 p-3 bg-gray-800 border border-gray-700 rounded text-white focus:ring-2 focus:ring-blue-500"></textarea>
              <button className="bg-blue-500 px-8 py-3 rounded-lg text-white hover:bg-blue-600 transition duration-300 focus:ring-2 focus:ring-blue-400">Send</button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 text-center border-t border-gray-700 pt-4">
          <p className="text-gray-500 text-sm">&copy; 2024 MentorPass. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
