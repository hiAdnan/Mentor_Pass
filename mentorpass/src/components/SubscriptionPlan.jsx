/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// File: src/components/SubscriptionPlan.jsx
import React from "react";

const SubscriptionPlan = ({ subscription }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
      <h2 className="text-2xl font-semibold text-blue-400 mb-4">Subscription Plan</h2>
      <p className="text-lg">You&#39;re currently subscribed to the <strong>{subscription}</strong> plan.</p>
      <button className="mt-4 bg-blue-500 px-6 py-2 rounded-lg hover:bg-blue-600 transition">
        Manage Subscription
      </button>
    </div>
  );
};

export default SubscriptionPlan;
