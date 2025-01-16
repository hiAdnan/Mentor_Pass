// eslint-disable-next-line no-unused-vars
import React from "react";

const CheckoutPage = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-900 text-white">
      <div className="bg-gray-800 p-10 rounded-lg shadow-lg w-96 text-center">
        <h1 className="text-3xl font-bold mb-6">Checkout</h1>
        <p className="text-gray-300 mb-6">Thank you for logging in! You can now proceed to explore MentorPass services.</p>
        <a
          href="/"
          className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
        >
          Go to Homepage
        </a>
      </div>
    </div>
  );
};


export default CheckoutPage;
