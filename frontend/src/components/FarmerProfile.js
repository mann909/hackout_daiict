import React, { useState } from "react";
import Footer from "./Footer";

const FarmerProfile = () => {
  const [farmerDetails, setFarmerDetails] = useState({
    name: 'John Doe',
    age: 45,
    gender: 'Male',
    experience: 20,
    language: 'English, Hindi',
    crops: 'Wheat, Rice',
    equipmentKnowledge: 'Tractors, Plows',
    helpers: 5,
    village: 'Greenfield',
    email: 'john.doe@example.com',
    contactNumber: '1234567890',
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFarmerDetails({
      ...farmerDetails,
      [name]: value,
    });
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    setIsEditing(false);
    // Handle the logic to save the data, e.g., API call.
  };

  return (
    <div className="max-w-4xl mx-auto p-8 rounded-lg shadow-lg bg-white hover:bg-green-50 transition duration-300">
      <h2 className="text-3xl font-bold text-center mb-6 text-green-800">Farmer Profile</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Name */}
        <div>
          <label className="block text-gray-700 font-bold text-xl">Name:</label>
          {isEditing ? (
            <input
              type="text"
              name="name"
              value={farmerDetails.name}
              onChange={handleChange}
              className="mt-2 p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:border-green-500"
            />
          ) : (
            <p className="mt-2 text-gray-900 text-lg font-medium">{farmerDetails.name}</p>
          )}
        </div>

        {/* Age */}
        <div>
          <label className="block text-gray-700 font-bold text-xl">Age:</label>
          {isEditing ? (
            <input
              type="number"
              name="age"
              value={farmerDetails.age}
              onChange={handleChange}
              className="mt-2 p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:border-green-500"
            />
          ) : (
            <p className="mt-2 text-gray-900 text-lg font-medium">{farmerDetails.age}</p>
          )}
        </div>

        {/* Gender */}
        <div>
          <label className="block text-gray-700 font-bold text-xl">Gender:</label>
          {isEditing ? (
            <input
              type="text"
              name="gender"
              value={farmerDetails.gender}
              onChange={handleChange}
              className="mt-2 p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:border-green-500"
            />
          ) : (
            <p className="mt-2 text-gray-900 text-lg font-medium">{farmerDetails.gender}</p>
          )}
        </div>

        {/* Experience */}
        <div>
          <label className="block text-gray-700 font-bold text-xl">Experience (years):</label>
          {isEditing ? (
            <input
              type="number"
              name="experience"
              value={farmerDetails.experience}
              onChange={handleChange}
              className="mt-2 p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:border-green-500"
            />
          ) : (
            <p className="mt-2 text-gray-900 text-lg font-medium">{farmerDetails.experience}</p>
          )}
        </div>

        {/* Language */}
        <div>
          <label className="block text-gray-700 font-bold text-xl">Languages Spoken:</label>
          {isEditing ? (
            <input
              type="text"
              name="language"
              value={farmerDetails.language}
              onChange={handleChange}
              className="mt-2 p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:border-green-500"
            />
          ) : (
            <p className="mt-2 text-gray-900 text-lg font-medium">{farmerDetails.language}</p>
          )}
        </div>

        {/* Crops */}
        <div>
          <label className="block text-gray-700 font-bold text-xl">Crops:</label>
          {isEditing ? (
            <input
              type="text"
              name="crops"
              value={farmerDetails.crops}
              onChange={handleChange}
              className="mt-2 p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:border-green-500"
            />
          ) : (
            <p className="mt-2 text-gray-900 text-lg font-medium">{farmerDetails.crops}</p>
          )}
        </div>

        {/* Equipment Knowledge */}
        <div>
          <label className="block text-gray-700 font-bold text-xl">Equipment Knowledge:</label>
          {isEditing ? (
            <input
              type="text"
              name="equipmentKnowledge"
              value={farmerDetails.equipmentKnowledge}
              onChange={handleChange}
              className="mt-2 p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:border-green-500"
            />
          ) : (
            <p className="mt-2 text-gray-900 text-lg font-medium">{farmerDetails.equipmentKnowledge}</p>
          )}
        </div>

        {/* Helpers */}
        <div>
          <label className="block text-gray-700 font-bold text-xl">Number of Helpers:</label>
          {isEditing ? (
            <input
              type="number"
              name="helpers"
              value={farmerDetails.helpers}
              onChange={handleChange}
              className="mt-2 p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:border-green-500"
            />
          ) : (
            <p className="mt-2 text-gray-900 text-lg font-medium">{farmerDetails.helpers}</p>
          )}
        </div>

        {/* Village */}
        <div>
          <label className="block text-gray-700 font-bold text-xl">Village:</label>
          {isEditing ? (
            <input
              type="text"
              name="village"
              value={farmerDetails.village}
              onChange={handleChange}
              className="mt-2 p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:border-green-500"
            />
          ) : (
            <p className="mt-2 text-gray-900 text-lg font-medium">{farmerDetails.village}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block text-gray-700 font-bold text-xl">Email:</label>
          <p className="mt-2 text-gray-900 text-lg font-medium">{farmerDetails.email}</p>
        </div>

        {/* Contact Number */}
        <div>
          <label className="block text-gray-700 font-bold text-xl">Contact Number:</label>
          {isEditing ? (
            <input
              type="text"
              name="contactNumber"
              value={farmerDetails.contactNumber}
              onChange={handleChange}
              className="mt-2 p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:border-green-500"
            />
          ) : (
            <p className="mt-2 text-gray-900 text-lg font-medium">{farmerDetails.contactNumber}</p>
          )}
        </div>
      </div>

      <div className="flex justify-center mt-8 space-x-4">
        <button onClick={toggleEdit} className="bg-green-700 text-white py-2 px-6 rounded-lg font-semibold hover:bg-green-800 transition">
          {isEditing ? "Cancel" : "Edit"}
        </button>
        {isEditing && (
          <button onClick={handleSave} className="bg-blue-500 text-white py-2 px-6 rounded-lg font-semibold hover:bg-blue-600 transition">
            Save
          </button>
        )}
      </div>
    </div>
  );
};

export default FarmerProfile;
