import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Set the root element for the modal to avoid accessibility issues

const AgentDashboard = () => {
  const [farmsForSale, setFarmsForSale] = useState([
    { location: 'Greenfield', size: '50 acres', price: '₹10,00,000', details: 'Suitable for wheat and rice.' }
  ]);
  const [farmsForRent, setFarmsForRent] = useState([
    { location: 'Hilltop', size: '20 acres', rent: '₹1,00,000/year', details: 'Water availability and fertile soil.' }
  ]);
  const [farmers, setFarmers] = useState([
    { name: 'John Doe', expertise: 'Wheat, Rice', contact: '+91 9876543211' }
  ]);

  const [showAddFarmSale, setShowAddFarmSale] = useState(false);
  const [showAddFarmRent, setShowAddFarmRent] = useState(false);
  const [showAddFarmer, setShowAddFarmer] = useState(false);

  const [newFarmSale, setNewFarmSale] = useState({ location: '', size: '', price: '', details: '' });
  const [newFarmRent, setNewFarmRent] = useState({ location: '', size: '', rent: '', details: '' });
  const [newFarmer, setNewFarmer] = useState({ name: '', expertise: '', contact: '' });

  const [modalContent, setModalContent] = useState([]);
  const [modalTitle, setModalTitle] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFarmSaleChange = (e) => {
    const { name, value } = e.target;
    setNewFarmSale(prev => ({ ...prev, [name]: value }));
  };

  const handleFarmRentChange = (e) => {
    const { name, value } = e.target;
    setNewFarmRent(prev => ({ ...prev, [name]: value }));
  };

  const handleFarmerChange = (e) => {
    const { name, value } = e.target;
    setNewFarmer(prev => ({ ...prev, [name]: value }));
  };

  const handleAddFarmSale = () => {
    setFarmsForSale(prev => [...prev, newFarmSale]);
    setNewFarmSale({ location: '', size: '', price: '', details: '' });
    setShowAddFarmSale(false);
  };

  const handleAddFarmRent = () => {
    setFarmsForRent(prev => [...prev, newFarmRent]);
    setNewFarmRent({ location: '', size: '', rent: '', details: '' });
    setShowAddFarmRent(false);
  };

  const handleAddFarmer = () => {
    setFarmers(prev => [...prev, newFarmer]);
    setNewFarmer({ name: '', expertise: '', contact: '' });
    setShowAddFarmer(false);
  };

  const openModal = (title, content) => {
    setModalTitle(title);
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col space-y-6">
      {/* Farms For Sale */}
      <div className="bg-white rounded-lg shadow-lg p-4">
        <h2 className="text-3xl font-semibold text-green-800 m-2">Farms For Sale</h2>
        <button
          onClick={() => openModal('Farms For Sale', farmsForSale)}
          className="bg-blue-600 text-white px-4 py-2 rounded m-2"
        >
          View Farms for Sale
        </button>
        {showAddFarmSale ? (
          <div className="space-y-2">
            <input
              type="text"
              name="location"
              value={newFarmSale.location}
              onChange={handleFarmSaleChange}
              placeholder="Location"
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              name="size"
              value={newFarmSale.size}
              onChange={handleFarmSaleChange}
              placeholder="Size"
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              name="price"
              value={newFarmSale.price}
              onChange={handleFarmSaleChange}
              placeholder="Price"
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              name="details"
              value={newFarmSale.details}
              onChange={handleFarmSaleChange}
              placeholder="Details"
              className="w-full p-2 border rounded"
            />
            <div className="flex space-x-4 mt-4">
              <button
                onClick={handleAddFarmSale}
                className="bg-green-600 text-white px-4 py-2 rounded "
              >
                Add Farm for Sale
              </button>
              <button
                onClick={() => setShowAddFarmSale(false)}
                className="bg-gray-600 text-white px-4 py-2 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <button
            onClick={() => setShowAddFarmSale(true)}
            className="bg-green-600 text-white px-4 py-2 rounded"
          >
            Add Farm for Sale
          </button>
        )}
      </div>

      {/* Farms For Rent */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-3xl font-semibold text-green-800 m-2">Farms For Rent</h2>
        <button
          onClick={() => openModal('Farms For Rent', farmsForRent)}
          className="bg-blue-600 text-white px-4 py-2 rounded m-2"
        >
          View Farms for Rent
        </button>
        {showAddFarmRent ? (
          <div className="space-y-2">
            <input
              type="text"
              name="location"
              value={newFarmRent.location}
              onChange={handleFarmRentChange}
              placeholder="Location"
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              name="size"
              value={newFarmRent.size}
              onChange={handleFarmRentChange}
              placeholder="Size"
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              name="rent"
              value={newFarmRent.rent}
              onChange={handleFarmRentChange}
              placeholder="Rent"
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              name="details"
              value={newFarmRent.details}
              onChange={handleFarmRentChange}
              placeholder="Details"
              className="w-full p-2 border rounded"
            />
            <div className="flex space-x-4 mt-4">
              <button
                onClick={handleAddFarmRent}
                className="bg-green-600 text-white px-4 py-2 rounded "
              >
                Add Farm for Rent
              </button>
              <button
                onClick={() => setShowAddFarmRent(false)}
                className="bg-gray-600 text-white px-4 py-2 rounded "
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <button
            onClick={() => setShowAddFarmRent(true)}
            className="bg-green-600 text-white px-4 py-2 rounded "
          >
            Add Farm for Rent
          </button>
        )}
      </div>

      {/* Farmers */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-3xl font-semibold text-green-800 m-2">Farmers</h2>
        <button
          onClick={() => openModal('Farmers', farmers)}
          className="bg-blue-600 text-white px-4 py-2 rounded m-2"
        >
          View Farmers
        </button>
        {showAddFarmer ? (
          <div className="space-y-2">
            <input
              type="text"
              name="name"
              value={newFarmer.name}
              onChange={handleFarmerChange}
              placeholder="Name"
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              name="expertise"
              value={newFarmer.expertise}
              onChange={handleFarmerChange}
              placeholder="Expertise"
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              name="contact"
              value={newFarmer.contact}
              onChange={handleFarmerChange}
              placeholder="Contact"
              className="w-full p-2 border rounded"
            />
            <div className="flex space-x-4 mt-4">
              <button
                onClick={handleAddFarmer}
                className="bg-green-600 text-white px-4 py-2 rounded "
              >
                Add Farmer
              </button>
              <button
                onClick={() => setShowAddFarmer(false)}
                className="bg-gray-600 text-white px-4 py-2 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <button
            onClick={() => setShowAddFarmer(true)}
            className="bg-green-600 text-white px-4 py-2 rounded "
          >
            Add Farmer
          </button>
        )}
      </div>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Details Modal"
        className="bg-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
      >
        <h2 className="text-xl font-semibold text-green-700 mb-4">{modalTitle}</h2>
        <ul className="space-y-2">
          {modalContent.map((item, index) => (
            <li key={index} className="border-b pb-2">
              {Object.entries(item).map(([key, value]) => (
                <p key={key}>
                  <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value}
                </p>
              ))}
            </li>
          ))}
        </ul>
        <button
          onClick={closeModal}
          className="bg-red-600 text-white px-4 py-2 rounded mt-4"
        >
          Close
        </button>
      </Modal>
    </div>
  );
};

export default AgentDashboard;