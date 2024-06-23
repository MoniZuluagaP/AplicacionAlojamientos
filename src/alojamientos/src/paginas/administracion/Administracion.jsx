import React, { useState } from 'react';
import AlojamientosHome from '../administracion/alojamientos/AlojamientosHome';
import TipoAlojamientoHome from '../administracion/tipo alojamiento/TipoAlojamientoHome';
import Portada from './Portada';
import Footeradmin from './FooterAdmin';
import ServicioHome from '../administracion/servicios/ServicioHome';
<<<<<<< HEAD
import AlojamientoServiciosHome from '../administracion/alojamientosServicios/AlojamientoServiciosHome';
=======
import ImagenesHome from '../administracion/imagenes/ImagenesHome';
>>>>>>> a826486fde2d39fceffed43e6a3e8eeb2e98de18
import './Admin.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBed, faImages, faConciergeBell, faHomeAlt, faHomeUser, faHotel } from '@fortawesome/free-solid-svg-icons';
import Formulario from '../administracion/imagenesAlojamientos/imagenAlojHome';


const Administracion = () => {
  const [section, setSection] = useState('administracion'); 
  const [transition, setTransition] = useState(false);  

  // Función para cambiar a otra sección
  const handleClick = (sectionName) => {
    setTransition(true);  
    setTimeout(() => {
      setSection(sectionName); 
      setTransition(false); 
    }, 500);
  };


  // Función para volver a la sección de administración principal
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
      <Portada />
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
              <FontAwesomeIcon icon={faHotel} /> Tipo Alojamiento
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
        {section === 'servicios' && <ServicioHome/>}
<<<<<<< HEAD
        {section === 'alojamiento servicios' && <AlojamientoServiciosHome/>}
=======
<<<<<<< HEAD
        {section === 'imagenes' && <ImagenesHome/>}

=======
        {section === 'imagenes' && <Formulario/>}
>>>>>>> f402f80087dc94a2764ab1164a3d69b4d2a31d0e
>>>>>>> a826486fde2d39fceffed43e6a3e8eeb2e98de18


      </div>
      <Footeradmin />
    </div>
  );
};

export default Administracion;