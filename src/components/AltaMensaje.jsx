import React, { useState } from "react";
import Button from "react-bootstrap/Button";

const AltaMensaje = ({ onNuevoMensaje }) => {
  const [error, setError] = useState(false);
  const [nuevoMensaje, setNuevoMensaje] = useState("");
  const [nuevoAutor, setNuevoAutor] = useState("");
  const [nuevoFecha, setNuevoFecha] = useState("");

  const gestorSubmit = (e) => {
    e.preventDefault();
    setError(false);
    if (
      nuevoMensaje.trim() === "" ||
      nuevoAutor.trim() === "" ||
      nuevoFecha.trim() === ""
    ) {
      setError(true);
      return;
    }
    //Crea un nuevo objeto con los datos del formulario
    const NuevoMensaje = {
      mensaje: nuevoMensaje,
      autor: nuevoAutor,
      fecha: nuevoFecha,
    };
    //Ahora utilizamos la función que recibimos por props para actualizar la lista de usuarios
    onNuevoMensaje(NuevoMensaje);
    setNuevoMensaje("");
    setNuevoAutor("");
    setNuevoFecha("");
  };

  const gestorCambioMensaje = (e) => {
    setNuevoMensaje(e.target.value);
  };
  const gestorCambioAutor = (e) => {
    setNuevoAutor(e.target.value);
  };
  const gestorCambioFecha = (e) => {
    setNuevoFecha(e.target.value);
  };

  return (
    <div>
      <div>
        <h1>Nuevo mensaje</h1>
        {error ? (
          <h3 className="error-campos">Debe completar todos los campos</h3>
        ) : null}
        <form onSubmit={gestorSubmit} action="">
          <label htmlFor="mensaje">Mensaje</label>
          <input
            onChange={gestorCambioMensaje}
            className="form-text"
            type="text"
            name="mensaje"
            id="mensaje"
            value={nuevoMensaje}
          />
          <label htmlFor="autor">Autor</label>
          <input
            onChange={gestorCambioAutor}
            className="form-text"
            type="text"
            name="autor"
            id="autor"
            value={nuevoAutor}
          />
          <label htmlFor="fecha">Fecha</label>
          <input
            onChange={gestorCambioFecha}
            className="form-text"
            type="date"
            name="fecha"
            id="date"
            value={nuevoFecha}
          />
          <Button className="mt-4" variant="primary" type="submit">
            Enviar
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AltaMensaje;
