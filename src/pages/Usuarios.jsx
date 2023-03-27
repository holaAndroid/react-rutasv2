import React from "react";
import Mensajes from "./Mensajes";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";

const Usuarios = () => {
  const [clientes, setAñadirClientes] = useState([
    {
      id: 1,
      nombre: "Juan",
      edad: 25,
      email: "juanjuan@juan.com",
      mensaje: "Aprender React no es facil",
      nacionalidad: "Eapaña",
      genero: "Hombre",
    },
    {
      id: 2,
      nombre: "Maria",
      edad: 32,
      email: "marialaloca@maria.com",
      mensaje: "estoy loca como una cabra",
      nacionalidad: "Suecia",
      genero: "Mujer",
    },
  ]);

  const [error, setError] = useState(false);
  const [nuevoNombre, setNuevoNombre] = useState("");
  const [nuevoEdad, setNuevoEdad] = useState("");
  const [nuevoEmail, setNuevoEmail] = useState("");
  const [nuevoMensaje, setNuevoMensaje] = useState("");
  const [nuevaNacionalidad, setNuevoNacionalidad] = useState("");
  const [nuevoGenero, setNuevoGenero] = useState("");

  const setNombre = (event) => {
    setNuevoNombre(event.target.value);
  };

  const setEdad = (event) => {
    setNuevoEdad(event.target.value);
  };

  const setEmail = (event) => {
    setNuevoEmail(event.target.value);
  };

  const setMensaje = (event) => {
    setNuevoMensaje(event.target.value);
  };

  const setNacionalidad = (event) => {
    setNuevoNacionalidad(event.target.value);
  };

  const setGenero = (event) => {
    setNuevoGenero(event.target.value);
  };

  const gestorSubmit = (e) => {
    e.preventDefault();
    setError(false);
    if (
      nuevoNombre.trim() === "" ||
      nuevoEdad.trim() === "" ||
      nuevoEmail.trim() === "" ||
      nuevoMensaje.trim() === ""
    ) {
      setError(true);
      return;
    }
    setAñadirClientes([
      ...clientes,
      {
        id: uuidv4(),
        nombre: nuevoNombre,
        edad: nuevoEdad,
        email: nuevoEmail,
        mensaje: nuevoMensaje,
        nacionalidad: nuevaNacionalidad,
        genero: nuevoGenero,
      },
    ]);
    setNuevoNombre("");
    setNuevoEdad("");
    setNuevoEmail("");
    setNuevoMensaje("");
  };

  return (
    <div className="usuarios">
      <div className="mensajes">
        {clientes.map((clients) => (
          <Mensajes key={clients.id} nuevosClientes={clients} />
        ))}
      </div>
      {error ? <h3>Rellene todos los campos</h3> : null}
      <div className="formulario">
        <form onSubmit={gestorSubmit} action="">
          <h3>El formulario para añadir en el array de los Clientes :</h3>
          <br />

          <label htmlFor="nombre">Nombre : </label>
          <input
            type="text"
            name="nombre"
            id="nombre"
            onChange={setNombre}
            value={nuevoNombre}
          />
          <br />

          <label htmlFor="edad">Edad : </label>
          <input
            type="number"
            name="edad"
            id="edad"
            min={18}
            max={65}
            onChange={setEdad}
            value={nuevoEdad}
          />
          <br />

          <label htmlFor="genero">Sexo : </label>
          <label htmlFor="hombre"> Hombre </label>
          <input
            type="radio"
            name="genero"
            id="hombre"
            onChange={setGenero}
            value="hombre"
            checked={nuevoGenero === "hombre"}
          />
          <label htmlFor="mujer"> Mujer </label>
          <input
            type="radio"
            name="genero"
            id="mujer"
            onChange={setGenero}
            value="mujer"
            checked={nuevoGenero === "mujer"}
          />
          <br />

          <label htmlFor="email">E-mail : </label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={setEmail}
            value={nuevoEmail}
          />
          <br />

          <label htmlFor="mensaje">Mensaje :</label>
          <input
            type="text"
            name="mensaje"
            id="mensaje"
            onChange={setMensaje}
            value={nuevoMensaje}
          />
          <br />

          <label htmlFor="nacionalidad">Nacionalidad : </label>
          <select onChange={setNacionalidad} defaultValue="españa">
            <option value=""></option>
            <option value="España">España</option>
            <option value="India">India</option>
            <option value="Suecia">Suecia</option>
          </select>
          <br />
          <button id="añadir" type="submit">
            Añadir
          </button>
          <br />
          <br />
          <h4>Para volver a la pagina principal:</h4>
          <br />
          <Link className="activo2" to={"/"}>
            Home
          </Link>
        </form>
      </div>
      <br />
    </div>
  );
};

export default Usuarios;
