import React, {Fragment, useState} from 'react'


const Pregunta = () => {

    //Definir el state
    const [cantidad, guardarCantidad] = useState(0);

    const definirPresupuesto = e => {
        guardarCantidad(parseInt(e.target.value, 10))
    }

    //Submit para definir el presupueesot
    const agregarPresupuesto = e => {
        e.preventDefault();

        //Validar
        

        //Si se pasa la validacion
    }
    return ( 
        <Fragment>
            <h2>Coloca tu presupuesto</h2>
            <form
                onSubmit={agregarPresupuesto}
            >
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto"
                    onChange={definirPresupuesto}
                />
                <input 
                    type="submit"
                    className="button-primary u-full-width" 
                    value="Definir Presupuesto"
                />
            </form>
        </Fragment>
    );
}
 
export default Pregunta;