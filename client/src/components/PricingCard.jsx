import React from 'react';

const PricingCard = ({ title, price, features }) => {
  return (
    <div className="bg-white shadow-xl rounded-lg p-6 w-72 m-4 border hover:border-indigo-600 transition-all">
      <h3 className="text-2xl font-bold text-gray-800 text-center">{title}</h3>
      <p className="text-indigo-700 text-center text-xl font-semibold my-4">₹{price}/mo</p>
      <ul className="text-gray-600 space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="text-sm">✅ {feature}</li>
        ))}
      </ul>
      <div className="mt-6 text-center">
        <button className="bg-indigo-700 text-white py-2 px-4 rounded hover:bg-indigo-800">Join Now</button>
      </div>
    </div>
  );
};

export default PricingCard;
