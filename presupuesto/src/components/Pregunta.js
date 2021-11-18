import React, {Fragment, useState} from 'react'


const Pregunta = () => {

    //Definir el state
    const [cantidad, guardarCantidad] = useState(0);

    const definirPresupuesto = e => {
        console.log( parseInt(e.target.value) );
    }

    return ( 
        <Fragment>
            <h2>Coloca tu presupuesto</h2>
            <form>
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