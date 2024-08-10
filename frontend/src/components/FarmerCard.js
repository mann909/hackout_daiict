import React from 'react';

const FarmerCard = ({ farmer }) => {
  return (
    <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden my-4 mx-auto hover:shadow-2xl transition-shadow duration-300">
      <div className="px-6 py-4">
        <h2 className="font-bold text-xl mb-2">{farmer.name}</h2>
        <p className="text-gray-700 text-base">
          <strong>Age:</strong> {farmer.age}
        </p>
        <p className="text-gray-700 text-base">
          <strong>Gender:</strong> {farmer.gender}
        </p>
        <p className="text-gray-700 text-base">
          <strong>Experience:</strong> {farmer.experience} years
        </p>
        <p className="text-gray-700 text-base">
          <strong>Language:</strong> {farmer.language}
        </p>
        <p className="text-gray-700 text-base">
          <strong>Expertise in Crops:</strong> {farmer.crops}
        </p>
        <p className="text-gray-700 text-base">
          <strong>Equipment Knowledge:</strong> {farmer.equipmentKnowledge}
        </p>
        <p className="text-gray-700 text-base">
          <strong>Number of Helpers:</strong> {farmer.helpers}
        </p>
        <p className="text-gray-700 text-base">
          <strong>Village:</strong> {farmer.village}
        </p>
      </div>
    </div>
  );
};

export default FarmerCard;
