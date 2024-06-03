import React from "react";
import './App.css';
import './components/Main.css';
import Header from "./components/Header";
import { PFormBusqueda } from "./components/PFormBusqueda";
import { Seccion } from "./components/Seccion";
import { Presentacion } from "./components/Presentacion";
import SeccionDestacadas from "./components/SeccionDestacadas";
import { SeccionTiposA } from "./components/SeccionTiposA";
import { Footer } from "./components/Footer";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Administracion from '../src/administracion/Administracion';
import BarraNav from '../src/components/BarraNav';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <BarraNav />
        <Switch>
          <Route path="/administracion" component={Administracion} />
          <Route path="/" exact>
            <PFormBusqueda />
            <main className="main">
              <Presentacion />
              <Seccion className='destacadas' nombre='ALOJAMIENTOS DESTACADOS' />
              <SeccionDestacadas />
              <Seccion className='categoriaPropiedades' nombre='TIPOS DE ALOJAMIENTOS' />
              <SeccionTiposA className='cardsCategorias' />
            </main>
          </Route>
          {/* Agrega más rutas aquí si es necesario */}
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
