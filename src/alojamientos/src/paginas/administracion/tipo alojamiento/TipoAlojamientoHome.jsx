import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import AdminTipoAlojamiento from './componentes/AdminTipoAlojamiento';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AlojamientosHome = () => {
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
      <h1>Tipo Alojamientos</h1>
      <div className={`menu-container ${section ? 'hidden' : ''}`}>
        <button onClick={() => handleClick('tipo')}>
          <FontAwesomeIcon icon={faCog} style={{ marginRight: '5px' }} />
          Administrar Tipo de alojamiento
        </button>
      </div>
      <div className={`content-section ${transition ? 'enter' : 'enter-active'}`}>
        {section === 'tipo' && <AdminTipoAlojamiento />}
      </div>
    </div>
  );
};

export default AlojamientosHome;
