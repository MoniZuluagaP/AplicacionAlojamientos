import React from 'react';
import Header from './Header'; 
import SeccionFormBusqueda from './SeccionFormBusqueda';
import SeccionInstitucional from './SeccionInstitucional';
import SeccionPorQueElegirnos from './SeccionPorQueElegirnos';
import NuestroEquipo from './NuestroEquipo';
import {Footer} from './Footer'; 

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
