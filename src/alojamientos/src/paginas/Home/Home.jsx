import React from 'react'
import Header from "./componentes/Header";
/*import PFormBusqueda from "./componentes/PFormBusqueda";*/
import EncabezadoImagen from "./componentes/EncabezadoImagen";
import {Presentacion} from "./componentes/Presentacion";
import {Seccion} from "./componentes/Seccion";
import SeccionDestacadas from "./componentes/SeccionDestacadas";
import {SeccionTiposA} from "./componentes/SeccionTiposA";
import {Footer} from "./componentes/Footer";


export function Home() {
    return (
        <div>
            <Header />
            <EncabezadoImagen />
            <Presentacion />
            <Seccion ClassName='destacadas' nombre='ALOJAMIENTOS DESTACADOS' />
            <SeccionDestacadas />
            <Seccion ClassName='categoriaPropiedades' nombre='TIPOS DE ALOJAMIENTOS' />
            <SeccionTiposA className='cardsCategorias' />
            <Footer/> 
        </div>
    )
}