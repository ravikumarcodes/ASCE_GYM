import React from "react";

const About = () => {
  return (
    <section className="w-full bg-gray-800 py-16 px-6 md:px-24 text-center">
      <h2 className="text-4xl font-bold text-white mb-12">About ASCE Gym</h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-5xl mx-auto bg-gray-700 p-6 rounded-xl shadow-lg">
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img
            src="/src/Images/Gym2.jpg"
            alt="Gym"
            className="rounded-lg shadow-md w-full h-auto object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 text-left text-white">
          <h3 className="text-2xl font-semibold mb-4">Empower Your Fitness Journey</h3>
          <p className="text-lg leading-relaxed">
            At ASCE Gym, we combine modern equipment with personalized fitness plans,
            led by certified professionals committed to your growth. Whether you're
            a beginner or an athlete, our mission is to help you unlock your full
            potential—physically and mentally.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
