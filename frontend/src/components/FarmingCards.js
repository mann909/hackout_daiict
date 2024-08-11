import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faMapMarkerAlt, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const FarmingCards = () => {
  const nav=useNavigate()
  return (
    <div className="flex justify-center items-center p-16 pb-32 bg-green-100 ">
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 p-4">
        {/* Card 1 */}
        <div onClick={()=>nav('/farmerprofiles')} className="bg-white rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 ease-in-out p-6 text-center cursor-pointer">
          <h2 className="text-xl font-bold text-green-700 mb-4">Search Farmer</h2>
          <FontAwesomeIcon icon={faSearch} className="text-green-600 text-3xl mb-4" />
          <p className="text-gray-600">
            Find and connect with local farmers for your agricultural needs.
          </p>
        </div>

        {/* Card 2 */}
        <div onClick={()=>nav('/fieldinfo')} className="bg-white rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 ease-in-out p-6 text-center cursor-pointer">
          <h2 className="text-xl font-bold text-green-700 mb-4">Find Suitable Lands</h2>
          <FontAwesomeIcon icon={faMapMarkerAlt} className="text-green-600 text-3xl mb-4" />
          <p className="text-gray-600">
            Discover the best lands suitable for your farming projects.
          </p>
        </div>

        {/* Card 3 */}
        <div onClick={()=>nav('/agent')} className="bg-white rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 ease-in-out p-6 text-center cursor-pointer">
          <h2 className="text-xl font-bold text-green-700 mb-4">Contact Nearby Agents</h2>
          <FontAwesomeIcon icon={faPhoneAlt} className="text-green-600 text-3xl mb-4" />
          <p className="text-gray-600">
            Get in touch with agents to help you with your farming business.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FarmingCards;