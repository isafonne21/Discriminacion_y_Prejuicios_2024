import React from 'react'
import Menu_login from '../componentes/Menu_login'
import prejuicio from '../imagenes/prejuicio.mp4'

function Blog(){
  return (
    <div className='Blog'>
      <Menu_login/>
      <center>
        {""}
        <div className="card mt-4 mx-4">
          <div className="card-body">
            <h4>¿QUÉ ES LA DISCRIMINACIÓN?</h4>
            <p>
              La discriminación se refiere a cualquier acción que trata a una persona de manera desigual o injusta debido a características como su raza, género, orientación sexual, religión o discapacidad.
            </p>
          </div>
        </div>
        <div className="card mt-4 mx-4">
          <div className="card-body">
            <h4>¿QUÉ SON LOS PREJUICIOS?</h4>
            <p>
              Los prejuicios son opiniones o juicios formados sin suficiente conocimiento, razón o experiencia. A menudo se basan en estereotipos.
            </p>
          </div>
        </div>
      </center>
  
      <video width="300" controls class="rounded mx-auto d-block">  
        <source src={prejuicio} type="video/mp4"/>
      </video>
  
      
    <hr></hr>
      <center>
      <h1>Preguntas frecuentes</h1>
      </center>
      <div class="accordion accordion-flush" id="accordionFlushExample">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
              ¿Qué puedo hacer si soy víctima de discriminación?
            </button>
          </h2>
          <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">Si enfrentas discriminación, es importante buscar apoyo. Esto puede incluir hablar con amigos, familiares o profesionales que puedan ayudarte. También puedes considerar reportar la discriminación a las autoridades correspondientes, dependiendo de la situación.</div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
              ¿Cómo puedo reconocer mis propios prejuicios?
            </button>
          </h2>
          <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">Reconocer los propios prejuicios puede ser un proceso difícil, pero es fundamental. Puedes comenzar reflexionando sobre tus propias creencias y suposiciones. Pregúntate cómo estas pueden afectar tus interacciones con los demás.</div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
              ¿Cuáles son las consecuencias de la discriminación?
            </button>
          </h2>
          <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">Las consecuencias de la discriminación pueden ser graves e incluyen problemas de salud mental, como ansiedad y depresión, así como limitaciones en el acceso a oportunidades laborales y educativas. También puede generar tensiones sociales y divisiones en la comunidad.</div>
          </div>
        </div>
      </div>
 
        
      
      
    </div>
    
    
  );
}
export default Blog;