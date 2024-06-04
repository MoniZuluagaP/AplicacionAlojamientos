import React from 'react';
import'./SeccionFormBusqueda.css';
import casaPrincipal from '../assets/casaPortada2.png'


function SeccionFormBusqueda() {
  return (
    <div className="seccion-form-busqueda">
      <button className="boton-alquileres-temporales">Ver alquileres temporales</button>
      <h1>VACACIONES PERFECTAS <br/><strong className="textoResaltado">EN EL LUGAR PERFECTO</strong></h1>
            <div id="casaPortada">
                <img src={casaPrincipal} alt="Casa de portada" />
            </div>
        </div>
  );
}

export default SeccionFormBusqueda;
