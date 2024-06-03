import React from 'react';
// import {LogoHouse} from "./LogoHouse";
import './BarraNav.css';
import logo from '../assets/casalogo.png'

export function BarraNav() {
    return (
        <nav className="barraNavegacion">
            <ul>
                <img src={logo} className='logoBarra' alt='Logo empresa HOUSE'/>
                <li><a href="#">HOME</a></li>
                <li><a href="#">INSTITUCIONAL</a></li>
                <li><a href="#">FORMULARIO</a></li>
                <li><a href="#">CONTACTANOS</a></li>
                <li><a href="#">REGISTRO</a></li>

            </ul>
        </nav>)
}