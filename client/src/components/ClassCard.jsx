import React from 'react';

const ClassCard = ({ title, time, trainer }) => {
  return (
    <div className="bg-gray-100 rounded-lg shadow-md p-4 w-full max-w-sm m-2">
      <h4 className="text-lg font-semibold text-gray-800">{title}</h4>
      <p className="text-sm text-gray-600 mt-1">🕒 {time}</p>
      <p className="text-sm text-gray-600">👨‍🏫 {trainer}</p>
    </div>
  );
};

export default ClassCard;
