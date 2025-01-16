/* eslint-disable no-unused-vars */
// File: src/components/FeaturedMentors.jsx
import React from "react";

const mentors = [
  {
    name: "John Doe",
    expertise: "Startup Growth",
    image: "/mentor1.jpg",
    description: "Expert in scaling startups and securing funding.",
  },
  {
    name: "Jane Smith",
    expertise: "Product Design",
    image: "/mentor2.jpg",
    description: "Award-winning designer specializing in UX/UI.",
  },
  {
    name: "Michael Brown",
    expertise: "Software Engineering",
    image: "/mentor3.jpg",
    description: "Experienced engineer in cloud and AI solutions.",
  },
];

const FeaturedMentors = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Meet Our Featured Mentors
        </h2>
        <p className="text-center text-gray-400 mb-8">
          Learn from industry-leading experts with proven experience in their
          respective fields.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mentors.map((mentor, index) => (
            <div
              key={index}
              className="p-6 bg-gradient-to-r from-gray-800 to-gray-700 shadow-lg rounded-xl text-center hover:scale-105 hover:shadow-2xl transition-transform duration-300"
            >
              <div className="relative">
                <img
                  src={mentor.image}
                  alt={mentor.name}
                  className="mx-auto mb-4 h-32 w-32 rounded-full border-4 border-blue-500"
                />
                <div className="absolute inset-0 rounded-full border border-blue-600 blur-lg opacity-25"></div>
              </div>
              <h3 className="text-xl font-bold mb-2">{mentor.name}</h3>
              <p className="text-blue-400 font-medium mb-2">{mentor.expertise}</p>
              <p className="text-gray-300 mb-4 text-sm">{mentor.description}</p>
              <a
                href="#"
                className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition"
              >
                View Profile
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedMentors;
