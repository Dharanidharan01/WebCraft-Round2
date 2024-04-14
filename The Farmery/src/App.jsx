// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import TopBar from './Components/TopBar';
import Footer from './Components/Footer';
import HomePage from './Pages/HomePage';
import ShoppingPage from './Pages/ShoppingPage';
import ContactUsPage from './Pages/ContactUsPage';
import EventShowcase from './Pages/EventShowcase';
import BookingConfirmationPopup from './Components/BookingConfirmationPopup';
import VendorsShowcasePage from './Pages/VendorsShowcasePage';

import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="Topbar" element={<TopBar />} />
        <Route path="Footer" element={<Footer />} />
        <Route path="HomePage" element={<HomePage />} />
        <Route path="ShoppingPage" element={<ShoppingPage />} />
        <Route path="EventShowcase" element={<EventShowcase />} />
        <Route path="ContactUsPage" element={<ContactUsPage />} />
        <Route path="BookingConfirmationPopup" element={<BookingConfirmationPopup />} />
        <Route path="VendorsShowcasePage" element={<VendorsShowcasePage />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
