import React, { Fragment } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {

  const fecha = new Date().getFullYear();

  return (
    <Fragment>
      <Header 
        titulo='Tienda Virtual'
        
      />
      <Footer 
        fecha={fecha}
      />
    </Fragment>
  );
}

export default App;
