import React, { Fragment, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Producto from "./components/Producto";
import Carrito from "./components/Carrito";

function App() {
  //Crear listado de productos
  const [productos, guardarProductos] = useState([
    { id: 1, nombre: "Jean Vega", precio: 50 },
    { id: 2, nombre: "Juan Vega", precio: 30 },
    { id: 3, nombre: "Jesus Urueta", precio: 40 },
    { id: 4, nombre: "Jaramillo andres", precio: 70 },
  ]);

  //State para un carrito de compras
  const [ carrito, agregarProducto ] = useState([]);


  //Obtener la fecha actualizada.
  const fecha = new Date().getFullYear();

  return (
    <Fragment>
      <Header titulo="Tienda Virtual" />
      <h1>Listado de productos</h1>
      {productos.map((producto) => (
        <Producto 
          key={producto.id}
          producto={producto}
          productos = {productos}
          carrito = {carrito}
          agregarProducto={agregarProducto}
        />
      ))}

      <Carrito
        carrito={carrito}
        agregarProducto={agregarProducto}
      />

      <Footer fecha={fecha} />
    </Fragment>
  );
}

export default App;
