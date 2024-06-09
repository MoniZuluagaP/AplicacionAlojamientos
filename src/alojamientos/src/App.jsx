import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Home} from './components/Home';
import Institucional from './components/Institucional';
import Administracion from './administracion/Administracion';
import Contactanos from './components/Contactanos';

import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/institucional" element={<Institucional />} />
          <Route path="/administracion" element={<Administracion />} />
          <Route path="/administracion" element={<Administracion />} />
          <Route path="/Contactanos" element={<Contactanos />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
