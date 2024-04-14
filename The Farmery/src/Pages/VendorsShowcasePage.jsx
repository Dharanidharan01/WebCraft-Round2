import React from 'react';
import TopBar from '../Components/TopBar';
import Footer from '../Components/Footer';

const VendorsShowcasePage = () => {
  return (
    <div className="container mx-auto p-4 mt-20">
      <TopBar />
      <div className="text-left">
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 font-poppins">Green Valley Gardens</h2>
          <div className="flex mb-4">
            <img src="vendor_image_url_1.jpg" alt="Green Valley Gardens" className="h-80 object-cover rounded-lg" />
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
      </div>
      <Footer />
    </div>
  );
}

export default VendorsShowcasePage;
