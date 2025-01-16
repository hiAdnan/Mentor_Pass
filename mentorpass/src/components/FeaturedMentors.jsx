// eslint-disable-next-line no-unused-vars
import React from "react";

const mentors = [
  {
    name: "John Doe",
    expertise: "Startup Growth",
    image: "/mentor1.jpg",
    description: "Expert in scaling startups and securing funding."
  },
  {
    name: "Jane Smith",
    expertise: "Product Design",
    image: "/mentor2.jpg",
    description: "Award-winning designer specializing in UX/UI."
  },
  {
    name: "Michael Brown",
    expertise: "Software Engineering",
    image: "/mentor3.jpg",
    description: "Experienced engineer in cloud and AI solutions."
  }
];

const FeaturedMentors = () => {
  return (
    <section className="py-16 bg-gray-800 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Featured Mentors
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mentors.map((mentor, index) => (
            <div
              key={index}
              className="p-6 bg-gray-700 shadow-lg rounded-lg text-center hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={mentor.image}
                alt={mentor.name}
                className="mx-auto mb-4 h-32 w-32 rounded-full border-4 border-blue-500"
              />
              <h3 className="text-xl font-bold text-white mb-2">{mentor.name}</h3>
              <p className="text-blue-400 font-medium mb-2">{mentor.expertise}</p>
              <p className="text-gray-300 mb-4">{mentor.description}</p>
              <a
                href="#"
                className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
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