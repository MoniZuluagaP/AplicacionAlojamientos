import React from 'react'
import Header from "./Header";
import {PFormBusqueda} from "./PFormBusqueda";
import {Presentacion} from "./Presentacion";
import {Seccion} from "./Seccion";
import SeccionDestacadas from "./SeccionDestacadas";
import {SeccionTiposA} from "./SeccionTiposA";
import {Footer} from "./Footer";


export function Home() {
    return (
        <div>
            <Header />
            <PFormBusqueda />
            <Presentacion />
            <Seccion ClassName='destacadas' nombre='ALOJAMIENTOS DESTACADOS' />
            <SeccionDestacadas />
            <Seccion ClassName='categoriaPropiedades' nombre='TIPOS DE ALOJAMIENTOS' />
            <SeccionTiposA className='cardsCategorias' />
            <Footer/> 
        </div>
    )
}