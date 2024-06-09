import React from 'react';
import '../css/SeccionPorQueElegirnos.css';

// Importa las imágenes
import imagen_empresa1 from '../../assets/imagen_empresa1.jpg';
import imagen_empresa2 from '../../assets/imagen_empresa2.jpg';
import imagen_empresa3 from '../../assets/imagen_empresa3.jpg';

function PorQueElegirnos() {
  return (
    <div className="PorQueElegirnos">
      {[1, 2, 3].map((i) => (
        <div key={i} className={`container container${i}`}>
          {/* Utiliza las importaciones de las imágenes y referencia la imagen correspondiente */}
          <img src={i === 1 ? imagen_empresa1 : i === 2 ? imagen_empresa2 : imagen_empresa3} alt={`Empresa XYZ ${i}`} className={`imagen-empresa imagen-${i}`} />
          <div className="barras">
            <div className="barra-superior">
              <p>Texto 1</p>
              <div className="barra-superior-adicional">
                <p>{i === 1 ? '90%' : i === 2 ? '89%' : '80%'}</p>
              </div>
            </div>
            <div className="barra-media">
              <p>Texto 2</p>
              <div className="barra-media-adicional">
                <p>{i === 1 ? '76%' : i === 2 ? '75%' : '100%'}</p>
              </div>
            </div>
            <div className="barra-inferior">
              <p>Texto 3</p>
              <div className="barra-inferior-adicional">
                <p>{i === 1 ? '99%' : i === 2 ? '95%' : '85%'}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}


export default PorQueElegirnos;
