import React, { useState, useEffect } from 'react';
import TopBar from '../Components/TopBar';
import { FaCalendarAlt, FaClock } from 'react-icons/fa';
import Footer from '../Components/Footer';

const HomePage = () => {
    const [activated, setActivated] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    // Function to handle scroll event
    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;

        // Set visibility based on scroll position and direction
        setVisible(
            (prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) || currentScrollPos < 10
        );

        // Set previous scroll position
        setPrevScrollPos(currentScrollPos);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos, visible]);

    const handleClick = () => {
        setActivated(!activated);
    };

    return (
        <div>
            {/* TopBar with conditional visibility */}
            <TopBar visible={visible} />
            <div className="relative">
        {/* Black shade with opacity */}
        <div className="absolute top-0 left-0 w-full h-full rounded-lg bg-black opacity-40"></div>
        {/* Text heading and paragraph */}
        <div className="absolute top-0 text-left ml-0 text-white p-8 font-poppins">
          <h1 className="text-4xl font-bold mb-4">
            Welcome to The Farmery, Where Fresh Finds Meet Community Spirit!
          </h1>
          <p className="text-base leading-relaxed max-w-xl">
            Step into a world where the vibrant colors of locally-sourced produce, the aroma of freshly baked goods, 
            and the creativity of artisan crafts blend seamlessly. At The Farmery, we're more than just a market – we're a celebration of local flavor, craftsmanship, and community.
          </p>
        </div>
        {/* Rounded image covering the full width */}
        <img
          src="https://img.freepik.com/free-photo/refreshment-from-as-sprinklers-arc-water-geometric-greenery-fields_91128-4673.jpg?t=st=1713067532~exp=1713071132~hmac=5e0ac471f580077ac0f366b5bd7b47d4516aeb3e0096336dc448f301b6ed8b0a&w=1380"
          alt="Hero Image"
          className="w-full h-80 mt-20 object-cover rounded-lg"
        />
      </div>

      {/* Six text elements in individual black rounded boxes */}
      <div className="flex justify-center mt-8">
        <div className="bg-black rounded-full px-4 py-2 mx-2">
          <span className="text-white">Fresh Harvests</span>
        </div>
        <div className="bg-black rounded-full px-4 py-2 mx-2">
          <span className="text-white">Baker's Bounty</span>
        </div>
        <div className="bg-black rounded-full px-4 py-2 mx-2">
          <span className="text-white">Artisan Treasures</span>
        </div>
        <div className="bg-black rounded-full px-4 py-2 mx-2">
          <span className="text-white">Gourmet Finds</span>
        </div>
        <div className="bg-black rounded-full px-4 py-2 mx-2">
          <span className="text-white">Earth-Friendly Fare</span>
        </div>
        <div className="bg-black rounded-full px-4 py-2 mx-2">
          <span className="text-white">Flavorful Creations</span>
        </div>
      </div>


      {/* Events Near You section */}
      <div className="text-black text-left ml-0 mt-20 p-1 font-poppins">
        <h2 className="text-3xl font-bold mb-4">Events Near You</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Event 1 */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <img src="https://img.freepik.com/free-photo/group-colombian-male-friends-spending-time-together-having-fun_23-2151356403.jpg?t=st=1713068638~exp=1713072238~hmac=1a5c77d9b42debc71c389c74ce16a99e26a6426360fbf1378b7e676a98a433f4&w=996" alt="Event" className="w-full h-40 object-cover rounded-t-lg mb-4" />
            <h3 className="text-xl font-semibold mb-2">Farm-to-Table Cooking Workshop</h3>
            <div className="flex items-center mb-2">
              <FaCalendarAlt className="mr-2" />
              <p>Saturday, May 15th, 2024</p>
            </div>
            <div className="flex items-center mb-2">
              <FaClock className="mr-2" />
              <p>10:00 AM - 12:00 PM</p>
            </div>
            <p><strong>Location:</strong> Farmer's Kitchen Culinary Studio</p>
            <p className='mt-2'><strong>Description:</strong> Join us for a hands-on cooking workshop led by local chefs, where you'll learn how to create delicious dishes</p>
            <button className="bg-black hover:bg-black-100 text-white font-bold py-2 px-4 rounded mt-4">Book Now</button>
          </div>
          {/* Event 2 */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <img src="https://img.freepik.com/free-photo/person-browsing-through-items-yard-sale-looking-bargains_23-2151216788.jpg?t=st=1713068728~exp=1713072328~hmac=f8e00772e7e4a6cad7f81b85f83f8bf7768d0f76652faa5ba6bfe1da332743d3&w=900" alt="Event" className="w-full h-40 object-cover rounded-t-lg mb-4" />
            <h3 className="text-xl font-semibold mb-2">Artisan Market Showcase</h3>
            <div className="flex items-center mb-2">
              <FaCalendarAlt className="mr-2" />
              <p>Sunday, June 2nd, 2024</p>
            </div>
            <div className="flex items-center mb-2">
              <FaClock className="mr-2" />
              <p>11:00 AM - 3:00 PM</p>
            </div>
            <p><strong>Location:</strong> Downtown Art Gallery</p>
            <p className='mt-2'><strong>Description:</strong> Don't miss this special showcase featuring the work of talented local artisans and craftsmen.
            </p>
            <button className="bg-black hover:bg-black-100 text-white font-bold py-2 px-4 rounded mt-4">Book Now</button>
          </div>
          {/* Event 3 */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <img src="https://img.freepik.com/premium-photo/environment-celebrating-world-tourism-day_931878-276745.jpg?w=1060" alt="Event" className="w-full h-40 object-cover rounded-t-lg mb-4" />
            <h3 className="text-xl font-semibold mb-2">Live Music at the Market</h3>
            <div className="flex items-center mb-2">
              <FaCalendarAlt className="mr-2" />
              <p>Saturday, July 20th, 2024</p>
            </div>
            <div className="flex items-center mb-2">
              <FaClock className="mr-2" />
              <p>5:00 PM - 7:00 PM</p>
            </div>
            <p><strong>Location:</strong> Market Square Pavilion</p>
            <p className='mt-2'><strong>Description:</strong> Get ready to tap your feet and groove to the rhythm of live music at the farmers market!
          </p>
            <button className="bg-black hover:bg-black-100 text-white font-bold py-2 px-4 rounded mt-4">Book Now</button>
          </div>
          {/* Event 4 */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <img src="https://img.freepik.com/free-photo/lohri-punjabi-folk-festival-with-people_23-2151020236.jpg?t=st=1713068943~exp=1713072543~hmac=f0acea639e18c2edc28a2cd22736ce8708560076cd02233131c58d9777fa2f87&w=1060" alt="Event" className="w-full h-40 object-cover rounded-t-lg mb-4" />
            <h3 className="text-xl font-semibold mb-2">Seasonal Harvest Festival</h3>
            <div className="flex items-center mb-2">
              <FaCalendarAlt className="mr-2" />
              <p>Saturday, September 14th, 2024</p>
            </div>
            <div className="flex items-center mb-2">
              <FaClock className="mr-2" />
              <p>12:00 PM - 4:00 PM</p>
            </div>
            <p><strong>Location:</strong> Green Valley Farm</p>
            <p className='mt-2'><strong>Description:</strong> Celebrate the bountiful harvest season with us at our annual Harvest Festival! Join in the fun with family-friendly activities.</p>
            <button className="bg-black hover:bg-black-100 text-white font-bold py-2 px-4 rounded mt-4">Book Now</button>
          </div>
          {/* Event 5 */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <img src="https://img.freepik.com/free-photo/people-celebrating-ramadan-together_23-2151404387.jpg?t=st=1713069153~exp=1713072753~hmac=7490c584aee1c47b0c480cecde446553d2552093f683145575f0b5b947f94acb&w=996" alt="Event" className="w-full h-40 object-cover rounded-t-lg mb-4" />
            <h3 className="text-xl font-semibold mb-2">Healthy Eating Seminar</h3>
            <div className="flex items-center mb-2">
              <FaCalendarAlt className="mr-2" />
              <p>Thursday, October 10th, 2024</p>
            </div>
            <div className="flex items-center mb-2">
              <FaClock className="mr-2" />
              <p>6:30 PM - 8:30 PM</p>
            </div>
            <p><strong>Location:</strong> Community Center Auditorium</p>
            <p className='mt-2'><strong>Description:</strong> Learn how to incorporate more fresh, nutritious ingredients into your diet at our Healthy Eating Seminar. 
           </p>
            <button className="bg-black hover:bg-black-100 text-white font-bold py-2 px-4 rounded mt-4">Book Now</button>
          </div>
          {/* Event 6 */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <img src="https://img.freepik.com/free-photo/medium-shot-old-woman-celebrating-tamil-new-year_23-2151210704.jpg?t=st=1713069216~exp=1713072816~hmac=aa6c659bf0e0b1ba5da8cf051dd8b6bf6b7dd6a863754dc84f070c11ca4a0f66&w=1060" alt="Event" className="w-full h-40 object-cover rounded-t-lg mb-4" />
            <h3 className="text-xl font-semibold mb-2">Holiday Market Extravaganza</h3>
            <div className="flex items-center mb-2">
              <FaCalendarAlt className="mr-2" />
              <p>Saturday, December 7th, 2024</p>
            </div>
            <div className="flex items-center mb-2">
              <FaClock className="mr-2" />
              <p>9:00 AM - 5:00 PM</p>
            </div>
            <p><strong>Location:</strong> Market Plaza</p>
            <p className='mt-2'><strong>Description:</strong> Get into the holiday spirit at our festive Holiday Market Extravaganza! Shop 
            for gifts, decorations and gourmet.
           </p>
            <button className="bg-black hover:bg-black-100 text-white font-bold py-2 px-4 rounded mt-4">Book Now</button>
          </div>
        </div>
      </div>
      <div className="text-black text-left ml-0 mt-20 p-1 font-poppins relative">

   {/* Gradient overlay */}
                <div className="absolute inset-0  opacity-50 rounded-lg"></div>
                <h2 className="text-3xl font-bold mb-4 relative z-10">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-pink-500">Join Meetup</span>
                </h2>
                <p className="text-base leading-relaxed max-w-xl mb-4">
                    People use Meetup to meet new people, learn new things, find support, get out of their comfort zones, and pursue their passions, together. Membership is free.
                </p>
                <button className={`bg-gradient-to-r from-${activated ? 'green-500' : 'blue-500'} to-${activated ? 'green-600' : 'blue-600'} hover:bg-black-100 text-white font-bold py-2 px-4 rounded`} onClick={handleClick}>
                    {activated ? 'Activated' : 'Activate'}
                </button>
            </div>

       {/* Popular cities on Meetup section */}
<div className="relative text-black text-center mt-10 p-1 font-poppins" style={{ height: "400px" }}>
    {/* Background image */}
    <div className="absolute inset-0 z-0 bg-cover bg-center rounded-lg" 
    style={{ backgroundImage: "url('https://img.freepik.com/free-vector/hand-drawn-lima-skyline-illustration_23-2150006330.jpg?t=st=1713071995~exp=1713075595~hmac=f3c31006f2b655b5f452514fe0d7d3f0db088f6141536e9ed87f115ca39ef5a1&w=1380" }}></div>
    {/* Content */}
    <div className="relative z-10" style={{ marginTop: "100px" }}>
        <h2 className="text-3xl font-bold mb-4">Popular Cities on Meetup</h2>
        <div className="flex flex-wrap justify-center items-center">
            <div className="bg-gray-100 rounded-lg p-4 m-4">
                <span className="text-lg font-semibold">Mumbai</span>
            </div>
            <div className="bg-gray-100 rounded-lg p-4 m-4">
                <span className="text-lg font-semibold">Delhi</span>
            </div>
            <div className="bg-gray-100 rounded-lg p-4 m-4">
                <span className="text-lg font-semibold">Bangalore</span>
            </div>
            <div className="bg-gray-100 rounded-lg p-4 m-4">
                <span className="text-lg font-semibold">Chennai</span>
            </div>
            <div className="bg-gray-100 rounded-lg p-4 m-4">
                <span className="text-lg font-semibold">Kolkata</span>
            </div>
            <div className="bg-gray-100 rounded-lg p-4 m-4">
                <span className="text-lg font-semibold">Hyderabad</span>
            </div>
            {/* Add more cities as needed */}
        </div>
        {/* View more cities button */}
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4">View More Cities</button>
    </div>
</div>



{/* How Meetup works section */}
<div className="text-black text-left ml-0 mt-20 p-1 font-poppins relative">
    {/* Gradient overlay */}
    <div className="absolute inset-0  opacity-50 rounded-lg "></div>
    <h2 className="text-3xl font-bold mb-4 relative z-10">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-pink-500">How Meetup Works</span>
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Discover events and groups */}
        <div className="bg-white rounded-lg shadow-md p-4">
            <h3 className="text-xl font-semibold mb-2">Discover events and groups</h3>
            <p>See who's hosting local events for all the things you love.</p>
            <button className="bg-black hover:bg-black-100 text-white font-bold py-2 px-4 rounded mt-4">Search Events</button>
        </div>
        {/* Start a group to host events */}
        <div className="bg-white rounded-lg shadow-md p-4">
            <h3 className="text-xl font-semibold mb-2">Start a group to host events</h3>
            <p>Create your own Meetup group, and draw from a community of millions.</p>
            <button className="bg-black hover:bg-black-100 text-white font-bold py-2 px-4 rounded mt-4">Start a Group</button>
        </div>
    </div>
</div>
 
 {/* F{/* Friendships are made on Meetup section */}
<div className="text-black text-left ml-0 mt-20 p-1 font-poppins">
    <h2 className="text-3xl font-bold mb-4">Friendships are made on Meetup</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-white rounded-lg shadow-md p-4">
            <img src="https://img.freepik.com/free-photo/realistic-scene-from-neighborhood-yard-sale-miscellaneous-items_23-2151238341.jpg?t=st=1713071260~exp=1713074860~hmac=dd7f80506e6e890ddcc6306578a5f29f26d09eee1fa7166f45bf0d8f5fbcc244&w=996" alt="Image" className="w-full h-40 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold mb-2">I Used Meetup to Make Friends at Brunch</h3>
            <p>New Jersey-based writer and college student Brianna Stryker wanted to meet friends in her hometown.</p>
            <a href="#" className="text-blue-500 hover:underline">Read more</a>
        </div>
        {/* Card 2 */}
        <div className="bg-white rounded-lg shadow-md p-4">
            <img src="https://img.freepik.com/free-photo/group-colombian-male-friends-spending-time-together-having-fun_23-2151356424.jpg?t=st=1713071296~exp=1713074896~hmac=b293e5f308ac8ec4c7e85f26ffcd4d817d80f4337e8dcbd0b09e9ad883c3c09a&w=996" alt="Image" className="w-full h-40 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold mb-2">How to Turn Casual Connections into Close Friendships</h3>
            <p>It’s proven that close friendships are harder to make as an adult. But don’t sweat it: here’s what you can do to simplify the process.</p>
            <a href="#" className="text-blue-500 hover:underline">Read more</a>
        </div>
        {/* Card 3 */}
        <div className="bg-white rounded-lg shadow-md p-4">
            <img src="https://img.freepik.com/free-photo/view-diverse-adolescents-practicing-health-wellness-activities-themselves-their-community_23-2151416245.jpg?t=st=1713071327~exp=1713074927~hmac=0997e8573c99599a1fa0c5e569ea946e0a8ab16c577c7249e76747cedd3e039a&w=1060" alt="Image" className="w-full h-40 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold mb-2">Do You Have the “Right” Number of Friends?</h3>
            <p>Studies from around the world have tried to help people answer this question. Learn about the three tiers of friendship and how to fulfill them.</p>
            <a href="#" className="text-blue-500 hover:underline">Read more</a>
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

export default HomePage;