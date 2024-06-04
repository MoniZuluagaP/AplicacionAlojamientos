import React from 'react';
import { CardCategorias } from './CardCategorias';
import './SeccionTiposA.css';

export function SeccionTiposA({ className }) {
    return (
        <div className={className}>
            <CardCategorias key="1" nombre="Lofts" />
            <CardCategorias key="2" nombre="Cabañas" />
            <CardCategorias key="3" nombre="Glampings" />
            <CardCategorias key="4" nombre="Casas" />
            <CardCategorias key="5" nombre="Hotel Room" />
        </div>
    );
}
