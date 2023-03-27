//rafce
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Button from "react-bootstrap/Button";

const AltaUsuario = ({ onNuevoUsuario }) => {
  const [error, setError] = useState(false);
  const [nuevoNombre, setNuevoNombre] = useState("");
  const [nuevoEmail, setNuevoEmail] = useState("");
  const [nuevoPassword, setNuevoPassword] = useState("");

  const gestorSubmit = (e) => {
    e.preventDefault();
    setError(false);
    if (
      nuevoNombre.trim() === "" ||
      nuevoEmail.trim() === "" ||
      nuevoPassword.trim() === ""
    ) {
      setError(true);
      return;
    }
    //Crea un nuevo objeto con los datos del formulario
    const NuevoUsuario = {
      id: uuidv4(),
      nombre: nuevoNombre,
      email: nuevoEmail,
      password: nuevoPassword,
    };
    //Ahora utilizamos la función que recibimos por props para actualizar la lista de usuarios
    onNuevoUsuario(NuevoUsuario);
    setNuevoNombre("");
    setNuevoEmail("");
    setNuevoPassword("");
  };

  const gestorCambioNombre = (e) => {
    setNuevoNombre(e.target.value);
  };
  const gestorCambioEmail = (e) => {
    setNuevoEmail(e.target.value);
  };
  const gestorCambioPassword = (e) => {
    setNuevoPassword(e.target.value);
  };

  return (
    <div>
      <div>
        <h1>Alta Usuario</h1>
        {error ? (
          <h3 className="error-campos">Debe completar todos los campos</h3>
        ) : null}
        <form onSubmit={gestorSubmit} action="">
          <label htmlFor="Nombre">Nombre</label>
          <input
            onChange={gestorCambioNombre}
            className="form-text"
            type="text"
            name="nombre"
            id="nombre"
            value={nuevoNombre}
          />
          <label htmlFor="email">Email</label>
          <input
            onChange={gestorCambioEmail}
            className="form-text"
            type="email"
            name="email"
            id="Email"
            value={nuevoEmail}
          />
          <label htmlFor="password">Contraseña</label>
          <input
            onChange={gestorCambioPassword}
            className="form-text"
            type="password"
            name="pass"
            id="password"
            value={nuevoPassword}
          />
          <Button className="mt-4" variant="primary" type="submit">
            Enviar
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AltaUsuario;
