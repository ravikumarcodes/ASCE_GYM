import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TrainerCard from "../components/TrainerCard";

const trainers = [
  {
    name: "James Carter",
    specialty: "Strength Training",
    image: "/src/Images/Trainer1.jpeg",
  },
  {
    name: "Lena Fischer",
    specialty: "Yoga & Wellness",
    image: "/src/Images/Trainer2.jpg",
  },
  {
    name: "Carlos Romero",
    specialty: "HIIT & Cardio",
    image: "/src/Images/Trainer3.jpg",
  },
  {
    name: "Sophia Novak",
    specialty: "Pilates Expert",
    image: "/src/Images/Trainer4.jpg",
  },
];

const Trainers = () => {
  return (
    <>
      <Navbar />
      <section className="bg-gradient-to-br from-white via-gray-800 to-gray-700 py-20 px-4 md:px-20">
        <h1 className="text-4xl font-bold text-center mb-12 text-white">Meet Our Trainers</h1>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {trainers.map((trainer, index) => (
            <TrainerCard
              key={index}
              name={trainer.name}
              specialty={trainer.specialty}
              image={trainer.image}
            />
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Trainers;
