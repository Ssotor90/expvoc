// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Ipv from './pages/Ipv';
import Hexaco from './pages/Hexaco';
import './index.css'
import LandingPage from './pages/LandingPage';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/ipv" element={<Ipv />} />
          <Route path="/hexaco" element={<Hexaco />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
