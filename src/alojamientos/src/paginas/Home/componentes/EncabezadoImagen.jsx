import React from 'react';
import casaPrincipal from '../../assets/casaPortada2.png';
import '../css/EncabezadoImagen.css';

function EncabezadoImagen() {
    return (
        <div>
            <h1 className="tituloPrincipal">VACACIONES PERFECTAS <br/><strong className="textoResaltado">EN EL LUGAR PERFECTO</strong></h1>
            <div id="casaPortada">
                <img src={casaPrincipal} alt="Casa de portada" />
            </div>
        </div>
    );
}

export default EncabezadoImagen;
