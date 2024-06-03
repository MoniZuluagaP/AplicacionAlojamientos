import React, { useState } from 'react';
import CrearAlojamiento from '../administracion/componentes/CrearAlojamiento';
import ActualizarAlojamiento from '../administracion/componentes/ActualizarAlojamiento';
import EliminarAlojamiento from '../administracion/componentes/EliminarAlojamiento';
import ListarAlojamiento from '../administracion/componentes/ListarAlojamiento';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Administracion = () => {
  const [section, setSection] = useState('listar');

  return (
    <div>
      <ToastContainer />
      <h1>Administración de Alojamientos</h1>
      <div>
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
