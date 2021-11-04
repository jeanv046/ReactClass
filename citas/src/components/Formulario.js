import React, { Fragment, useState } from 'react'

const Formulario = () => {

    //Crear State de citas
    const [citas, actualizarCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    });

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

        //Asignar un ID

        //Crear la cita

        //Reiniciar el Form

    }



    return (  
        <Fragment>
            <h2>Crear Cita</h2>

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