import React from 'react'
import Header from "../Home/componentes/Header";
/*import PFormBusqueda from "../Home/componentes/PFormBusqueda";*/
import Footer from "../Home/componentes/Footer";
import Contacto from "./FormularioContacto";
import {Seccion} from '../Home/componentes/Seccion';
import EncabezadoImagen from '../Home/componentes/EncabezadoImagen';
 


export default function Contactanos() {
  return (
    <div>
      <Header />
      <EncabezadoImagen />
      <Seccion ClassName="seccion-contacto1" nombre='CONTACTA CON NOSOTROS' />
      <Contacto/>
      <Footer/> 
    </div>
  )
}
