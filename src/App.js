import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Blogs from './components/Blogs';
import Offer from './components/Offer';
import Car from './components/Car';
import './App.css';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/offer" element={<Offer />} />
        <Route path="/cars" element={<Car />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
