import React from "react";

const Contacto = () => {
  return (
    <div className="contacto2">
      <h1>Contacta con nosotros</h1>
      <br />
      <br />
      <br />
      <ul>
        <li>
          <a className="movil" href="telf:+34694468610">
            {" "}
            Móvil
          </a>
        </li>
        <br />
        <li>
          {" "}
          <a className="email" href="mailto:junior-react.com">
            {" "}
            Email
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contacto;
