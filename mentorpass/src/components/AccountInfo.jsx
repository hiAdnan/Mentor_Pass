/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// File: src/components/AccountInfo.jsx
import React from "react";

const AccountInfo = ({ email, subscription }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
      <h2 className="text-2xl font-semibold text-blue-400 mb-4">Account Information</h2>
      <p className="text-lg">Email: {email}</p>
      <p className="text-lg">Subscription: {subscription}</p>
    </div>
  );
};

export default AccountInfo;
