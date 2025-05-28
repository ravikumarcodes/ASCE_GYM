import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Pricing = () => {
  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-800 to-gray-700 py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-center text-white mb-10">
        Compare Our Pricing Plans
      </h1>

      <div className="overflow-x-auto shadow-lg rounded-2xl">
        <table className="min-w-full border border-gray-300 text-center">
          <thead className="bg-red-600 text-white text-lg">
            <tr>
              <th className="px-4 py-3">Features</th>
              <th className="px-4 py-3">Basic</th>
              <th className="px-4 py-3">Pro</th>
              <th className="px-4 py-3">Elite</th>
            </tr>
          </thead>
          <tbody className="bg-white text-gray-800 text-md">
            <tr className="border-b">
              <td className="px-4 py-4 font-semibold text-left">Access to Equipment</td>
              <td className="text-green-600">✔️</td>
              <td className="text-green-600">✔️</td>
              <td className="text-green-600">✔️</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-4 font-semibold text-left">Personal Training</td>
              <td>1 Session</td>
              <td>Unlimited Group</td>
              <td>Dedicated Trainer</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-4 font-semibold text-left">Diet Consultation</td>
              <td className="text-gray-400">❌</td>
              <td className="text-green-600">✔️</td>
              <td className="text-green-600">✔️</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-4 font-semibold text-left">Progress Tracking</td>
              <td className="text-gray-400">❌</td>
              <td className="text-gray-400">❌</td>
              <td className="text-green-600">✔️</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-4 font-semibold text-left">Free Merchandise</td>
              <td className="text-gray-400">❌</td>
              <td className="text-gray-400">❌</td>
              <td className="text-green-600">✔️</td>
            </tr>
            <tr className="bg-gray-100 font-bold text-red-600">
              <td className="px-4 py-4 text-left">Price</td>
              <td>₹999/month</td>
              <td>₹1999/month</td>
              <td>₹2999/month</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="text-center mt-10">
        <a
          href="/Membership"
          className="bg-red-600 text-white px-8 py-3 rounded-lg shadow hover:bg-red-700 transition"
        >
          Choose Your Plan
        </a>
      </div>
    </div>
    <Footer />
     </>
  );
};

export default Pricing;
