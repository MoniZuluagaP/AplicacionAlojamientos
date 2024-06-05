import React from 'react'
import Header from "./Header";
import Footer from "./Footer";
import Contacto from "./Contacto";
import casa from '../assets/casa-portada.png';
import {Seccion} from './Seccion';
import './imgCasa.css';

 


export default function Contactanos() {
  return (
    <div>
      <Header />
      <Seccion ClassName="seccion-contacto1" nombre='CONTACTA CON NOSOTROS' />
      <Contacto/>
      <div className='casaHeader'>
        <img src={casa} className='casaHeader' ></img>
      </div>
      <Footer/> 
    </div>
  )
}
