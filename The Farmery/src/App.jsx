// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import TopBar from './Components/TopBar';
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="Topbar" element={<TopBar />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
