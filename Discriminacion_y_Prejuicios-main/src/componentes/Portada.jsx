import React from "react";
import logo from "../imagenes/logo.jpg";
import { Link } from "react-router-dom";

function Portada() {
  return (
    <div className="container">
      <div className="row">
        <img
          src={logo}
          className="rounded mx-auto d-block"
          alt="logo"
          style={{ maxWidth: "300px" }}
        ></img>
        <div className="mx-auto">
          <p className="text-center">
            Registrate aqui para explorar y enfrentar juntos la lucha contra la
            discriminación y los prejuicios.
          </p>
        </div>

        <Link to="/registro">
          <div class="d-grid gap-2 col-6 mx-auto pb-1">
            <button class="btn btn-primary" type="button">
              Registrate
            </button>
          </div>
        </Link>
        <Link to="/login">
          <div class="d-grid gap-2 col-6 mx-auto pb-3">
            <button class="btn btn-primary" type="button">
              Iniciar sesión
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
}
export default Portada;
