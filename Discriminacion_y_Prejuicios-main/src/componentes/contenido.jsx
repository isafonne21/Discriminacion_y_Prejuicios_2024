import React from "react";
import logo from "../imagenes/logo.jpg";
import {Link} from "react-router-dom";

function Cursosinicial() {
  return (
    <div className="container">
      <h1 className="text-center my-4">Contenido</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card">
            <img src={logo} className="card-img-top" alt="Course 1" />
            <div className="card-body">
              <p>
                <small> Discriminación y prejuicios</small>
              </p>
              <h4 className="card-title">Metodología</h4>
              <p className="card-text">
                <small>
                  Ingresa para ver nuestra forma de trabajo y conocer los servicios que tenemos para ti.
                </small>
              </p>
              <div class="d-grid gap-2">
                <button class="btn btn-primary" type="button">Ver más</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src={logo} className="card-img-top" alt="Course 2" />
            <div className="card-body">
              <p>
                <small> Discriminación y prejuicios</small>
              </p>
              <h5 className="card-title">Blog informativo</h5>
              <p className="card-text">
                Encotrarás respuestas a tus dudas sobre discrminación y
                prejuicios por medio de imágenes, texto y más.
              </p>
              <Link to="/blog">
              <div class="d-grid gap-2">
                <button class="btn btn-primary" type="button">Ver más</button>
              </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src={logo} className="card-img-top" alt="Course 3" />
            <div className="card-body">
              <p>
                <small> Discriminación y prejuicios</small>
              </p>
              <h5 className="card-title">Relaciónate con más personas.</h5>
              <p className="card-text">
                Aquí encontrarás más personas con las que podrás hablar
                libremente de dichos temas sin sentirte juzgado.
              </p>
              <Link to="/relacionate">
              <div class="d-grid gap-2">
                <button class="btn btn-primary" type="button">Ver más</button>
                </div>
                </Link>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cursosinicial;
