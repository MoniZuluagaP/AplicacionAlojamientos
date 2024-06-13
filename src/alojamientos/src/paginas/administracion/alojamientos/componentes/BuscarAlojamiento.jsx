import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BuscarAlojamiento = () => {
  const [alojamientos, setAlojamientos] = useState([]);
  const [filteredAlojamientos, setFilteredAlojamientos] = useState([]);
  const [searchParams, setSearchParams] = useState({
    searchOption: 'idAlojamiento',
    searchText: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchParams({ ...searchParams, [name]: value });
  };

  const handleSearch = () => {
    const { searchOption, searchText } = searchParams;
    const filtered = alojamientos.filter(alojamiento =>
      alojamiento[searchOption].toString().toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredAlojamientos(filtered);
    toast.success('Búsqueda realizada con éxito');
  };

  if (loading) {
    return <p>Cargando alojamientos...</p>;
  }

  return (
    <div>
      <ToastContainer />
      <h1>Listado de Alojamientos</h1>
      {error && <div className="error-message">{error}</div>}

      <div className="search-form">
        <h2>Buscar Alojamiento</h2>
        <div>
          <label>Buscar por:</label>
          <div>
            <input
              type="radio"
              id="searchById"
              name="searchOption"
              value="idAlojamiento"
              checked={searchParams.searchOption === 'idAlojamiento'}
              onChange={handleInputChange}
            />
            <label htmlFor="searchById">ID</label>
          </div>
          <div>
            <input
              type="radio"
              id="searchByTitle"
              name="searchOption"
              value="Titulo"
              checked={searchParams.searchOption === 'Titulo'}
              onChange={handleInputChange}
            />
            <label htmlFor="searchByTitle">Título</label>
          </div>
          <div>
            <input
              type="radio"
              id="searchByState"
              name="searchOption"
              value="Estado"
              checked={searchParams.searchOption === 'Estado'}
              onChange={handleInputChange}
            />
            <label htmlFor="searchByState">Estado</label>
          </div>
        </div>
        <div>
          <input type="text" name="searchText" value={searchParams.searchText} onChange={handleInputChange} />
        </div>
        <button onClick={handleSearch}>Buscar</button>
      </div>

      {filteredAlojamientos.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Título</th>
              <th>Descripción</th>
              <th>Latitud</th>
              <th>Longitud</th>
              <th>Precio por Día</th>
              <th>Cantidad de Dormitorios</th>
              <th>Cantidad de Baños</th>
              <th>Estado</th>
              <th>Tipo de Alojamiento</th>
            </tr>
          </thead>
          <tbody>
            {filteredAlojamientos.map((alojamiento) => (
              <tr key={alojamiento.idAlojamiento}>
                <td>{alojamiento.idAlojamiento}</td>
                <td>{alojamiento.Titulo}</td>
                <td>{alojamiento.Descripcion}</td>
                <td>{alojamiento.Latitud}</td>
                <td>{alojamiento.Longitud}</td>
                <td>{alojamiento.PrecioPorDia}</td>
                <td>{alojamiento.CantidadDormitorios}</td>
                <td>{alojamiento.CantidadBanios}</td>
                <td>{alojamiento.Estado}</td>
                <td>{alojamiento.TipoAlojamiento}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No hay alojamientos disponibles</p>
      )}
    </div>
  );
};

export default BuscarAlojamiento;
