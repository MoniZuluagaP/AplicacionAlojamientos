import React from 'react'
import Header from "../Home/componentes/Header";
import PFormBusqueda from "../Home/componentes/PFormBusqueda";
import Footer from "../Home/componentes/Footer";
import Contacto from "./FormularioContacto";
import {Seccion} from '../Home/componentes/Seccion';
 


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
