import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

// Pages
import Home from './pages/Home';

// This small component fixes the "Stay at bottom" bug when changing pages
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Main Home Page */}
        <Route path="/" element={<Home />} />

        {/* You can add these routes as you finish the other pages */}
        {/* <Route path="/services" element={<Services />} /> */}
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
        
        {/* 404 Redirect - Optional but professional */}
        <Route path="*" element={<Home />} /> 
      </Routes>
    </Router>
  );
};

export default App;