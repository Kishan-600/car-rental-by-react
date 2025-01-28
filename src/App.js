import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Blogs from './components/Blogs';
import Offer from './components/Offer';
import Car from './components/Car';
import Shops from './components/Shops';
import { CartProvider } from './context/CartContext'; // Import CartProvider
import './App.css';

function App() {
  return (
    <CartProvider> {/* Wrap the app with CartProvider */}
      <Router>
        <div className="main-content">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/offer" element={<Offer />} />
            <Route path="/cars" element={<Car />} />
            <Route path="/shops" element={<Shops />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;