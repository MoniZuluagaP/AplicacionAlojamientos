import React from 'react';
import './BotonBusqueda.css';

export function BotonBusqueda({ className, value = "Buscar", ...props }) {
    return (
        <input 
            type="submit" 
            className={className} 
            value={value} 
            {...props} 
        />
    );
}
