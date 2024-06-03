import './App.css';
import Header from "./components/Header";
import {PFormBusqueda} from "./components/PFormBusqueda";
import React from "react";

function App() {
  return (
    <div className="App">
      <Header />
      <PFormBusqueda />
    </div>
  );
}

export default App;