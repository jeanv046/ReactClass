import React, { Fragment, useState, useEffect } from "react";
import uuid from "uuid/dist/v4";
import axios from "axios";

const Formulario = ({ crearCita }) => {

    //Consumiendo API
  const [selectMascotas, setMascotas] = useState([]);
  const getNewsList = async () => {
    await axios.get('https://dog.ceo/api/breeds/list/all').then((response) => {
        if (response.status === 200) {
            const entryMascota = [];
            Object.entries(response.data.message).forEach((message) => {
                /* if (message[1].length > 0) {} */
                    /* message[1].forEach(raza => { */
                        
                        entryMascota.push(message[0]);
                        
                    /* }) */
                
            })
            setMascotas(entryMascota);
        }
    });
  };
  useEffect(() => {
      getNewsList(); 
  },[]);

  //Crear State de citas
  const [citas, actualizarCita] = useState({
    mascota: "",
    raza: "",
    propietario: "",
    fecha: "",
    hora: "",
    sintomas: "",
  });
  const [error, actualizarError] = useState(false);

  //Funcion que se ejecuta cada que el usuario escriba en un input
  const actualizarState = (e) => {
    actualizarCita({
      ...citas,
      [e.target.name]: e.target.value,
    });
  };

  //Extraer los valores
  const { mascota,raza, propietario, fecha, hora, sintomas } = citas;

  //Cuando el usuario presiona el boton
  const submitCita = async (e) => {
    e.preventDefault();

    //Validar
    if (
      mascota.trim() === "" ||
      propietario.trim() === "" ||
      raza.trim() === ""||
      fecha.trim() === "" ||
      hora.trim() === "" ||
      sintomas.trim() === ""
    ) {
      actualizarError(true);
      return;
    }

    //Eliminar el mensaje de error
    actualizarError(false);

    //Asignar un ID
    citas.id = uuid();

    //asignar foto a card
    await axios.get(`https://dog.ceo/api/breed/${raza}/images/random`).then((response)=> {
        if (response.status === 200) {
            citas.url_imagen= response.data.message;
        }
    })

    //Crear la cita
    crearCita(citas);

    //Reiniciar el Form
    actualizarCita({
      mascota: "",
      raza:"",
      propietario: "",
      fecha: "",
      hora: "",
      sintomas: "",
    });
  };

  return (
    <Fragment>
      <h2>Crear Cita</h2>

      {error ? (
        <p className="alerta-error">Todos los campos son obligatorios</p>
      ) : null}

      <form onSubmit={submitCita}>
        <label>Nombre Mascota</label>
        <input
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="Nombre Mascota"
          onChange={actualizarState}
          value={mascota}
        />
        <label>Raza Mascota</label>
        <select
          name="raza"
          className="u-full-width"
          onChange={actualizarState}
          value={raza}
        >
            <option>Seleccione la Raza</option>
            {selectMascotas.map((item, index) =>{
            return( 
                <option key={index} value={item}>{item}</option> 
            )
        })}
        </select>

        <label>Nombre Dueño</label>
        <input
          type="text"
          name="propietario"
          className="u-full-width"
          placeholder="Nombre Dueño de la mascota"
          onChange={actualizarState}
          value={propietario}
        />

        <label>Fecha</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          onChange={actualizarState}
          value={fecha}
        />

        <label>Hora</label>
        <input
          type="time"
          name="hora"
          className="u-full-width"
          onChange={actualizarState}
          value={hora}
        />

        <label>Síntomas</label>
        <textarea
          className="u-full-width"
          name="sintomas"
          onChange={actualizarState}
          value={sintomas}
        ></textarea>

        <button type="submit" className="u-full-width button-primary">
          Agregar cita
        </button>
      </form>
    </Fragment>
  );
};

export default Formulario;
