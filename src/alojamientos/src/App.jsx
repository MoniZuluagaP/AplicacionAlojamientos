import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Home} from '../src/paginas/Home/Home';
import Institucional from '../src/paginas/Institucional/Institucional';
import Administracion from '../src/paginas/administracion/Administracion';
import Contactanos from '../src/paginas/Contactanos/Contactanos';

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
