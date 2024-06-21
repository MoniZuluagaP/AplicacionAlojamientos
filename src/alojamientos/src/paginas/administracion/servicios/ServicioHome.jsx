import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEdit, faTrash, faSearch, faBed} from '@fortawesome/free-solid-svg-icons';
import CrearServicio from './CrearServicio';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ServicioHome = () => {
  const [section, setSection] = useState(null);
  const [transition, setTransition] = useState(false);

  
  const handleClick = (sectionName) => {
    setTransition(true);
    setTimeout(() => {
      setSection(sectionName);
      setTransition(false);
    }, 500);
  };

  return (
    <div className={`admin-container ${section ? 'hidden' : ''}`}>
      <ToastContainer />
      <h1><FontAwesomeIcon icon={faBed} /> Servicios</h1>
      <div className={`menu-container ${section ? 'hidden' : ''}`}>
        <button className={section === 'crear' ? 'active' : ''} onClick={() => handleClick('crear')}>
          <FontAwesomeIcon icon={faPlus} /> Crear Servicios
        </button>
      </div>
      <div className={`content-section ${transition ? 'enter' : 'enter-active'}`}>
        {section === 'crear' && <CrearServicio />}
      </div>
    </div>
  );
};

export default ServicioHome;