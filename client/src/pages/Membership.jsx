import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const plans = [
  {
    title: "Basic Plan",
    price: "₹999/month",
    features: ["Access to gym equipment", "1 personal training session", "Locker included"],
  },
  {
    title: "Pro Plan",
    price: "₹1999/month",
    features: ["Everything in Basic", "Unlimited group classes", "Diet consultation", "Shower facilities"],
  },
  {
    title: "Elite Plan",
    price: "₹2999/month",
    features: ["Everything in Pro", "Dedicated trainer", "Weekly progress tracking", "Free merchandise"],
  },
];

const Membership = () => {
  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-800 to-gray-700 py-16 px-4 md:px-20">
      <h2 className="text-4xl font-bold text-center mb-10 text-white">Choose Your Membership</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-lg/30 text-center hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-bold text-red-700 mb-4">{plan.title}</h3>
            <p className="text-3xl font-bold mb-6 text-gray-800">{plan.price}</p>
            <ul className="text-gray-700 mb-6 space-y-2">
              {plan.features.map((feature, i) => (
                <li key={i}>• {feature}</li>
              ))}
            </ul>
            <button className="bg-red-600 hover:bg-redo-700 text-white py-2 px-6 rounded-lg transition duration-300 cursor-pointer">
              Join Now
            </button>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Membership;
