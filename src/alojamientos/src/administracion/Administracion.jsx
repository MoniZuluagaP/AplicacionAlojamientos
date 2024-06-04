import React, { useState } from 'react';
import CrearAlojamiento from './componentes/CrearAlojamiento';
import ActualizarAlojamiento from './componentes/ActualizarAlojamiento';
import EliminarAlojamiento from './componentes/EliminarAlojamiento';
import ListarAlojamiento from './componentes/ListarAlojamiento';
import './Admin.css';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Administracion = () => {
  const [section, setSection] = useState(null); // Inicialmente null para no mostrar ningún componente

  return (
    <div>
      <ToastContainer />
      <h1>Administración de Alojamientos</h1>
      <div className="menu-container">
        <button onClick={() => setSection('crear')}>Crear Alojamiento</button>
        <button onClick={() => setSection('actualizar')}>Actualizar Alojamiento</button>
        <button onClick={() => setSection('eliminar')}>Eliminar Alojamiento</button>
        <button onClick={() => setSection('listar')}>Listar Alojamientos</button>
      </div>
      {section === 'crear' && <CrearAlojamiento />}
      {section === 'actualizar' && <ActualizarAlojamiento />}
      {section === 'eliminar' && <EliminarAlojamiento />}
      {section === 'listar' && <ListarAlojamiento />}
    </div>
  );
};

export default Administracion;
