import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import './EliminarImagen.css';

const validationSchema = Yup.object({
  idAlojamiento: Yup.string().required('Alojamiento es requerido'),
  RutaArchivo: Yup.string().required('Ruta de Archivo es requerida'),
});

const EditarImagen = () => {
  const [imagenes, setImagenes] = useState([]);
  const [error, setError] = useState('');
  const [selectedImagen, setSelectedImagen] = useState(null);

  useEffect(() => {
    const fetchImagenes = async () => {
      try {
        const response = await fetch('http://localhost:3001/imagen/getAllImagenes');
        if (response.ok) {
          const data = await response.json();
          setImagenes(data);
        } else {
          throw new Error('Error al obtener la lista de imágenes');
        }
      } catch (err) {
        setError(err.message);
      }
    };

    fetchImagenes();
  }, []);

  const handleSelectImagen = (imagen) => {
    setSelectedImagen(imagen);
  };

  const handleUpdate = async (values, { setSubmitting, resetForm }) => {
    try {
      const response = await fetch(`http://localhost:3001/imagen/updateImagen/${selectedImagen.idImagen}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      });

      if (response.ok) {
        const updatedImagen = await response.json();
        setImagenes(imagenes.map(imagen =>
          imagen.idImagen === selectedImagen.idImagen
            ? updatedImagen
            : imagen
        ));
        setSelectedImagen(null);
        resetForm();
        toast.success('Imagen actualizada con éxito!');
      } else {
        throw new Error('Error al actualizar la imagen');
      }
    } catch (err) {
      toast.error(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:3001/imagen/deleteImagen/${selectedImagen.idImagen}`, {
        method: 'DELETE'
      });

      if (response.ok) {
        setImagenes(imagenes.filter(imagen => imagen.idImagen !== selectedImagen.idImagen));
        setSelectedImagen(null);
        toast.success('Imagen eliminada con éxito!');
      } else {
        throw new Error('Error al eliminar la imagen');
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div>
      <ToastContainer />
      {error && <div className="error-message">{error}</div>}
      {selectedImagen ? (
        <div>
          <h2>Eliminar Imagen {selectedImagen.idImagen}</h2>
          <Formik
            initialValues={{
              idAlojamiento: selectedImagen.idAlojamiento,
              RutaArchivo: selectedImagen.RutaArchivo,
            }}
            validationSchema={validationSchema}
            onSubmit={handleUpdate}
          >
            {({ isSubmitting }) => (
              <Form>
                <div>
                  <label>Alojamiento:</label>
                  <Field as="select" name="idAlojamiento">
                    <option value="">Selecciona un alojamiento</option>
                    {/* Llenar con opciones de alojamientos disponibles */}
                  </Field>
                  <ErrorMessage name="idAlojamiento" component="div" className="error" />
                </div>
                <div>
                  <label>Ruta de Archivo:</label>
                  <Field type="text" name="RutaArchivo" />
                  <ErrorMessage name="RutaArchivo" component="div" className="error" />
                </div>
                <button type="button" onClick={handleDelete}>
                  <FontAwesomeIcon icon={faTrash} /> Eliminar
                </button>
                <button type="button" onClick={() => setSelectedImagen(null)}>
                  <FontAwesomeIcon icon={faTimesCircle} /> Cancelar
                </button>
              </Form>
            )}
          </Formik>
        </div>
      ) : (
        <div>
          {imagenes.length > 0 ? (
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Ruta de Archivo</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {imagenes.map((imagen) => (
                  <tr key={imagen.idImagen}>
                    <td>{imagen.idImagen}</td>
                    <td>{imagen.RutaArchivo}</td>
                    <td>
                      <button onClick={() => handleSelectImagen(imagen)}>
                        <FontAwesomeIcon icon={faEdit} /> eliminar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No hay imágenes disponibles</p>
          )}
        </div>
      )}
    </div>
  );
};

export default EditarImagen;
