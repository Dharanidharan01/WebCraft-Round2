// TopBar.js
import React from 'react';
import { Link } from 'react-router-dom';

const TopBar = () => {
  return (
    <div className="bg-gray-800 text-white py-4 px-8 flex justify-between items-center fixed top-0 left-0 w-full z-10">
      <Link to="/" className="text-xl font-bold">
        The Farmery
      </Link>
      <div>
        <Link to="/about" className="mx-4">
          About
        </Link>
        <Link to="/contact" className="mx-4">
          Contact
        </Link>
        {/* Add more links as needed */}
      </div>
    </div>
  );
};

export default TopBar;
