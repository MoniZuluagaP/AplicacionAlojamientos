
import React, { Fragment, useState } from 'react';
import './Contacto.css';



export default function Contacto() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [mensajeMostrado, setMensajeMostrado] = useState("");

  const nombreOnChange = (event) => {
    setNombre(event.target.value);
  }

  const emailOnChange = (event) => {
    setEmail(event.target.value);
  }

  const mensajeOnChange = (event) => {
    setMensaje(event.target.value);
  }

  const mostrarBotonTexto = (event) => {
    event.preventDefault(); 
    setMensajeMostrado(`Nombre: ${nombre}\nEmail: ${email}\nMensaje: ${mensaje}`);
  }

  return (
    <Fragment>
      <section className="seccion-contacto">
        <h2>Comunicate con nosotros</h2>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre" required="" placeholder="Ingrese nombre" value={nombre} onChange={nombreOnChange} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required="" placeholder="Ingrese su correo " value={email} onChange={emailOnChange} />
          </div>
          <div className="form-group">
            <label htmlFor="mensaje">Mensaje:</label>
            <textarea
              id="mensaje"
              name="mensaje"
              rows={5}
              required=""
              value={mensaje} 
              onChange={mensajeOnChange} 
            />
          </div>
          <div className="form-group">
            <label htmlFor="reserva">¿Desea realizar una reserva?</label>
            <select id="reserva" name="reserva">
              <option value="Si">Sí</option>
              <option value="No">No</option>
            </select>
            <br />
            <br />
            <button type="submit" onClick={mostrarBotonTexto}>Enviar</button>
            
          </div>
        </form>
        {mensajeMostrado && (
          <div className="mensaje-mostrado">
            <h3>Mensaje Enviado:</h3>
            <pre>{mensajeMostrado}</pre>
          </div>
        )}
      </section>
    </Fragment>
  );
}







