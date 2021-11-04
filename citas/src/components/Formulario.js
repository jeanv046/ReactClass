import React, { Fragment, useState } from 'react'
import uuid from 'uuid/dist/v4';

const Formulario = () => {

    //Crear State de citas
    const [citas, actualizarCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    });
    const [error, actualizarError] = useState(false)


    //Funcion que se ejecuta cada que el usuario escriba en un input
    const actualizarState = e => {
        actualizarCita({
            ...citas,
            [e.target.name]: e.target.value
        })
    }

    //Extraer los valores
    const {mascota, propietario, fecha, hora, sintomas} = citas;

    //Cuando el usuario presiona el boton
    const submitCita = e =>{
        e.preventDefault();

        //Validar
        if (mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === '') {
            actualizarError(true);
            return;
        }
        
        //Eliminar el mensaje de error
        actualizarError(false);

        //Asignar un ID
        citas.id = uuid();

        //Crear la cita

        //Reiniciar el Form

    }



    return (  
        <Fragment>
            <h2>Crear Cita</h2>

            {error ?<p className="alerta-error">Todos los campos son obligatorios</p>    
            : null}

            <form
                onSubmit={submitCita}
            >
                <label>Nombre Mascota</label>
                <input 
                    type="text" 
                    name="mascota" 
                    className="u-full-width"
                    placeholder="Nombre Mascota"
                    onChange={actualizarState}
                    value={mascota}
                />

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
                >
                </textarea>

                <button
                    type="submit"
                    className="u-full-width button-primary"
                >Agregar cita</button>

            </form>
        </Fragment>
    );
}
 
export default Formulario;