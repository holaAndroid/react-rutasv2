import React from "react";

const ElementoMensaje = (props) => {
  const element = props.element;
  return (
    <div>
      <h3 key={element.mensaje}>{element}</h3>
    </div>
  );
};

export default ElementoMensaje;
