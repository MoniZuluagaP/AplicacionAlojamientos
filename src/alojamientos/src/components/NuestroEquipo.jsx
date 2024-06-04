import React from 'react';
import './NuestroEquipo.css';

// Importar las imágenes
import foto_miembro1 from '../assets/foto_miembro1.jpg';
import foto_miembro2 from '../assets/foto_miembro2.jpg';
import foto_miembro3 from '../assets/foto_miembro3.jpg';
import foto_miembro4 from '../assets/foto_miembro4.jpg';

function NuestroEquipo() {
  const fotosMiembros = [
    { id: 1, src: foto_miembro1, alt: 'Miembro del equipo 1' },
    { id: 2, src: foto_miembro2, alt: 'Miembro del equipo 2' },
    { id: 3, src: foto_miembro3, alt: 'Miembro del equipo 3' },
    { id: 4, src: foto_miembro4, alt: 'Miembro del equipo 4' },
  ];

  return (
    <section className="nuestro-equipo">
      <div className="team-title">
        <h2>Este</h2>
        <h2>es</h2>
        <h2>nuestro</h2>
        <h2>equipo</h2>
      </div>
      <div className="team-photos">
        {fotosMiembros.map((miembro) => (
          <div key={miembro.id} className="team-member">
            <img src={miembro.src} alt={miembro.alt} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default NuestroEquipo;
