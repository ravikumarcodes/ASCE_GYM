import React from 'react';

const TrainerCard = ({ name, specialty, image }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden w-72 m-4 transition-transform hover:scale-105">
      <img src={image} alt={name} className="w-full h-56 object-cover" />
      <div className="p-4 text-center">
        <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
        <p className="text-sm text-gray-600 mt-2">{specialty}</p>
      </div>
    </div>
  );
};

export default TrainerCard;
