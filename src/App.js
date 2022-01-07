import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ItemDetail from './components/ItemDetail/ItemDetail';
import Cart from './components/Cart/Cart.js';
import { CartProvider } from './context/CartContext';

const App = () => {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/ourHistory" element={<h1>Nuestra historia</h1>} />
            <Route path="/productsAndServices" element={<ItemListContainer />} />
            <Route
              path="/productsAndServices/:productsOrServices"
              element={<ItemListContainer />}
            />
            <Route path="/products/:id" element={<ItemDetail />} />
            <Route path="/socialMedia" element={<h1>Redes</h1>} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/" element={<ItemListContainer />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;
