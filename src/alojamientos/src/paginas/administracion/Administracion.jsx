import React, { useState } from 'react';
import AlojamientosHome from '../administracion/alojamientos/AlojamientosHome';
import TipoAlojamientoHome from '../administracion/tipo alojamiento/TipoAlojamientoHome';
import './Admin.css';
import Header from '../Home/componentes/Header';
import { PFormBusqueda } from '../Home/componentes/PFormBusqueda';
import Footer from '../Home/componentes/Footer'; // Asumiendo que ya tienes un componente Footer

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBed, faImages, faConciergeBell } from '@fortawesome/free-solid-svg-icons';

const Administracion = () => {
  const [section, setSection] = useState('administracion');
  const [transition, setTransition] = useState(false);

  const handleClick = (sectionName) => {
    setTransition(true);
    setTimeout(() => {
      setSection(sectionName);
      setTransition(false);
    }, 500);
  };

  const handleBackToAdmin = () => {
    setTransition(true);
    setTimeout(() => {
      setSection('administracion');
      setTransition(false);
    }, 500);
  };

  return (
    <div className="admin-container">
      <ToastContainer />
      <Header />
      <PFormBusqueda />
      <h1>Administración</h1>
      <div className="menu-container">
        {section !== 'administracion' && (
          <button className="toggle-button" onClick={handleBackToAdmin}>
            <FontAwesomeIcon icon={faHome} /> Administración
          </button>
        )}
        {section === 'administracion' && (
          <>
            <button className={section === 'administracion' ? 'active' : ''} onClick={() => handleClick('administracion')}>
              <FontAwesomeIcon icon={faHome} /> Administración
            </button>
            <button className={section === 'alojamientos' ? 'active' : ''} onClick={() => handleClick('alojamientos')}>
              <FontAwesomeIcon icon={faBed} /> Alojamientos
            </button>
            <button className={section === 'tipo alojamiento' ? 'active' : ''} onClick={() => handleClick('tipo alojamiento')}>
              <FontAwesomeIcon icon={faImages} /> Tipo Alojamiento
            </button>
            <button className={section === 'imagenes' ? 'active' : ''} onClick={() => handleClick('imagenes')}>
              <FontAwesomeIcon icon={faImages} /> Imágenes
            </button>
            <button className={section === 'servicios' ? 'active' : ''} onClick={() => handleClick('servicios')}>
              <FontAwesomeIcon icon={faConciergeBell} /> Servicios
            </button>
            <button className={section === 'alojamiento servicios' ? 'active' : ''} onClick={() => handleClick('alojamiento servicios')}>
              <FontAwesomeIcon icon={faConciergeBell} /> Alojamientos Servicios
            </button>
          </>
        )}
      </div>
      <div className={`content-section ${transition ? 'enter' : 'enter-active'}`}>
        {section === 'alojamientos' && <AlojamientosHome />}
        {section === 'tipo alojamiento' && <TipoAlojamientoHome />}
      </div>
      <Footer />
    </div>
  );
};

export default Administracion;
