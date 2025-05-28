import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-800 to-gray-700 py-10 px-6 md:px-20">
      <h2 className="text-4xl font-bold text-white mb-6 text-center text-shadow-md">Get in Touch</h2>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Contact Form */}
        <div className="bg-white p-8 rounded-2xl shadow-2xl">
          <h3 className="text-2xl font-semibold text-red-600 mb-4">Send us a Message</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border-2 border-gray-500 rounded-lg focus:outline-red-600"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full p-3 border-2 border-gray-500 rounded-lg focus:outline-red-600"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                rows="4"
                placeholder="Write your message here..."
                className="w-full p-3 border-2 border-gray-500 rounded-lg focus:outline-red-600"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition"
            >
              Send
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col  bg-white p-8 rounded-2xl shadow-2xl">
          <h3 className="text-2xl font-semibold text-red-600 mb-4">Contact Information</h3>
          <p className="text-gray-700 mb-4">
            ASCE Gym<br />
            123 Fitness Street,<br />
            Wellness City, India
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Email:</strong> contact@ascegym.com
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Phone:</strong> +91 98765 43210
          </p>
          <p className="text-gray-700">
            <strong>Hours:</strong> Mon–Fri, 10:00 AM – 10:00 PM
          </p>
        </div>
      </div>
    </div>
    <Footer />
     </>
  );
};

export default Contact;
