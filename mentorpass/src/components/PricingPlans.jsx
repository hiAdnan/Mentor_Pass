// File: src/components/PricingPlans.jsx
/* eslint-disable no-unused-vars */
import React from "react";

const PricingPlans = () => {
  const plans = [
    {
      name: "Lite",
      price: "$300/month",
      description: "Includes 30 credits per month.",
      features: ["30 credits", "Email support", "Community access"],
    },
    {
      name: "Standard",
      price: "$600/month",
      description: "Includes 60 credits per month.",
      features: ["60 credits", "Priority support", "Access to workshops"],
      isPopular: true,
    },
    {
      name: "Premium",
      price: "$1200/month",
      description: "Includes 120 credits per month.",
      features: ["120 credits", "Dedicated support", "All features unlocked"],
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Pricing Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 ${
                plan.isPopular
                  ? "bg-gradient-to-r from-blue-600 to-purple-700 text-white"
                  : "bg-gray-800 text-gray-200"
              }`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-bl-lg">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <p className="text-4xl font-extrabold mb-4">{plan.price}</p>
              <p className="text-gray-300 mb-6">{plan.description}</p>
              <ul className="mb-6 space-y-2">
                {plan.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center space-x-2 text-sm text-gray-300"
                  >
                    <span className="inline-block w-3 h-3 bg-blue-500 rounded-full"></span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="/checkout"
                className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition"
              >
                Choose Plan
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
