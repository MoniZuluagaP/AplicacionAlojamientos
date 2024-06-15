import React, { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './BuscarAlojamiento.css'; // Importa el archivo de estilos específicos

const BuscarAlojamiento = () => {
  const [alojamientos, setAlojamientos] = useState([]);
  const [filteredAlojamientos, setFilteredAlojamientos] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [alojamientosPerPage] = useState(5);
  const [precioMinimo, setPrecioMinimo] = useState(0);
  const [precioMaximo, setPrecioMaximo] = useState(Number.MAX_SAFE_INTEGER);
  const [estadoFiltro, setEstadoFiltro] = useState('');
  const [cantidadHabitaciones, setCantidadHabitaciones] = useState('');

  useEffect(() => {
    const fetchAlojamientos = async () => {
      try {
        const response = await fetch('http://localhost:3001/alojamiento/getAlojamientos');
        if (!response.ok) {
          throw new Error('Error al obtener la lista de alojamientos');
        }
        const data = await response.json();
        setAlojamientos(data);
        setFilteredAlojamientos(data);
      } catch (err) {
        setError(err.message);
        toast.error(err.message || 'Error al obtener la lista de alojamientos');
      } finally {
        setLoading(false);
      }
    };

    fetchAlojamientos();
  }, []);

  useEffect(() => {
    const filterAlojamientos = () => {
      let filtered = alojamientos.filter(alojamiento => alojamiento.PrecioPorDia >= precioMinimo && alojamiento.PrecioPorDia <= precioMaximo);
      if (estadoFiltro !== '') {
        filtered = filtered.filter(alojamiento => alojamiento.Estado.toLowerCase() === estadoFiltro.toLowerCase());
      }
      if (cantidadHabitaciones !== '') {
        filtered = filtered.filter(alojamiento => alojamiento.CantidadDormitorios >= cantidadHabitaciones);
      }
      setFilteredAlojamientos(filtered);
    };

    filterAlojamientos();
  }, [alojamientos, precioMinimo, precioMaximo, estadoFiltro, cantidadHabitaciones]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleShowDetails = (alojamiento) => {
    // Aquí puedes implementar la lógica para mostrar los detalles ampliados
    // Podrías usar un modal, un componente de detalles, etc.
    console.log('Mostrar detalles de:', alojamiento);
    // Por ejemplo, podrías abrir un modal o navegar a una página de detalles:
    // history.push(`/alojamiento/${alojamiento.idAlojamiento}`);
  };

  const indexOfLastAlojamiento = currentPage * alojamientosPerPage;
  const indexOfFirstAlojamiento = indexOfLastAlojamiento - alojamientosPerPage;
  const currentAlojamientos = filteredAlojamientos.slice(indexOfFirstAlojamiento, indexOfLastAlojamiento);

  if (loading) {
    return <p className="loading-message">Cargando alojamientos...</p>;
  }

  return (
    <div className="buscar-alojamiento">
      <ToastContainer />
      <div className="search-and-list-container">
        <div className="search-form">
          <h2>Listado de Alojamientos</h2>
          <div className="price-filter">
            <label>Precio mínimo:</label>
            <input type="number" value={precioMinimo} onChange={(e) => setPrecioMinimo(parseInt(e.target.value) || 0)} />
            <label>Precio máximo:</label>
            <input type="number" value={precioMaximo} onChange={(e) => setPrecioMaximo(parseInt(e.target.value) || Number.MAX_SAFE_INTEGER)} />
          </div>
          <div className="estado-filter">
            <label>Estado:</label>
            <select value={estadoFiltro} onChange={(e) => setEstadoFiltro(e.target.value)}>
              <option value="">Todos</option>
              <option value="Disponible">Disponible</option>
              <option value="Reservado">Reservado</option>
            </select>
          </div>
          <div className="habitaciones-filter">
            <label>Cantidad de Habitaciones mínima:</label>
            <input type="number" value={cantidadHabitaciones} onChange={(e) => setCantidadHabitaciones(parseInt(e.target.value) || '')} />
          </div>
        </div>

        <div className="alojamientos-list-container">
          <div className="alojamientos-grid">
            {currentAlojamientos.length > 0 ? (
              currentAlojamientos.map((alojamiento) => (
                <div className="alojamiento-card" key={alojamiento.idAlojamiento} onClick={() => handleShowDetails(alojamiento)}>
                  <h3>{alojamiento.Titulo}</h3>
                  <p>{alojamiento.Descripcion}</p>
                  <p>Latitud: {alojamiento.Latitud}</p>
                  <p>Longitud: {alojamiento.Longitud}</p>
                  <p>Precio por Día: {alojamiento.PrecioPorDia}</p>
                  <p>Cantidad de Dormitorios: {alojamiento.CantidadDormitorios}</p>
                  <p>Cantidad de Baños: {alojamiento.CantidadBanios}</p>
                  <p>Estado: {alojamiento.Estado}</p>
                  <p>Tipo de Alojamiento: {alojamiento.TipoAlojamiento}</p>
                </div>
              ))
            ) : (
              <p className="no-results">No hay alojamientos disponibles</p>
            )}
            <div className="pagination">
              <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>Anterior</button>
              <span>Página {currentPage}</span>
              <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentAlojamientos.length < alojamientosPerPage}>Siguiente</button>
            </div>
          </div>
        </div>
      </div>

      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

export default BuscarAlojamiento;
