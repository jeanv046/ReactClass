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

  //Funcion que elimina una cita por su ID
  const eliminarCita = id =>{
    const nuevasCitas = citas.filter(cita => cita.id !== id);

    guardarCitas(nuevasCitas);
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
                eliminarCita={eliminarCita}
              />
            ))}

          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
