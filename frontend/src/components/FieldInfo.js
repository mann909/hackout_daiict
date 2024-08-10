import React, { useState } from 'react';
import FieldCards from './FieldCards';
import { fieldsData } from '../utils/fieldsData';

const FieldInfo = () => {

  const [filteredFields, setFilteredFields] = useState(fieldsData);
  const [filters, setFilters] = useState({
    area: '',
    maxPrice: '',
    village: '',
    minRainfall: '',
    crops: '',
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  const filterFields = () => {
    let filtered = fieldsData.filter((field) => {
      const areaCheck = filters.area ? field.area >= parseFloat(filters.area) : true;
      const priceCheck = filters.maxPrice ? field.estimatedPrice <= parseFloat(filters.maxPrice) : true;
      const villageCheck = filters.village ? field.village.includes(filters.village) : true;
      const rainfallCheck = filters.minRainfall ? field.rainfallAvg >= parseFloat(filters.minRainfall) : true;
      const cropsCheck = filters.crops ? field.growableCrops.includes(filters.crops) : true;
      return areaCheck && priceCheck && villageCheck && rainfallCheck && cropsCheck;
    });
    setFilteredFields(filtered);
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">Fields for Sale</h1>
      
      {/* Filter Section */}
      <div className="bg-white p-4 shadow-md rounded-md mb-4">
        <h2 className="text-xl font-semibold mb-2">Filter Fields</h2>
        <div className="flex flex-wrap -mx-2">
          <div className="w-full md:w-1/4 px-2 mb-4">
            <label className="block mb-1 font-medium">Min Area (sq m)</label>
            <input
              type="number"
              name="area"
              value={filters.area}
              onChange={handleFilterChange}
              className="w-full border rounded p-2"
            />
          </div>
          <div className="w-full md:w-1/4 px-2 mb-4">
            <label className="block mb-1 font-medium">Max Price (₹)</label>
            <input
              type="number"
              name="maxPrice"
              value={filters.maxPrice}
              onChange={handleFilterChange}
              className="w-full border rounded p-2"
            />
          </div>
          <div className="w-full md:w-1/4 px-2 mb-4">
            <label className="block mb-1 font-medium">Village</label>
            <input
              type="text"
              name="village"
              value={filters.village}
              onChange={handleFilterChange}
              className="w-full border rounded p-2"
            />
          </div>
          <div className="w-full md:w-1/4 px-2 mb-4">
            <label className="block mb-1 font-medium">Min Rainfall (mm)</label>
            <input
              type="number"
              name="minRainfall"
              value={filters.minRainfall}
              onChange={handleFilterChange}
              className="w-full border rounded p-2"
            />
          </div>
          <div className="w-full md:w-1/4 px-2 mb-4">
            <label className="block mb-1 font-medium">Growable Crops</label>
            <input
              type="text"
              name="crops"
              value={filters.crops}
              onChange={handleFilterChange}
              className="w-full border rounded p-2"
            />
          </div>
        </div>
        <button
          onClick={filterFields}
          className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600"
        >
          Apply Filters
        </button>
      </div>

      {/* Field Cards */}
      <div className="flex flex-wrap -mx-2">
        {filteredFields.map((field, index) => (
          <FieldCards key={index} field={field} />
        ))}
      </div>
    </div>
  );
};

export default FieldInfo;
