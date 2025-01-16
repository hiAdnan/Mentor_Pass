/* eslint-disable no-unused-vars */
import React from 'react';

const PricingPlans = () => {
    return (
      <section className="py-16 bg-gray-800 text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            Pricing Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[{
              name: "Lite",
              price: "$300/month",
              description: "Includes 30 credits per month.",
            }, {
              name: "Standard",
              price: "$600/month",
              description: "Includes 60 credits per month.",
            }, {
              name: "Premium",
              price: "$1200/month",
              description: "Includes 120 credits per month."
            }].map((plan, index) => (
              <div
                key={index}
                className="p-6 bg-gray-700 shadow-lg rounded-lg text-center hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                <p className="text-4xl font-extrabold text-blue-400 mb-4">{plan.price}</p>
                <p className="text-gray-300 mb-6">{plan.description}</p>
                <a
                  href="/checkout"
                  className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600"
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