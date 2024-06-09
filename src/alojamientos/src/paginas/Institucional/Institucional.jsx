import React from 'react';
import Header from '../Home/componentes/Header'; 
import SeccionFormBusqueda from '../Institucional/componentes/SeccionFormBusqueda';
import SeccionInstitucional from '../Institucional/componentes/SeccionInstitucional';
import SeccionPorQueElegirnos from '../Institucional/componentes/SeccionPorQueElegirnos';
import NuestroEquipo from '../Institucional/componentes/NuestroEquipo';
import {Footer} from '../Home/componentes/Footer'; 

function Institucional() {
  return (
    <div className="institucional">
      <Header />
      <SeccionFormBusqueda />
      <SeccionInstitucional />
      <SeccionPorQueElegirnos />
      <NuestroEquipo />
      <Footer />
    </div>
  );
}

export default Institucional;
