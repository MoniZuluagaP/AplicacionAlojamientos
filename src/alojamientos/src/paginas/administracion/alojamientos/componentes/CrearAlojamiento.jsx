import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CrearAlojamiento = () => {
  const [tiposAlojamiento, setTiposAlojamiento] = useState([]);

  useEffect(() => {
    fetchTiposAlojamiento();
  }, []);

  const fetchTiposAlojamiento = async () => {
    const endpoint = 'http://localhost:3001/tiposAlojamiento/getTiposAlojamiento';

    try {
      const response = await fetch(endpoint);
      if (response.ok) {
        const data = await response.json();
        setTiposAlojamiento(data);
      } else {
        throw new Error('Error al cargar tipos de alojamiento');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Error al cargar tipos de alojamiento');
    }
  };

  const validationSchema = Yup.object({
    Titulo: Yup.string().required('Título es requerido'),
    Descripcion: Yup.string().required('Descripción es requerida'),
    Latitud: Yup.number()
      .required('Latitud es requerida')
      .min(-90, 'Latitud mínima es -90')
      .max(90, 'Latitud máxima es 90'),
    Longitud: Yup.number()
      .required('Longitud es requerida')
      .min(-180, 'Longitud mínima es -180')
      .max(180, 'Longitud máxima es 180'),
    PrecioPorDia: Yup.number()
      .required('Precio por Día es requerido')
      .positive('Debe ser un número positivo'),
    CantidadDormitorios: Yup.number()
      .required('Cantidad de Dormitorios es requerida')
      .positive('Debe ser un número positivo')
      .integer('Debe ser un número entero'),
    CantidadBanios: Yup.number()
      .required('Cantidad de Baños es requerida')
      .positive('Debe ser un número positivo')
      .integer('Debe ser un número entero'),
    Estado: Yup.string().required('Estado es requerido'),
    TipoAlojamiento: Yup.string().required('Tipo de Alojamiento es requerido'),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    const endpoint = 'http://localhost:3001/alojamiento/createAlojamiento';

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        toast.success('Alojamiento creado con éxito');
        resetForm();
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Error al crear el alojamiento');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error(error.message || 'Error al crear el alojamiento');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <h1>Crear Alojamiento</h1>
      <Formik
        initialValues={{
          Titulo: '',
          Descripcion: '',
          Latitud: '',
          Longitud: '',
          PrecioPorDia: '',
          CantidadDormitorios: '',
          CantidadBanios: '',
          Estado: 'Disponible',
          TipoAlojamiento: '',
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <label>Título:</label>
              <Field type="text" name="Titulo" />
              <ErrorMessage name="Titulo" component="div" className="error" />
            </div>
            <div>
              <label>Descripción:</label>
              <Field as="textarea" name="Descripcion" />
              <ErrorMessage name="Descripcion" component="div" className="error" />
            </div>
            <div>
              <label>Latitud:</label>
              <Field type="number" step="0.00000001" name="Latitud" />
              <ErrorMessage name="Latitud" component="div" className="error" />
            </div>
            <div>
              <label>Longitud:</label>
              <Field type="number" step="0.00000001" name="Longitud" />
              <ErrorMessage name="Longitud" component="div" className="error" />
            </div>
            <div>
              <label>Precio por Día:</label>
              <Field type="number" step="0.01" name="PrecioPorDia" />
              <ErrorMessage name="PrecioPorDia" component="div" className="error" />
            </div>
            <div>
              <label>Cantidad de Dormitorios:</label>
              <Field type="number" name="CantidadDormitorios" />
              <ErrorMessage name="CantidadDormitorios" component="div" className="error" />
            </div>
            <div>
              <label>Cantidad de Baños:</label>
              <Field type="number" name="CantidadBanios" />
              <ErrorMessage name="CantidadBanios" component="div" className="error" />
            </div>
            <div>
              <label>Estado:</label>
              <Field as="select" name="Estado">
                <option value="Disponible">Disponible</option>
                <option value="Reservado">Reservado</option>
              </Field>
              <ErrorMessage name="Estado" component="div" className="error" />
            </div>
            <div>
              <label>Tipo de Alojamiento:</label>
              <Field as="select" name="TipoAlojamiento">
                <option value="">Selecciona un tipo de alojamiento</option>
                {tiposAlojamiento.map((tipo) => (
                  <option key={tipo.idTipoAlojamiento} value={tipo.idTipoAlojamiento}>
                    {tipo.Descripcion}
                  </option>
                ))}
              </Field>
              <ErrorMessage name="TipoAlojamiento" component="div" className="error" />
            </div>
            <button type="submit" disabled={isSubmitting}>
              Guardar
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CrearAlojamiento;
