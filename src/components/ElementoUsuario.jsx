import React from "react";

const ElementoUsuario = (props) => {
  const element = props.element;
  return (
    <div>
      <h3 key={element.id}>{element}</h3>
    </div>
  );
};

export default ElementoUsuario;
