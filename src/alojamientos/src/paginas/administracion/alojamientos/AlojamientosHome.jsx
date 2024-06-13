import React, { useState } from 'react';
import CrearAlojamiento from './componentes/CrearAlojamiento';
import ActualizarAlojamiento from './componentes/ActualizarAlojamiento';
import EliminarAlojamiento from './componentes/EliminarAlojamiento';
import BuscarAlojamiento from './componentes/BuscarAlojamiento';
import '../Admin.css';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AlojamientosHome = () => {
  const [section, setSection] = useState(null);

  return (
    <div>
      <ToastContainer />
      <h1>Alojamientos</h1>
      <div className="menu-container">
        <button onClick={() => setSection('crear')}>Crear Alojamiento</button>
        <button onClick={() => setSection('actualizar')}>Actualizar Alojamiento</button>
        <button onClick={() => setSection('eliminar')}>Eliminar Alojamiento</button>
        <button onClick={() => setSection('buscar')}>Buscar Alojamiento</button>
      </div>
      {section === 'crear' && <CrearAlojamiento />}
      {section === 'actualizar' && <ActualizarAlojamiento />}
      {section === 'eliminar' && <EliminarAlojamiento />}
      {section === 'buscar' && <BuscarAlojamiento />}
    </div>
  );
};

export default AlojamientosHome;
