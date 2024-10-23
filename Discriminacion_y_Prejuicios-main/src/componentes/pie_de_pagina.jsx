import React from "react";
import { Link } from "react-router-dom";
import prejuicios from "../imagenes/prejuicios.jpg";
import { FaArrowDown } from "react-icons/fa6";


function Pie_de_pagina() {
  return (
    <div className="footer">
      <div className="container fluid">
        <div className="row mx-auto">
          <div className="text-center mx-auto">
            <img src={prejuicios} alt="imagen" width={300} vspace={25} />
            <hr></hr>

            <p className="px-3">
              <small>
                Hola! Somos Discriminación y prejuicios, presiona abajo para conocernos. 
              </small>
            </p>
            <section className="pb-1">
            <p className="px-5">
                 <FaArrowDown />
            </p>
            </section>
            <section className="text-center pb-4">
              <Link to="/Profile" className="btn btn-primary">
                Conócenos
              </Link>
            </section>
          </div>
          

          <div id="copyright">
            <hr />
            <p>
              {" "}
              <small>La Salle 2024. Todos los derechos reservados</small>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pie_de_pagina;
