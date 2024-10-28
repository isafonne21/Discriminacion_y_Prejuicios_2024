import React from 'react'
import Menu_login from '../componentes/Menu_login'

function Metodología(){
  return (
    <div className='Metodología'>
      <Menu_login/>
      <div className="info-section">
      <center>
        {""}
        <h5>Bienvenido a Nuestra Comunidad de Apoyo en Salud Mental</h5>
        <p>
          En esta sección, encontrarás un espacio diseñado para ofrecer apoyo emocional, orientación psicológica y recursos educativos enfocados en la salud mental y la lucha contra la discriminación.
        </p>
      </center>
         <div className="info-section">
         <center>
        <h4>Servicios de asesoría y apoyo psicológico</h4>
         </center>
         </div>
        <div className="card mt-2 mx-3">
          <div className="card-body">
            <p>
             <strong>Terapia en línea: </strong>Sesiones individuales o grupales a través de videollamadas para brindar acceso a personas que buscan apoyo psicológico.
            </p>
          </div>
        </div>
         
        
        <div className="card mt-4 mx-3">
          <div className="card-body">
            <p>
              <strong>Consulta Psicológica Gratis: </strong>
              Sesiones introductorias gratuitas o a bajo costo para orientar a los nuevos usuarios.
            </p>
          </div>
        </div>
        <div className="info-section">
           <center>
          <h4>Recursos educativos</h4>
           </center>
           </div>
        
        <div className="card mt-2 mx-3">
          <div className="card-body">
            <p>
             <strong>Blog de salud mental: </strong>Artículos sobre salud mental, autocuidado, y estrategias de afrontamiento.
            </p>
          </div>
        </div>
        <div className="card mt-4 mx-3">
          <div className="card-body">
            <p>
             <strong>Guías contra la discriminación: </strong> Información sobre cómo identificar y combatir la discriminación y cómo apoyar a víctimas.
            </p>
          </div>
        </div>
        <div className="info-section">
           <center>
          <h4>Programas de inclusión y diversidad</h4>
           </center>
           </div>

        <div className="card mt-2 mx-3">
          <div className="card-body">
            <p>
             <strong>Talleres y cursos en línea: </strong>Programas de educación sobre diversidad, igualdad e inclusión, impartidos por expertos.
            </p>
          </div>
        </div>
        <div className="card mt-4 mx-3">
          <div className="card-body">
            <p>
             <strong>Programas de Apoyo para Grupos Vulnerables: </strong> Servicios especiales para comunidades vulnerables, como personas LGBTQ+, minorías étnicas, y personas con discapacidades.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Metodología;