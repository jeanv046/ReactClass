import React from "react";

const Footer = ({ fecha }) => {
  return (
    <footer>
      <center>
        <p>Todos los derechos reservados &copy; {fecha}</p>
        <p>Realizado por Jean vega</p>
      </center>
    </footer>
  );
};

export default Footer;
