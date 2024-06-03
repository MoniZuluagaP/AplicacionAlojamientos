import React from "react";
import './App.css';
import './components/Main.css'
import Header from "./components/Header";
import {PFormBusqueda} from "./components/PFormBusqueda";
import {Seccion} from "./components/Seccion";
import {Presentacion} from "./components/Presentacion";
import SeccionDestacadas from "./components/SeccionDestacadas";
import {SeccionTiposA} from "./components/SeccionTiposA";
import {Footer} from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <PFormBusqueda />
      <main className="main">
          <Presentacion />
          <Seccion ClassName='destacadas' nombre='ALOJAMIENTOS DESTACADOS' />
          <SeccionDestacadas />
          <Seccion ClassName='categoriaPropiedades' nombre='TIPOS DE ALOJAMIENTOS' />
          <SeccionTiposA className='cardsCategorias' />
          <Footer />
      </main>


    </div>
  );
}

export default App;