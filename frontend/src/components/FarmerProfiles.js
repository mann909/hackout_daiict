import React, { useState } from 'react';
import FarmerCard from './FarmerCard';
import farmersData from '../utils/data';

const FarmerProfiles = () => {
  const villages = ['Greenfield', 'Sunville', 'Harveston', 'Riverside', 'Hillside'];
  
  const [farmers, setFarmers] = useState(farmersData);

  const [filters, setFilters] = useState({
    experience: '',
    village: '',
    crops: '',
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const filteredFarmers = farmers.filter((farmer) => {
    return (
      (!filters.experience || farmer.experience >= parseInt(filters.experience)) &&
      (!filters.village || farmer.village.toLowerCase().includes(filters.village.toLowerCase())) &&
      (!filters.crops || farmer.crops.toLowerCase().includes(filters.crops.toLowerCase()))
    );
  });

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <h1 className="text-4xl text-center font-bold mb-10">Farmers for Hire</h1>

      <div className="flex justify-center mb-8">
        <div className="flex space-x-4">
          <input
            type="text"
            name="experience"
            placeholder="Experience (years)"
            value={filters.experience}
            onChange={handleFilterChange}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <input
            type="text"
            name="village"
            placeholder="Village"
            value={filters.village}
            onChange={handleFilterChange}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <input
            type="text"
            name="crops"
            placeholder="Expertise in Crops"
            value={filters.crops}
            onChange={handleFilterChange}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 container mx-auto px-4">
        {filteredFarmers.map((farmer, index) => (
          <FarmerCard key={index} farmer={farmer} />
        ))}
      </div>
    </div>
  );
};

export default FarmerProfiles;
