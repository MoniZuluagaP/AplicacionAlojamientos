import React from 'react'
import Header from "./Header";
import PFormBusqueda from "./PFormBusqueda";
import Footer from "./Footer";
import Contacto from "./FormularioContacto";
import {Seccion} from './Seccion';
 


export default function Contactanos() {
  return (
    <div>
      <Header />
      <PFormBusqueda />
      <Seccion ClassName="seccion-contacto1" nombre='CONTACTA CON NOSOTROS' />
      <Contacto/>
      <Footer/> 
    </div>
  )
}
