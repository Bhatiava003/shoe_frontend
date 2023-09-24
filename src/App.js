import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './navbar';
import Home from './Home';
import Shoes from './shoes';
import Cart from './cart';





function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/shoes" element={<Shoes />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;