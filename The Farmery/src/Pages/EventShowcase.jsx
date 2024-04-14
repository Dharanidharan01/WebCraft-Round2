import React, { useState } from 'react';
import TopBar from '../Components/TopBar';
import Footer from '../Components/Footer';

import BookingConfirmationPopup from '../Components/BookingConfirmationPopup';

const EventShowcase = () => {
    const [showPopup, setShowPopup] = useState(false);
  
    const handleBookNowClick = () => {
      setShowPopup(true);
    };
  
    const handleClosePopup = () => {
      setShowPopup(false);
    };
  
    return (
      <div className="container mx-auto p-4 mt-20">
        <TopBar />
        <div className="text-left">
          <h1 className="text-3xl font-bold text-gray-800 mb-4 font-poppins">Farm-to-Table Cooking Workshop</h1>
          <p className="text-lg text-gray-600 mb-4 font-poppins">Date: Saturday, May 15th, 2024</p>
          <p className="text-lg text-gray-600 mb-4 font-poppins">Time: 10:00 AM - 12:00 PM</p>
          <p className="text-lg text-gray-600 mb-8 font-poppins">Location: Farmer's Kitchen Culinary Studio</p>
        </div>
        <div className="flex mb-8">
          <img src="https://img.freepik.com/free-photo/portrait-indigenous-person-integrated-into-modern-life_23-2151102528.jpg?t=st=1713108500~exp=1713112100~hmac=5f4401d9d815a895b3fbfa2c90780f6ba60c2f6011ab51bb7d09b9b9d5b88cd7&w=1060" alt="Cooking Workshop" className="h-80 object-contain rounded-lg" />
        </div>
        <div className="text-left mb-8">
          <p className="text-lg text-gray-800 font-poppins">
            <strong>Description:</strong><br />
            Indulge your culinary curiosity and join us for a memorable Farm-to-Table Cooking Workshop! Led by our talented local chefs, this hands-on experience promises to tantalize your taste buds and inspire your inner chef.<br /><br />
  
            During this immersive workshop, you'll embark on a journey through the vibrant world of farm-fresh ingredients. Learn how to transform the season's finest produce into mouthwatering dishes bursting with flavor and creativity. From crisp, garden-fresh salads to hearty, comforting soups, each recipe celebrates the bounty of the local harvest and the art of sustainable cooking.<br /><br />
  
            Discover the secrets of selecting and preparing the freshest ingredients, as well as techniques for maximizing flavor and nutrition. Our chefs will guide you through each step of the cooking process, sharing their expertise and passion for farm-to-table cuisine along the way.<br /><br />
  
            Whether you're a seasoned home cook or a culinary novice, this workshop offers something for everyone. Join us for a morning of culinary exploration, camaraderie, and delicious discoveries!<br /><br />
          </p>
        </div>
        <div className="flex justify-center">
          <button onClick={handleBookNowClick} className="bg-green-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Book Now</button>
        </div>
        {showPopup && <BookingConfirmationPopup onClose={handleClosePopup} />} {/* Render the popup if showPopup is true */}
        <br />
        <br />
        <hr className="border-gray-300 my-10 border-solid border-t-2" /> {/* Line with increased thickness */}
        <Footer />
      </div>
    );
  }
  
  export default EventShowcase;
