// eslint-disable-next-line no-unused-vars
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-lg font-bold mb-4">About MentorPass</h4>
            <p className="text-gray-400">MentorPass helps you connect with top mentors to accelerate your growth. Trusted by startups worldwide.</p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#hero" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="#mentors" className="text-gray-400 hover:text-white">Mentors</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-white">Pricing</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-white">Testimonials</a></li>
              <li><a href="#faqs" className="text-gray-400 hover:text-white">FAQs</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
              <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-white">Instagram</a>
              <a href="#" className="text-gray-400 hover:text-white">LinkedIn</a>
            </div>
            <form className="mt-8">
              <h4 className="text-lg font-bold mb-4">Message Us</h4>
              <input type="text" placeholder="Your Name" className="w-full mb-4 p-2 bg-gray-800 border border-gray-700 rounded text-white" />
              <input type="email" placeholder="Your Email" className="w-full mb-4 p-2 bg-gray-800 border border-gray-700 rounded text-white" />
              <textarea placeholder="Your Message" className="w-full mb-4 p-2 bg-gray-800 border border-gray-700 rounded text-white"></textarea>
              <button className="bg-blue-500 px-6 py-2 rounded-lg text-white hover:bg-blue-600">Send</button>
            </form>
          </div>
        </div>
        <div className="mt-8 text-center border-t border-gray-800 pt-4">
          <p className="text-gray-500">&copy; 2024 MentorPass. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
