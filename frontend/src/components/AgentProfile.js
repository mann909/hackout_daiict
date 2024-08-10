import React, { useState } from 'react';

const AgentProfile = () => {
  const [agentInfo, setAgentInfo] = useState({
    name: 'Jane Smith',
    age: 38,
    gender: 'Female',
    contactNumber: '+91 9876543210',
    email: 'janesmith@example.com',
    agency: 'GreenFields Realty'
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAgentInfo(prevInfo => ({
      ...prevInfo,
      [name]: value
    }));
  };

  const handleSave = () => {
    setIsEditing(false);
    // Add logic to save updated information to the server
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-green-800 m-4">Agent Profile</h1>

      {/* Agent Details */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-green-700 m-4">Agent Information</h2>
        {isEditing ? (
          <div className="space-y-4">
            <input
              type="text"
              name="name"
              value={agentInfo.name}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
            <input
              type="number"
              name="age"
              value={agentInfo.age}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              name="gender"
              value={agentInfo.gender}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              name="contactNumber"
              value={agentInfo.contactNumber}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
            <input
              type="email"
              name="email"
              value={agentInfo.email}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              name="agency"
              value={agentInfo.agency}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
            <button
              onClick={handleSave}
              className="bg-green-600 text-white px-4 py-2 rounded"
            >
              Save
            </button>
          </div>
        ) : (
          <div className="space-y-2">
            <p ><strong className='m-4'>Name:</strong> {agentInfo.name}</p>
            <p ><strong className='m-4'>Age:</strong> {agentInfo.age}</p>
            <p ><strong className='m-4'>Gender:</strong> {agentInfo.gender}</p>
            <p ><strong className='m-4'>Contact Number:</strong> {agentInfo.contactNumber}</p>
            <p ><strong className='m-4'>Email:</strong> {agentInfo.email}</p>
            <p ><strong className='m-4'>Agency:</strong> {agentInfo.agency}</p>
            <button
              onClick={() => setIsEditing(true)}
              className="bg-green-600 text-white px-4 py-2 rounded m-4 mt-8"
            >
              Edit
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AgentProfile;