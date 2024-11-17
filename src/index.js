import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Router
import App from './App';
import Home from './Home'; // Import the Home page component
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} /> {/* Login page route */}
      <Route path="/home" element={<Home />} /> {/* Home page route */}
    </Routes>
  </Router>
);
