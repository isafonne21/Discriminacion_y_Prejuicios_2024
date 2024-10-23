import React from "react";
import Menu_login from "../componentes/Menu_login";

function QS() {
  return (
    <div className="Inicio">
      <Menu_login />
      <div className="info-section">
        <center>
          {" "}
          <div className="card mb-3">
            <div className="card-body">
              <h1>¿QUIÉNES SOMOS?</h1>
              <p>
                En Discriminacion y Prejuicios, nos dedicamos a proporcionar
                recursos, apoyo y orientación en temas de salud mental. Creemos
                firmemente en la importancia del bienestar emocional y en el
                poder de la información para transformar vidas.
              </p>
            </div>
          </div>
          <div className="card mb-3">
            <div className="card-body">
              <h1>MISIÓN</h1>
              <p>
                Nuestra misión es empoderar a las personas en su camino hacia el
                bienestar mental, proporcionando acceso a recursos confiables,
                herramientas de autogestión, y apoyo profesional. Nos dedicamos
                a crear un entorno inclusivo y seguro donde cada individuo pueda
                encontrar el acompañamiento necesario para enfrentar los
                desafíos emocionales y alcanzar una vida plena.
              </p>
            </div>
          </div>
          <div className="card mb-3">
            <div className="card-body">
              <h1>VISIÓN</h1>
          
              <p>
                Aspiramos a un mundo donde la salud mental sea reconocida como
                un pilar fundamental del bienestar integral, accesible para
                todos sin importar su origen o situación. Nos comprometemos a
                liderar un cambio cultural en el que hablar de salud mental sea
                tan natural como cuidar del cuerpo, promoviendo la empatía, la
                educación, y el acceso universal a recursos de calidad.
              </p>
            </div>
          </div>
          <div className="card mb-3">
            <div className="card-body">
              <h5>
                Gracias por unirte a nosotros en esta misión, estamos
                emocionados de tenerte aquí y esperamos trabajar contigo para
                construir un futuro más inclusivo para todos.
              </h5>
            </div>
          </div>
        </center>
      </div>
    </div>
  );
}
export default QS;
