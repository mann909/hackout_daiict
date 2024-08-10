import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-white text-green-800 py-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">About AgriBiz Connect</h3>
          <p className="text-green-600">
            AgriBiz Connect is your one-stop platform for discovering the best farming lands, connecting with experienced farmers, and growing your agri-business with the right resources and tools.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul>
            <li className="mb-2 hover:text-green-500 transition">
              <a href="#">Farmer Interface</a>
            </li>
            <li className="mb-2 hover:text-green-500 transition">
              <a href="#">Land Broker Interface</a>
            </li>
            <li className="mb-2 hover:text-green-500 transition">
              <a href="#">Customer Interface</a>
            </li>
            <li className="mb-2 hover:text-green-500 transition">
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <ul>
            <li className="flex items-center mb-2">
              <FontAwesomeIcon icon={faPhone} className="mr-2 text-green-500" />
              <span>+91 12345 67890</span>
            </li>
            <li className="flex items-center mb-2">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-green-500" />
              <span>info@agribizconnect.com</span>
            </li>
          </ul>
          <div className="flex mt-4">
            <a href="#" className="mr-4 hover:text-green-500 transition">
              <FontAwesomeIcon icon={faFacebookF} className="text-2xl" />
            </a>
            <a href="#" className="mr-4 hover:text-green-500 transition">
              <FontAwesomeIcon icon={faTwitter} className="text-2xl" />
            </a>
            <a href="#" className="hover:text-green-500 transition">
              <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center text-green-600 mt-8">
        &copy; {new Date().getFullYear()} AgriBiz Connect. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;