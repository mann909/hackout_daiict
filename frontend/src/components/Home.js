
import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSeedling, faMapMarkerAlt, faUsers } from "@fortawesome/free-solid-svg-icons";
import Footer from "./Footer";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Home = () => {
    const nav = useNavigate()
    const value =useContext(AppContext)
  return (
    <div className="flex flex-col min-h-screen bg-green-50">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-screen text-white flex flex-col justify-center items-center px-6" style={{ backgroundImage: "url('https://assets.weforum.org/article/image/OFmrVg02eeGSvuI-_NT2D7gFKPagzGCrF-KYLcreYDU.jpg')" }}>
        {/* Overlay */}
        <div className="absolute inset-0 bg-green-900 opacity-55"></div>

        {/* Content */}
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to AgriBiz Connect</h1>
          <p className="text-xl mb-6">
            Discover, connect, and grow your agricultural business with the best resources and opportunities.
          </p>
          <Link to={!value.isLoggedIn ? '/login' : ''} className="bg-white text-green-700 py-3 px-6 rounded-full font-semibold hover:bg-green-100 transition">
            Get Started
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center text-green-800 mb-12">Our Key Features</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-all" >
            <FontAwesomeIcon icon={faSeedling} className="text-green-600 text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Find Farmers</h3>
            <p className="text-gray-600">Connect with local farmers to expand your agricultural network and collaborate on projects.</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-all">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-green-600 text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Locate Lands</h3>
            <p className="text-gray-600">Discover prime agricultural lands across India, tailored to your farming needs and preferences.</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-all">
            <FontAwesomeIcon icon={faUsers} className="text-green-600 text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Contact Agents</h3>
            <p className="text-gray-600">Get in touch with agents who can assist you with land acquisition and business growth.</p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-green-100 py-16 px-6">
        <h2 className="text-3xl font-bold text-center text-green-800 mb-12">How It Works</h2>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-gray-700 mb-8">
            AgriBiz Connect provides a seamless experience for farmers, land brokers, and customers. Browse our platform to find opportunities, connect with key stakeholders, and grow your agricultural ventures.
          </p>
          <a href="#contact" className="bg-green-700 text-white py-3 px-6 rounded-full font-semibold hover:bg-green-800 transition">
            Learn More
          </a>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center text-green-800 mb-12">What Our Users Say</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <p className="text-gray-700 mb-4">
              "AgriBiz Connect has transformed the way I connect with farmers and find lands. It's a valuable resource for any agricultural enthusiast."
            </p>
            <p className="font-semibold text-green-800">Rajesh Kumar</p>
            <p className="text-gray-600">Farmer</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <p className="text-gray-700 mb-4">
              "The platform is easy to use and has helped me discover new opportunities for land acquisition and business growth."
            </p>
            <p className="font-semibold text-green-800">Priya Patel</p>
            <p className="text-gray-600">Land Broker</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;