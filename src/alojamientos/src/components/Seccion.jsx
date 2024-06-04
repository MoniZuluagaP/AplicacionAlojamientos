import React from 'react';
import './Seccion.css';
import SeccionDestacadas from './SeccionDestacadas';

export function Seccion({ className, nombre }) {
    return (
        <section className={className}>
            <h3 className="tituloSeccion">{nombre}</h3>
            {/* <SeccionDestacadas /> */}
        </section>
    );
}
