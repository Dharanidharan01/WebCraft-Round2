// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import TopBar from './Components/TopBar';
import Footer from './Components/Footer';
import HomePage from './Pages/HomePage';
import ShoppingPage from './Pages/ShoppingPage';

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
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
