import React from "react";
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <img
        className="w-full h-auto object-cover opacity-60 hidden md:block"
        src="/src/Images/Gym4.jpg"
        alt="Gym"
      />
      <img
        className="w-full h-full object-cover md:hidden"
        src="/src/Images/Gym4.jpg"
        alt="Gym"
      />

      {/* Overlay Text */}
      <div className="absolute inset-0 flex flex-col justify-center items-start px-6 md:px-20 text-white">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight max-w-3xl">
          IT’S ALL ABOUT WHAT YOU <br /> CAN ACHIEVE
        </h1>
        <p className="text-md md:text-lg mt-4 text-gray-200 max-w-xl">
          Empower yourself to make the changes you need to make
        </p>
        <button className="mt-6 bg-red-600 hover:bg-red-700 px-6 py-3 rounded font-semibold shadow-lg cursor-pointer">
          <Link to="/Membership" className="hover:text-red-500">LET’S GET STARTED</Link>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
