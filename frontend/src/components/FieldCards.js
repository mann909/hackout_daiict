import React from 'react';

const FieldCards = ({ field }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 m-4 w-full md:w-1/2 lg:w-1/3">
      <h2 className="text-xl font-bold mb-2">Field in {field.village}</h2>
      <p><strong>Area:</strong> {field.area} sq m</p>
      <p><strong>Estimated Price:</strong> ₹{field.estimatedPrice}</p>
      <p><strong>Soil Info:</strong> {field.soilInfo}</p>
      <p><strong>Average Rainfall:</strong> {field.rainfallAvg} mm</p>
      <p><strong>Past Yield:</strong> {field.pastYield}</p>
      <p><strong>Growable Crops:</strong> {field.growableCrops}</p>
      <p><strong>Irrigation Facilities:</strong> {field.irrigationFacilities}</p>
    </div>
  );
};

export default FieldCards;
