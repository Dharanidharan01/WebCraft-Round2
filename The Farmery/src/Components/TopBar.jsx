// TopBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '@fontsource/poppins'; // Importing Poppins font
import logo from '../assets/images/logo.png'

const TopBar = () => {
  return (
    <div className="bg-black text-white py-4 px-8 flex justify-between items-center fixed top-0 left-0 w-full  z-10 font-poppins">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="w-30 h-8 mr-2" /> {/* Adjust width and height as needed */}
        
      </div>
      <div className="flex items-center">
        <Link to="/about" className="mx-4">
          About
        </Link>
        <Link to="/contact" className="mx-4">
          Contact
        </Link>
        <Link to="/login" className="mx-4">
          Login
        </Link>
        <Link to="/signup" className="mx-4">
          Signup
        </Link>
        {/* Add more links as needed */}
      </div>
    </div>
  );
};

export default TopBar;