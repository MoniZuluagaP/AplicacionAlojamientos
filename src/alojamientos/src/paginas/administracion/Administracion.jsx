import React, { useState } from 'react';
import AlojamientosHome from '../administracion/alojamientos/AlojamientosHome';
import './Admin.css';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Administracion = () => {
  const [section, setSection] = useState('');

  const handleClick = (sectionName) => {
    setSection(sectionName);
  };

  return (
    <div>
      <ToastContainer />
      <h1>Administración</h1>
      <div className="menu-container">
        <button onClick={() => handleClick('administracion')}>Administracion</button>
        <button onClick={() => handleClick('alojamientos')}>Alojamientos</button>
        <button onClick={() => handleClick('imagenes')}>Imagenes</button>
        <button onClick={() => handleClick('servicios')}>Servicios</button>
        <button onClick={() => handleClick('alojamiento servicios')}>AlojamientosServicios</button>
      </div>
      {section === 'alojamientos' && <AlojamientosHome />}
    </div>
  );
};

export default Administracion;
