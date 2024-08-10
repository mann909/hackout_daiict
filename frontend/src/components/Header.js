import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Replace with actual login state
  const location = useLocation();
  const nav = useNavigate()

  const handleAuthAction = () => {
    if (isLoggedIn) {
      // Handle sign-out logic
      setIsLoggedIn(false);
    } else {
        nav('/login')
      // Redirect to login page
      // You can use a function to navigate to the login page
    }
  };

  const getLinkClasses = (path) => {
    const baseClasses =
      'px-3 py-2 rounded transition duration-100 hover:bg-green-600';
    const activeClasses = 'bg-green-700';

    return location.pathname === path
      ? `${baseClasses} ${activeClasses}`
      : baseClasses;
  };

  return (
    <header className="bg-green-500 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between px-8 items-center">
        {/* Logo */}
        <div className="text-5xl font-bold">
          <Link to="/">FarmEasy</Link>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6 text-lg">
          <Link to="/" className={getLinkClasses('/')}>
            Home
          </Link>
          <Link to="/buy" className={getLinkClasses('/buy')}>
            Buy
          </Link>
          <Link to="/learn" className={getLinkClasses('/learn')}>
            Learn
          </Link>
          <Link to="/about-us" className={getLinkClasses('/about-us')}>
            About Us
          </Link>
          <Link to="/contact-us" className={getLinkClasses('/contact-us')}>
            Contact Us
          </Link>
        </nav>

        {/* Login/Sign Out Button */}
        <button
          onClick={handleAuthAction}
          className="bg-white text-green-500 font-semibold px-4 py-2 rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-green-400"
        >
          {isLoggedIn ? 'Sign Out' : 'Login'}
        </button>
      </div>
    </header>
  );
};

export default Header;
