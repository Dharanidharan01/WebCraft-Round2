import React from 'react';
import TopBar from '../Components/TopBar';
import '@fontsource/poppins'; // Importing Poppins font
import Footer from '../Components/Footer';

const LandingPage = () => {
  return (
    <div>
      <TopBar />
      <div className="flex justify-between items-start p-0 ml-0 font-poppins"> {/* Applying font-poppins class to the main container */}
        <div className="text-left ml-0 mt-40">
          <h2 className="text-3xl font-bold">Welcome to The Farmery Experience the <br />
          Charm of Locally Grown</h2>
          <br />
          <p className="text-lg text-gray-700">Explore a Haven of Fresh Produce, Delectable Baked Goods,<br />  and Artisan Crafts. Join us in Supporting Local Farmers and Artisans.</p>
          <button className="bg-black hover:bg-black-100 text-white font-bold py-2 px-4 rounded mt-4">Get Started</button>
          <div style={{ height: '60px' }}></div> {/* Adding space after the button */}
          <div className="text-lg text-gray-700">
            <p><strong>Explore a Haven of:</strong></p>
            <ul className="list-disc pl-5 mt-4">
              <li>Fresh Produce: From the soil to your table, taste the difference.</li>
              <li>Delectable Baked Goods: Savor homemade treats crafted with care.</li>
              <li>Artisan Crafts: Discover unique creations, each with a story to tell.</li>
            </ul>
          </div>
        </div> 
        
        <img 
          src="https://images.pexels.com/photos/2924651/pexels-photo-2924651.jpeg?auto=compress&cs=tinysrgb&w=600" 
          alt="Eye-catching Image" 
          style={{ marginTop: '60px', borderRadius: '8px', maxHeight: '600px', maxWidth: '50%' }} 
        />
      </div>

      {/* Our Achievements Section */}
      <div className="bg-black rounded-lg p-8 mb-20 mt-20 font-poppins text-white">
        <h2 className="text-2xl font-bold mb-10 mt-5">Our Achievements</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <p className="text-base">
              <span className="text-4xl font-thin">70%</span>
              <br></br>
              Increase in Local Produce Sales
            </p>
          </div>
          <div className="md:border-l border-gray-600">
            <p className="text-base">
              <span className="text-4xl font-thin">50%</span>
              <br></br>
              Rise in Artisan Vendor Participation
            </p>
          </div>
          <div className="md:border-l border-gray-600">
            <p className="text-base">
              <span className="text-4xl font-thin">40%</span>
              <br></br>
              Reduced Carbon Footprint
            </p>
          </div>
        </div>
      </div>
      {/* New Section */}
<div className="flex justify-between items-start p-0 ml-0 mt-20 font-poppins">
  <div className="rounded-bg ml-4">
    <img 
      src="https://cdn.dribbble.com/userupload/14073266/file/original-2c0dc3e7978890f7baaf381c6928cd23.png?resize=600x507" 
      alt="Rounded Image" 
      style={{ borderRadius: '8px', maxHeight: '1900px', maxWidth: '130%' }} 
    />
  </div>

  <div className="text-left ml-20">
    <h2 className="text-3xl font-bold mb-10">Explore The Farmery Experience</h2>
    <p className="text-lg text-gray-700">Explore The Farmery Experience: Indulge in the essence of local flavor with our fresh produce, baked goods, and artisanal crafts, all sourced straight from our vibrant community of growers and creators.</p>
    <button className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded mt-4">Learn More</button>
    <div className="mt-0 flex justify-between ml-0">
  <img 
    src="https://cdn.dribbble.com/userupload/14073661/file/original-38acf57905e09f0923e9134337325264.png?resize=1024x319&vertical=center" 
    alt="Combined Image" 
    className="w-60"
    style={{ width: '360px', height: '120px', marginLeft: '0' }} 
  />
</div>


  </div>
</div>

<hr className="border-gray-300 my-10 border-solid border-t-2" /> {/* Line with increased thickness */}



{/* New Section */}
<div className="bg-white mt-20 rounded-lg p-8 font-poppins text-black">
  <h2 className="text-4xl font-bold mb-10">Step into the heart of Bowles Farming</h2>
  <p className="text-lg mb-10">Experience the rich tapestry of our agricultural heritage, nurtured over generations. Explore our past market events through captivating images, showcasing the culmination of hard work and dedication.</p>
  
  <div className="grid grid-cols-3 gap-4">
    {/* You can replace the image URLs with your own */}
    <div className="relative">
      <img src="https://img.freepik.com/free-photo/traditional-japanese-food-court_23-2148759581.jpg?t=st=1713042668~exp=1713046268~hmac=82ed91238a6dbad7dabe75d7699558b7d96d22a8fbe63811c3a4b51a1e50c341&w=740" alt="Image" className="rounded-lg w-full h-full" />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition duration-300">
        <p className="text-white text-lg">View More</p>
      </div>
    </div>
    <div className="relative">
      <img src="https://img.freepik.com/premium-photo/farmers-red-fresh-tomatoes-market-red-tomatoes-background_862994-14580.jpg?w=740" alt="Image" className="rounded-lg w-full h-full" />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition duration-300">
        <p className="text-white text-lg">View More</p>
      </div>
    </div>
    <div className="relative">
      <img src="https://img.freepik.com/free-photo/woman-with-summer-hat-groceries-smiles_23-2148648924.jpg?t=st=1713042554~exp=1713046154~hmac=2784443ac75f23b60c75aeb6ff70ec67118f7699de8049898046728595d894e1&w=740" alt="Image" className="rounded-lg w-full h-full" />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition duration-300">
        <p className="text-white text-lg">View More</p>
      </div>
    </div>
    <div className="relative">
      <img src="https://img.freepik.com/free-photo/female-baker-holding-baked-fresh-macaroons-pastries-tray_23-2148028064.jpg?t=st=1713042766~exp=1713046366~hmac=666d92aa83a4c5889a93959f6e429186f40550b30f723ee0d3f40bfd8e1829c7&w=740" alt="Image" className="rounded-lg w-full h-full" />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition duration-300">
        <p className="text-white text-lg">View More</p>
      </div>
    </div>
    <div className="relative">
      <img src="https://img.freepik.com/free-photo/man-painting-home_23-2148017381.jpg?t=st=1713042826~exp=1713046426~hmac=7993c5d6312f9a4973080f8cf9fc6de62d4df69d36f3862446568970ed9d25dc&w=740" alt="Image" className="rounded-lg w-full h-full" />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition duration-300">
        <p className="text-white text-lg">View More</p>
      </div>
    </div>
    <div className="relative">
      <img src="https://img.freepik.com/free-photo/man-buying-fruits-vegetables-farmers-market_894855-2304.jpg?w=740" alt="Image" className="rounded-lg w-full h-full" />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition duration-300">
        <p className="text-white text-lg">View More</p>
      </div>
    </div>
  </div>
</div>
 {/* New Section */}
<div 
  className="bg-white mt-20 rounded-lg p-8 font-poppins text-black" 
  style={{ 
    backgroundImage: "url('https://img.freepik.com/premium-vector/red-heart-shape-with-line-white-background-with-copy-space_120819-536.jpg?w=1060')",
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    padding: '80px', // Adjust padding as needed
    textAlign: 'center', // Center align text
    color: '#000', // Text color
    fontSize: '1.25rem' // Font size of text
  }}
>
  <h2 className="text-4xl font-bold mb-10">Celebrate Local Flavors & Embrace the Essence of The Farmery</h2>
  <p className="text-lg mb-10">Immerse yourself in a culinary journey like no other as we celebrate the vibrant flavors of our local community. From farm-fresh produce to handcrafted delicacies, each offering tells a story of passion, quality, and tradition. Join us in honoring the rich tapestry of our region's bounty, where every bite is a testament to the dedication of our local growers and artisans.</p>
</div>

<hr className="border-gray-300 my-10 border-solid border-t-2" /> {/* Line with increased thickness */}

<Footer />
    </div>
  );
};

export default LandingPage;
