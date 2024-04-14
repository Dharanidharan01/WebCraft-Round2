import React from 'react';
import TopBar from '../Components/TopBar';
import Footer from '../Components/Footer';

const VendorsShowcasePage = () => {
  return (
    <div className="container mx-auto p-4 mt-2">
      <TopBar />
      <div className="text-black text-left ml-0 mt-20 p-1 font-poppins relative">
        {/* Gradient overlay */}
        <div className="absolute inset-0 opacity-50 rounded-lg "></div>
        <h2 className="text-3xl font-bold mb-4 relative z-20">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-pink-500">Welcome to our vibrant community of local vendors!</span>
        </h2>
      </div>
      
      <div className="text-left">
        
        <section className="mb-16 mt-5">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 font-poppins">Green Valley Gardens</h2>
          <div className="flex mb-4">
            <img src="https://img.freepik.com/free-photo/talking-client_1098-13119.jpg?t=st=1713109641~exp=1713113241~hmac=62715935f54982c3fb37c1e9f56166933e14a40a5015cb0e11994062a1c232eb&w=996" alt="Green Valley Gardens" className="h-80 object-cover rounded-lg" />
            <div className="ml-8">
              <p className="text-lg text-gray-800 mb-4 font-poppins">About: Green Valley Gardens is a small, family-run farm nestled in the picturesque countryside. We specialize in growing a wide variety of organic fruits and vegetables using sustainable farming practices. From plump heirloom tomatoes to crisp bell peppers and sweet strawberries, our produce is bursting with flavor and freshness.</p>
              <p className="text-lg text-gray-800 mb-4 font-poppins">Contact:</p>
              <ul className="list-disc ml-8 mb-4">
                <li>Phone: (555) 555-1234</li>
                <li>Email: info@greenvalleygardens.com</li>
                <li>Website: <a href="https://www.greenvalleygardens.com" className="text-blue-500">www.greenvalleygardens.com</a></li>
                <li>Location: Look for our rustic wooden stall decorated with colorful bunting at the heart of the farmers market.</li>
              </ul>
              <p className="text-lg text-gray-800 mb-4 font-poppins">Featured Products:</p>
              <ul className="list-disc ml-8 mb-4">
                <li>Heirloom Tomatoes</li>
                <li>Sweet Corn</li>
                <li>Rainbow Carrots</li>
                <li>Organic Blueberries</li>
              </ul>
              <p className="text-lg text-gray-800 mb-4 font-poppins">Social Media:</p>
              <ul className="list-disc ml-8">
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Twitter</li>
              </ul>
            </div>
          </div>
        </section>
        {/* Add similar sections for other vendors */}
        {/* Vendor 2: Baker's Delight Bakery */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 font-poppins">Baker's Delight Bakery</h2>
          <div className="flex mb-4">
            <img src="https://img.freepik.com/free-photo/happy-florist_1098-14340.jpg?t=st=1713110241~exp=1713113841~hmac=bddcd8adcfcfffc57f9986e7ead8fef7733f0ca8c55d6040ed822aeb0391228f&w=996" alt="Baker's Delight Bakery" className="h-80 object-cover rounded-lg" />
            <div className="ml-8">
              <p className="text-lg text-gray-800 mb-4 font-poppins">About: Baker's Delight Bakery is a cozy, family-owned bakery known for our mouthwatering selection of artisan bread, pastries, and desserts. Using time-honored recipes and the finest ingredients, we bake everything from scratch with love and care. Whether you're craving a flaky croissant, a crusty baguette, or a decadent chocolate cake, we have something to satisfy every craving.</p>
              <p className="text-lg text-gray-800 mb-4 font-poppins">Contact:</p>
              <ul className="list-disc ml-8 mb-4">
                <li>Phone: (555) 555-5678</li>
                <li>Email: contact@bakersdelightbakery.com</li>
                <li>Website: <a href="https://www.bakersdelightbakery.com" className="text-blue-500">www.bakersdelightbakery.com</a></li>
                <li>Location: Visit our charming bakery stand adorned with a whimsical sign and the irresistible aroma of freshly baked goods.</li>
              </ul>
              <p className="text-lg text-gray-800 mb-4 font-poppins">Featured Products:</p>
              <ul className="list-disc ml-8 mb-4">
                <li>Artisan Sourdough Bread</li>
                <li>Butter Croissants</li>
                <li>Fruit Danish</li>
                <li>Red Velvet Cupcakes</li>
              </ul>
              <p className="text-lg text-gray-800 mb-4 font-poppins">Social Media:</p>
              <ul className="list-disc ml-8">
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Twitter</li>
              </ul>
            </div>
          </div>
        </section>
        {/* Vendor 3: Crafty Creations */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 font-poppins">Crafty Creations</h2>
          <div className="flex mb-4">
            <img src="https://img.freepik.com/free-photo/portrait-man-working-dried-flowers-shop_23-2151362100.jpg?t=st=1713110118~exp=1713113718~hmac=8d503bd7b61987842760c22f5c8d90a04e95a064e92ae4b6d3b85241311ceb5f&w=996" alt="Crafty Creations" className="h-80 object-cover rounded-lg" />
            <div className="ml-8">
              <p className="text-lg text-gray-800 mb-4 font-poppins">About: Crafty Creations is a boutique workshop specializing in unique handmade crafts and gifts. From intricately woven baskets to hand-painted ceramics and one-of-a-kind jewelry, each piece is lovingly crafted by skilled artisans using traditional techniques and sustainable materials. Whether you're shopping for yourself or searching for the perfect gift, our eclectic collection is sure to inspire and delight.</p>
              <p className="text-lg text-gray-800 mb-4 font-poppins">Contact:</p>
              <ul className="list-disc ml-8 mb-4">
                <li>Phone: (555) 555-9012</li>
                <li>Email: info@craftycreations.com</li>
                <li>Website: <a href="https://www.craftycreations.com" className="text-blue-500">www.craftycreations.com</a></li>
                <li>Location: Explore our charming stall adorned with colorful displays and handmade signage showcasing our exquisite craftsmanship.</li>
              </ul>
              <p className="text-lg text-gray-800 mb-4 font-poppins">Featured Products:</p>
              <ul className="list-disc ml-8 mb-4">
                <li>Handwoven Baskets</li>
                <li>Ceramic Mugs</li>
                <li>Beaded Jewelry</li>
                <li>Handcrafted Soap</li>
              </ul>
              <p className="text-lg text-gray-800 mb-4 font-poppins">Social Media:</p>
              <ul className="list-disc ml-8">
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Twitter</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
      
<hr className="border-gray-300 my-10 border-solid border-t-2" /> {/* Line with increased thickness */}
      <Footer />
    </div>
  );
}

export default VendorsShowcasePage;
