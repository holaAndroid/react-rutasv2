import React from "react";

const ListadoUsuarios = (usuarios) => {
  const listaUsuarios = usuarios.usuarios;
  return (
    <div>
      <ul>
        <h1>Listado de Usuarios</h1>
        {listaUsuarios.map((elemento) => {
          return (
            <div className="card-dos">
              <h2>{elemento.nombre}</h2>
              <h2>{elemento.email}</h2>
              <h2>{elemento.password}</h2>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default ListadoUsuarios;
