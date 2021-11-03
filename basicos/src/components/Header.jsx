import React from "react";


function Header() {
    
    const edad = 17;
    let mensaje;
    if (edad >= 18) {
        mensaje = 'Eres mayor de edad';
    }else{
        mensaje = 'Eres menor de edad';
    }
    return(
        <h1>Desde el header {edad} , {mensaje}</h1>
        
    )
}

export default Header;