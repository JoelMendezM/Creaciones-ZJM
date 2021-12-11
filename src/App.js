import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.js';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ItemDetail from './components/ItemDetail/ItemDetail';

const App = () => {

  return (
    <Router>    
      <div className="App">
        <NavBar />
        <Routes>

          <Route path="/ourHistory" element={<h1>Nuestra historia</h1>}/>
          <Route path="/products" element={<ItemListContainer/>}/>
          <Route path="/products/:type" element={<ItemDetail/>}/>
          <Route path="/socialMedia" element={<h1>Redes</h1>}/>
          <Route path="/" element={<h1>INICIO</h1>}/>
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
