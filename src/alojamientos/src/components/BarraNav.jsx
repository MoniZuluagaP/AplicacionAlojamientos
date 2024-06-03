import React from 'react';
import { Link } from 'react-router-dom';
import './BarraNav.css';
import logo from '../assets/casalogo.png';

export function BarraNav() {
    return (
        <nav className="barraNavegacion">
            <ul>
                <img src={logo} className='logoBarra' alt='Logo empresa HOUSE' />
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/institucional">INSTITUCIONAL</Link></li>
                <li><Link to="/administracion">ADMINISTRACION</Link></li>
                <li><Link to="/contactanos">CONTACTANOS</Link></li>
                <li><Link to="/registro">REGISTRO</Link></li>
            </ul>
        </nav>
    );
}

export default BarraNav;
