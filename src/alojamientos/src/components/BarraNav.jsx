import React from 'react'
import {LogoHouse} from "./LogoHouse";
import './BarraNav.css'

export function BarraNav() {
    return (
        <nav className="barraNavegacion">
            <ul>
                <li><a href="#">HOME</a></li>
                <li><a href="#">INSTITUCIONAL</a></li>
                <li><a href="#">FORMULARIO</a></li>
                <li><a href="#">CONTACTANOS</a></li>
                <li><a href="#">REGISTRO</a></li>
                <LogoHouse src = '../assets/casalogo.png ' ClassName = 'logo' alt = 'Logo empresa HOUSE'/>
            </ul>
        </nav>)
}