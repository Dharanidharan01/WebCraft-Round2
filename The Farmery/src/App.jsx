// App.js
import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import './App.css';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        {/* Add more routes as needed */}
      </Switch>
    </Router>
  );
};

export default App;
