import React from 'react';
import TopBar from '../Components/TopBar';
import Footer from '../Components/Footer';

const ShoppingPage = () => {
  return (
    <div>
      <TopBar />
      {/* First Section */}
      <div className="relative rounded-lg overflow-hidden mt-20" style={{ height: '300px' }}>
        <div className="absolute inset-0 w-full h-full object-cover">
          <img
            src="https://img.freepik.com/premium-photo/artist-painting-canvas-workshop_220873-52053.jpg?w=1380" // Replace 'your-image-url.jpg' with the URL or path of your image
            alt="Cover"
            className="w-full h-full object-cover"
          />
          {/* Text in top right corner */}
          <div className="absolute top-0 right-0 p-4 text-white font-poppins text-lg">
          Discover Our Market's Bounty
          </div>
        </div>
      </div>

      {/* How Meetup works section */}
      <div className="text-black text-left ml-0 mt-20 p-1 font-poppins relative">
        {/* Gradient overlay */}
        <div className="absolute inset-0 opacity-50 rounded-lg "></div>
        <h2 className="text-3xl font-bold mb-4 relative z-20">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-pink-500">Buy our Products</span>
        </h2>
      </div>

     {/* Second Section */}
<div className="flex mt-0 ">
  {/* Image on the left */}
  <div className="w-1/3 pr-2 relative group">
    
    {/* Image */}
    <img
      src="https://img.freepik.com/free-photo/hand-holding-rip-apple-tree_23-2147907066.jpg?t=st=1713098846~exp=1713102446~hmac=26ff51122e909afffd7e8159cd4d38b61bea1285e2fbbc2ed20f64274d396a5f&w=740" // Replace 'your-left-image-url.jpg' with the URL or path of your image
      alt="Left Image"
      className="w-full h-auto rounded-lg object-cover transition-opacity duration-300 group-hover:opacity-50"
    />
    {/* Text */}
    <div className="absolute top-0 left-0 p-4 text-white font-poppins text-lg">
      Grown fruits and vegetables
    </div>
    {/* Explore button */}
    <button className="absolute bottom-10 left-4 bg-black text-white px-4 py-2 rounded-md opacity-0 transition-opacity duration-300 group-hover:opacity-100">
      Explore
    </button>
  </div>
  {/* Images on the right */}
  <div className="w-2/3 flex flex-col">
    <div className="mb-2 relative group" style={{ height: '240px' }}>
      {/* Image */}
      <img
        src="https://img.freepik.com/free-photo/indulgent-homemade-chocolate-chip-cookies-rustic-wood-generated-by-ai_24640-80880.jpg?t=st=1713098427~exp=1713102027~hmac=78aa46a82bc2fc99553306c78f0aa5695d89973ff2c4151b1d26aa845b6c13cd&w=1060" // Replace 'your-right-image-url.jpg' with the URL or path of your image
        alt="Right Image 1"
        className="w-full h-full rounded-lg mb-2 object-cover transition-opacity duration-300 group-hover:opacity-50"
      />
      {/* Text */}
      <div className="absolute top-0 left-0 p-4 text-white font-poppins text-lg">
        Baked Goods
      </div>
      {/* Explore button */}
      <button className="absolute bottom-4 left-4 bg-black text-white px-4 py-2 rounded-md opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        Explore
      </button>
    </div>
    <div style={{ height: '210px' }} className="relative group">
      {/* Image */}
      <img
        src="https://img.freepik.com/free-photo/scene-with-miscellaneous-items-being-sold-yard-sale-bargains_23-2151216757.jpg?t=st=1713098697~exp=1713102297~hmac=d2129b1ee32a48e722745e8344ad86915e99be80a0ce6555e9ff55728787ff52&w=900" // Replace 'your-right-image-url.jpg' with the URL or path of your image
        alt="Right Image 2"
        className="w-full h-full rounded-lg object-cover transition-opacity duration-300 group-hover:opacity-50"
      />
      {/* Text */}
      <div className="absolute top-0 left-0 p-4 text-white font-poppins text-lg">
        Artisan Crafts
      </div>
      {/* Explore button */}
      <button className="absolute bottom-4 left-4 bg-black text-white px-4 py-2 rounded-md opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        Explore
      </button>
    </div>
  </div>
</div>


      {/* Product Listing Section */}
      <div className="mt-20">
        {/* Fresh Produce */}
        <div className="mb-16">
        <div className="text-black text-left ml-0 mt-20 p-1 font-poppins relative">
        {/* Gradient overlay */}
        <div className="absolute inset-0 opacity-50 rounded-lg "></div>
        <h2 className="text-3xl font-bold mb-4 relative z-20">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-pink-500">Fresh Produce</span>
        </h2>
      </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 ">
            {/* Product 1 */}
            <div className="flex flex-col items-center border border-black rounded-lg p-4">
  <img src="https://img.freepik.com/free-photo/raw-cross-ingredient-studio-citrus_1172-204.jpg?t=st=1713100621~ex
  p=1713104221~hmac=eaf6c12d419a2e991efc857ca182d9b5e2ba1b2833b63c35ce214fcb9511df7a&w=740" alt="Product 1" className="w-full h-auto rounded-lg mb-2" />
  <div className="text-lg mb-1">Product 1 Name</div>
  <div className="text-gray-500 mb-2">$10</div>
  <button className="bg-blue-500 text-white px-4 py-2 mb-0 rounded-md">Buy</button>
</div>

<div className="flex flex-col items-center border border-black rounded-lg p-4">
  <img src="https://img.freepik.com/free-photo/raw-fresh-texture-vitamin-fruit_1172-220.jpg?t=st=1713101541~exp=1713105141~hmac=308c2d97db27c8824b43274489760aa841b5b5b12b6720577dc51de720e7861b&w=740" alt="Product 1" className="w-full h-auto rounded-lg mb-2" />
  <div className="text-lg mb-1">Product 1 Name</div>
  <div className="text-gray-500 mb-2">$10</div>
  <button className="bg-blue-500 text-white px-4 py-2 mb-0 rounded-md">Buy</button>
</div>
<div className="flex flex-col items-center border border-black rounded-lg p-4">
  <img src="https://img.freepik.com/free-photo/strawberry-berry-levitating-white-background_485709-57.jpg?t=st=1713102552~exp=1713106152~hmac=54eec7d80bea4fba8d60bd2fdecb1f015998606e8258e406af7a534904a4df52&w=740" alt="Product 1" className="w-full h-auto rounded-lg mb-2" />
  <div className="text-lg mb-1">Product 1 Name</div>
  <div className="text-gray-500 mb-2">$10</div>
  <button className="bg-blue-500 text-white px-4 py-2 mb-0 rounded-md">Buy</button>
</div><div className="flex flex-col items-center border border-black rounded-lg p-4">
  <img src="https://img.freepik.com/free-photo/raisins-dried_1368-9147.jpg?t=st=1713102472~exp=1713106072~hmac=4d7c77a33e19b70bf200052d0d44c00ceaa4cd801275aeec30e096b6b720396f&w=740" alt="Product 1" className="w-full h-auto rounded-lg mb-2" />
  <div className="text-lg mb-1">Product 1 Name</div>
  <div className="text-gray-500 mb-2">$10</div>
  <button className="bg-blue-500 text-white px-4 py-2 mb-0 rounded-md">Buy</button>
</div>
           
            {/* Repeat the structure for the remaining products */}
          </div>
        </div>
        
      </div>
      <div className="mt-20">
        {/* Fresh Produce */}
        <div className="mb-16">
        <div className="text-black text-left ml-0 mt-20 p-1 font-poppins relative">
        {/* Gradient overlay */}
        <div className="absolute inset-0 opacity-50 rounded-lg "></div>
        <h2 className="text-3xl font-bold mb-4 relative z-20">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-pink-500">Baked Goods</span>
        </h2>
      </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 ">
            {/* Product 1 */}
            <div className="flex flex-col items-center border border-black rounded-lg p-4">
  <img src="https://img.freepik.com/free-photo/baked-bread-brown-whole-black-tissue-brown_140725-14863.jpg?t=st=1713102059~exp=1713105659~hmac=92dab00ab7be2a053e1e0213aca025d168a75b2ccccb0b9c5efc91785762991f&w=740" alt="Product 1" className="w-full h-auto rounded-lg mb-2" />
  <div className="text-lg mb-1">Product 1 Name</div>
  <div className="text-gray-500 mb-2">$10</div>
  <button className="bg-blue-500 text-white px-4 py-2 mb-0 rounded-md">Buy</button>
</div>

<div className="flex flex-col items-center border border-black rounded-lg p-4">
  <img src="https://img.freepik.com/free-photo/sweet-dessert-pastry-breakfast_23-2147693842.jpg?t=st=1713102079~exp=1713105679~hmac=3c6b84ee1eb242d6ea77f838049a1df607790918c3dc4fb89c3154fe322833b0&w=740" alt="Product 1" className="w-full h-auto rounded-lg mb-2" />
  <div className="text-lg mb-1">Product 1 Name</div>
  <div className="text-gray-500 mb-2">$10</div>
  <button className="bg-blue-500 text-white px-4 py-2 mb-0 rounded-md">Buy</button>
</div>
<div className="flex flex-col items-center border border-black rounded-lg p-4">
  <img src="https://img.freepik.com/free-photo/healthy-sandwich-green-apple-rounds-with-peanut-butter-red-currant-pecan-nuts-rustic-top-view_114579-3862.jpg?t=st=1713102103~exp=1713105703~hmac=afd900c17bc0d8cb052550ccaefad046ddf7ef2c0756f21105172bb3a20924fa&w=740" alt="Product 1" className="w-full h-auto rounded-lg mb-2" />
  <div className="text-lg mb-1">Product 1 Name</div>
  <div className="text-gray-500 mb-2">$10</div>
  <button className="bg-blue-500 text-white px-4 py-2 mb-0 rounded-md">Buy</button>
</div><div className="flex flex-col items-center border border-black rounded-lg p-4">
  <img src="https://img.freepik.com/free-photo/close-up-composition-tasty-croissants_23-2148829549.jpg?t=st=1713102127~exp=1713105727~hmac=92650a76cfdb0539a6ecf520696e89cb90365175ad262c1ccfa88393e75dd8cd&w=740" alt="Product 1" className="w-full h-auto rounded-lg mb-2" />
  <div className="text-lg mb-1">Product 1 Name</div>
  <div className="text-gray-500 mb-2">$10</div>
  <button className="bg-blue-500 text-white px-4 py-2 mb-0 rounded-md">Buy</button>
</div>
           
            {/* Repeat the structure for the remaining products */}
          </div>
        </div>
        
      </div>
      <div className="mt-20">
        {/* Fresh Produce */}
        <div className="mb-16">
        <div className="text-black text-left ml-0 mt-20 p-1 font-poppins relative">
        {/* Gradient overlay */}
        <div className="absolute inset-0 opacity-50 rounded-lg "></div>
        <h2 className="text-3xl font-bold mb-4 relative z-20">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-pink-500">Artisan Crafts</span>
        </h2>
      </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 ">
            {/* Product 1 */}
            <div className="flex flex-col items-center border border-black rounded-lg p-4">
  <img src="https://img.freepik.com/free-photo/arrangement-antiques-market-objects_23-2148950908.jpg?t=st=1713102388~exp=1713105988~hmac=e62001520c19fcebd309f103756e55e1d181826920695e2f204fb36b61854608&w=740" alt="Product 1" className="w-full h-auto rounded-lg mb-2" />
  <div className="text-lg mb-1">Product 1 Name</div>
  <div className="text-gray-500 mb-2">$10</div>
  <button className="bg-blue-500 text-white px-4 py-2 mb-0 rounded-md">Buy</button>
</div>

<div className="flex flex-col items-center border border-black rounded-lg p-4">
  <img src="https://img.freepik.com/free-photo/flat-lay-bamboo-food-steamer_23-2148368692.jpg?t=st=1713102293~exp=1713105893~hmac=b0ecb591b6d7762a33c674663370f2b8dd4db75ff789344bf97fdf5b3f6422e3&w=740" alt="Product 1" className="w-full h-auto rounded-lg mb-2" />
  <div className="text-lg mb-1">Product 1 Name</div>
  <div className="text-gray-500 mb-2">$10</div>
  <button className="bg-blue-500 text-white px-4 py-2 mb-0 rounded-md">Buy</button>
</div>
<div className="flex flex-col items-center border border-black rounded-lg p-4">
  <img src="https://img.freepik.com/free-photo/top-view-tableware-collection_23-2148861776.jpg?t=st=1713102264~exp=1713105864~hmac=b837495a54112170c3e8191eb60cf209bb569600fb7fbdf27e9c9b9d32ef85fb&w=740" alt="Product 1" className="w-full h-auto rounded-lg mb-2" />
  <div className="text-lg mb-1">Product 1 Name</div>
  <div className="text-gray-500 mb-2">$10</div>
  <button className="bg-blue-500 text-white px-4 py-2 mb-0 rounded-md">Buy</button>
</div><div className="flex flex-col items-center border border-black rounded-lg p-4">
  <img src="https://img.freepik.com/free-photo/gardening-concept-with-plants_23-2148000308.jpg?t=st=1713102330~exp=1713105930~hmac=d730f9f1036a0c1a18079350f3900a5ee207c67fa8515e5bf7440718625cefba&w=740" alt="Product 1" className="w-full h-auto rounded-lg mb-2" />
  <div className="text-lg mb-1">Product 1 Name</div>
  <div className="text-gray-500 mb-2">$10</div>
  <button className="bg-blue-500 text-white px-4 py-2 mb-0 rounded-md">Buy</button>
</div>
           
            {/* Repeat the structure for the remaining products */}
          </div>
        </div>

        

        
<hr className="border-gray-300 my-10 border-solid border-t-2" /> {/* Line with increased thickness */}
        
<div className="mt-20 text-center">
  {/* Heading */}
  <h2 className="text-3xl font-bold mb-4 font-poppins">Pre Book Your Products from the Farm</h2>
  
  {/* Paragraph */}
  <p className="text-lg text-gray-600 mb-6">
    Pre-booking your products directly from the farm ensures you get the freshest produce straight from the source. 
    By pre-ordering, you also support local farmers and reduce food waste. 
    Experience the taste of farm-fresh goodness by securing your order today!
  </p>

  {/* Buttons */}
  <div className="flex justify-center">
    <button className="bg-green-500 text-white px-6 py-3 rounded-md mr-4">Contact Us</button>
    <button className="bg-black text-white px-6 py-3 rounded-md">Mail Us</button>
  </div>
</div>
{/* Image Section */}
<div className="bg-black rounded-lg mt-10 shadow-[5px_5px_0px_0px_rgba(109,40,217)] py-12">
  <div className="w-full max-w-screen-lg mx-auto px-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
    {/* Image 1 */}
    <div className="rounded-lg overflow-hidden">
      <img src="https://images.pexels.com/photos/8987743/pexels-photo-8987743.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Image 1" className="w-full h-auto" />
    </div>
    {/* Image 2 */}
    <div className="rounded-lg overflow-hidden">
      <img src="https://images.pexels.com/photos/8608389/pexels-photo-8608389.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Image 2" className="w-full h-auto" />
    </div>
    {/* Image 3 */}
    <div className="rounded-lg overflow-hidden">
      <img src="https://images.pexels.com/photos/6337264/pexels-photo-6337264.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Image 3" className="w-full h-auto" />
    </div>
  </div>
  {/* Text in the center */}
  <div className="text-center mt-6 font-poppins">
  <p className="text-2xl font-bold">
    <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-500">Get directly from the farm</span>
  </p>
  <p className="text-2xl font-bold">
    <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-500">Fresh and Hygienic</span>
  </p>
</div>

</div>



<div className="mt-20 flex justify-center" style={{ backgroundImage: "url('https://img.freepik.com/free-vector/continuous-line-heart-shape-border-with-realistic-paper-heart_333792-28.jpg?t=st=1713103588~exp=1713107188~hmac=ba3d340d19cf4711b334fd6ce4fc7017f5a0f28ef3cd6e3366dbf9556f95ac94&w=1380')", backgroundSize: 'contain', backgroundPosition: 'center' }}>
  {/* Left Section: Why Choose Us */}
  <div className="w-full max-w-screen-lg px-8">
    <h2 className="text-3xl font-bold mb-10 mt-10 font-poppins" style={{ background: '-webkit-linear-gradient(left, #00c6ff, #0072ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Visit Us Today</h2>
    <p className="text-lg text-gray-600 mb-6">
      Ready to experience the magic of [Farmers Market Name]? Plan your visit today and immerse yourself 
      in the sights, sounds, and flavors of our bustling marketplace. Whether you're a seasoned market-goer 
      or a first-time visitor, you're sure to find something delightful around every corner.
    </p>
    <br></br>
    <br></br>
    <br></br>
  </div>
</div>


      </div>
      <br></br>
<br></br>
<hr className="border-gray-300 my-10 border-solid border-t-2" /> {/* Line with increased thickness */}
      <Footer/>
    </div>
  );
};

export default ShoppingPage;