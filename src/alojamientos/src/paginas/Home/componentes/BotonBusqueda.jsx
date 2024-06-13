import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/BotonBusqueda.css';

export function BotonBusqueda({ className, value = "Buscar", ...props }) {
    return (
        <input 
            type="submit" 
            className={`btn btn-buscar ${className}`} 
            value={value} 
            {...props} 
        />
    );
}
