import React from "react";

const ListadoMensajes = (mensajes) => {
  const listaMensajes = mensajes.mensajes;
  return (
    <div>
      <ul>
        <h1 className="text-center">Listado de Mensajes</h1>
        {listaMensajes.map((elemento) => {
          return (
            <div className="card-dos">
              <h2>{elemento.mensaje}</h2>
              <h2>{elemento.autor}</h2>
              <h2>{elemento.fecha}</h2>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default ListadoMensajes;
