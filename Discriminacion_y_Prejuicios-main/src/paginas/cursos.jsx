import React from "react";
import Menu_login from "../componentes/Menu_login";

function Cursos() {
  return (
    <div className="Inicio">
      <Menu_login />
      <div className="info-section">
        <center>
          {" "}
          <h1>Acá encontrarás</h1>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">CONTENIDOS</th>
                <th scope="col"></th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Introducción a la Discriminacion</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Tipos de Discriminación</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Discriminación vs Prejuicios</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>Impacto psicológico</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">5</th>
                <td>Prejuicios implícitos</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">6</th>
                <td>Testimonios personales</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">7</th>
                <td>Discriminación vs Prejuicios</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">8</th>
                <td>Diversidad educativa</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">9</th>
                <td>Prevención del acoso basado en prejuicios</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">10</th>
                <td>Empoderamiento y autoestima</td>
                <td></td>
                <td></td>
              </tr>
              
            </tbody>
          </table>
        </center>
            </div>
          </div>
  );
}
export default Cursos;
