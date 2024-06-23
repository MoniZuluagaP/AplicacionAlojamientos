import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage, FieldArray } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const validationSchema = Yup.object().shape({
  idAlojamiento: Yup.string().required('Alojamiento es requerido'),
  imagenes: Yup.array().of(
    Yup.object().shape({
      RutaArchivo: Yup.string().required('Ruta de Archivo es requerida')
    })
  )
});

const EditarImagen = () => {
  const [imagenes, setImagenes] = useState([]);
  const [alojamientos, setAlojamientos] = useState([]);
  const [error, setError] = useState('');
  const [selectedImagen, setSelectedImagen] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [imagenesResponse, alojamientosResponse] = await Promise.all([
          fetch('http://localhost:3001/imagen/getAllImagenes'),
          fetch('http://localhost:3001/alojamiento/getAlojamientos')
        ]);

        if (imagenesResponse.ok && alojamientosResponse.ok) {
          const [imagenesData, alojamientosData] = await Promise.all([
            imagenesResponse.json(),
            alojamientosResponse.json()
          ]);

          setImagenes(imagenesData);
          setAlojamientos(alojamientosData);
        } else {
          throw new Error('Error al obtener la lista de imágenes o alojamientos');
        }
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
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

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:3001/imagen/deleteImagen/${id}`, {
        method: 'DELETE'
      });

      if (response.ok) {
        setImagenes(imagenes.filter(imagen => imagen.idImagen !== id));
        toast.success('Imagen eliminada con éxito!');
      } else {
        throw new Error('Error al eliminar la imagen');
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="container">
      <ToastContainer />
      <h1>Actualizar Imagen</h1>
      {error && <div className="error-message">{error}</div>}
      {selectedImagen ? (
        <div>
          <h2>Actualizar Imagen {selectedImagen.idImagen}</h2>
          <Formik
            initialValues={{
              idAlojamiento: selectedImagen.idAlojamiento,
              imagenes: selectedImagen.imagenes.map(imagen => ({ RutaArchivo: imagen.RutaArchivo }))
            }}
            validationSchema={validationSchema}
            onSubmit={handleUpdate}
          >
            {({ isSubmitting }) => (
              <Form>
                <FieldArray name="imagenes">
                  {({ push, remove }) => (
                    <>
                      {values.imagenes.map((imagen, index) => (
                        <div key={index} className="form-group">
                          <label htmlFor={`imagenes.${index}.RutaArchivo`}>
                            Ruta de Archivo {index + 1}:
                          </label>
                          <Field
                            type="text"
                            name={`imagenes.${index}.RutaArchivo`}
                            className="form-control"
                            placeholder="/images/casa.jpg"
                          />
                          <ErrorMessage
                            name={`imagenes.${index}.RutaArchivo`}
                            component="div"
                            className="error-message"
                          />
                          <button
                            type="button"
                            onClick={() => remove(index)}
                            className="btn btn-danger"
                          >
                            Eliminar
                          </button>
                        </div>
                      ))}
                      <button
                        type="button"
                        onClick={() => push({ RutaArchivo: '' })}
                        className="btn btn-primary"
                      >
                        Agregar Imagen
                      </button>
                    </>
                  )}
                </FieldArray>
                <button type="submit" disabled={isSubmitting} className="btn btn-primary">
                  <FontAwesomeIcon icon={faEdit} /> Actualizar
                </button>
                <button type="button" onClick={() => setSelectedImagen(null)} className="btn btn-secondary">
                  <FontAwesomeIcon icon={faTimesCircle} /> Cancelar
                </button>
              </Form>
            )}
          </Formik>
        </div>
      ) : (
        <div className="card-list">
          {imagenes.length > 0 ? (
            imagenes.map((imagen) => (
              <div key={imagen.idImagen} className="card">
                <img src={imagen.RutaArchivo} alt={`Imagen ${imagen.idImagen}`} />
                <div className="card-body">
                  <h5 className="card-title">Imagen {imagen.idImagen}</h5>
                  <p className="card-text">Ruta: {imagen.RutaArchivo}</p>
                  <button className="btn-edit" onClick={() => handleSelectImagen(imagen)}>
                    <FontAwesomeIcon icon={faEdit} /> Actualizar
                  </button>
                  <button className="btn-delete" onClick={() => handleDelete(imagen.idImagen)}>
                    <FontAwesomeIcon icon={faTimesCircle} /> Eliminar
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>No hay imágenes disponibles</p>
          )}
        </div>
      )}
    </div>
  );
};

export default EditarImagen;
