import React, { useState, useEffect } from 'react';
import TopBar from '../Components/TopBar';
import { FaCalendarAlt, FaClock } from 'react-icons/fa';
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';

const ShoppingPage = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-4">Explore Our Market</h1>
        <p className="text-gray-700">Fresh Produce, Baked Goods, and Artisan Crafts</p>
      </div>

      {/* Fresh Produce Section */}
      <section className="mb-12">
        <h2 className="text-xl font-bold mb-4">Fresh Produce</h2>
        <p className="text-gray-700 mb-4">Discover a wide selection of locally-grown fruits and vegetables at [Farmers Market Name]. From vibrant heirloom tomatoes bursting with flavor to crisp, leafy greens picked just this morning, our market offers an abundance of farm-fresh goodness for you to enjoy.</p>
        <p className="text-gray-700 mb-4">Plan your visit to Farmery and experience the joy of shopping for fresh produce in a vibrant and community-driven atmosphere.</p>
        <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Shop Now</button>
      </section>

      {/* Baked Goods Section */}
      <section className="mb-12">
        <h2 className="text-xl font-bold mb-4">Baked Goods</h2>
        <p className="text-gray-700 mb-4">Indulge in delicious pastries, bread, and cakes, baked fresh daily.</p>
        <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Shop Now</button>
      </section>

      {/* Artisan Crafts Section */}
      <section>
        <h2 className="text-xl font-bold mb-4">Artisan Crafts</h2>
        <p className="text-gray-700 mb-4">Explore unique handmade crafts, artworks, and gifts.</p>
        <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Shop Now</button>
      </section>
    </div>
  );
};

export default ShoppingPage;
