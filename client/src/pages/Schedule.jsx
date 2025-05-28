import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const schedule = {
  Monday: { className: "Yoga Flow", time: "7:00 AM - 8:00 AM", instructor: "Emily" },
  Tuesday: { className: "HIIT Burn", time: "6:00 PM - 7:00 PM", instructor: "Alex" },
  Wednesday: { className: "Zumba Dance", time: "5:00 PM - 6:00 PM", instructor: "Sophia" },
  Thursday: { className: "CrossFit Core", time: "7:00 AM - 8:00 AM", instructor: "Daniel" },
  Friday: { className: "Strength Training", time: "6:00 PM - 7:00 PM", instructor: "Liam" },
  Saturday: { className: "Pilates Focus", time: "8:00 AM - 9:00 AM", instructor: "Grace" },
  Sunday: { className: "Rest Day", time: "-", instructor: "-" },
};

const Schedule = () => {
  const days = Object.keys(schedule);
  const [activeDay, setActiveDay] = useState("Monday");

  const activeClass =
    "bg-red-600 text-white font-semibold";
  const inactiveClass =
    "text-white hover:text-red-600 transition";

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-800 to-gray-700 py-12 px-6 md:px-20">
      <h2 className="text-4xl font-bold text-center text-white mb-10">Weekly Class Schedule</h2>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {days.map((day) => (
          <button
            key={day}
            onClick={() => setActiveDay(day)}
            className={`px-4 py-2 rounded-full border-1 ${
              activeDay === day ? activeClass : inactiveClass
            }`}
          >
            {day}
          </button>
        ))}
      </div>

      {/* Details Card */}
      <div className="max-w-lg mx-auto bg-white p-8 rounded-xl shadow-2xl text-center">
        <h3 className="text-2xl font-bold text-gray-800">{activeDay}</h3>
        <p className="text-red-600 text-lg font-bold mt-2">{schedule[activeDay].className}</p>
        <p className="text-gray-800 mt-1">{schedule[activeDay].time}</p>
        <p className="text-sm text-gray-800 mt-1">Instructor: {schedule[activeDay].instructor}</p>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Schedule;
