import React, { Fragment, useState} from "react";
import Formulario from "./components/Formulario";
import Cita from "./components/Cita";

function App() {
  
  //Arreglo de las citas
  const [citas, guardarCitas] = useState([]);


  //Funcion que tome las citas actuales y agregue la nueva se
  const crearCita = cita =>{
    guardarCitas([...citas,cita])
  }

  return (
    <Fragment>
      <h1>Administrados de Pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario 
              crearCita={crearCita}
            />
          </div>
          <div className="one-half column">
            <h2>Administrador de citas</h2>
            {citas.map(cita => (
              <Cita
                key={cita.id}
                cita={cita}
              />
            ))}

          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
