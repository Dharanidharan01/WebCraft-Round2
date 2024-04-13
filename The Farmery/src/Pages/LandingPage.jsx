// LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Welcome to our Farmers Market!</h1>
      <p className="text-lg mb-8">
        Discover fresh produce, baked goods, and artisan crafts from local farmers.
      </p>
      <Link
        to="/app"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Explore Now
      </Link>
    </div>
  );
};

export default LandingPage;
