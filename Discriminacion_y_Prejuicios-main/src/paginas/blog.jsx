import React from 'react'
import Menu from '../componentes/Menu'

function Blog(){
  return (
    <div className='Blog'>
      <Menu/>
      <div className="info-section">
        <center>
          {" "}
          <h1>BIENVENIDOS</h1>
          <p>
            Creemos firmemente que el cambio comienza con la conciencia y el
            diálogo. Aquí, nos comprometemos a proporcionar un entorno seguro y
            respetuoso para todos.
          </p>
          <p>
            Queremos que este sitio sea un punto de partida para conversaciones
            significativas y para el desarrollo de una comprensión más profunda
            sobre estos temas cruciales.
          </p>
        </center>
        <video width="300" controls class="rounded mx-auto d-block">  
          <source src={video} type="video/mp4"/>
        </video>
       <Cursosinicial/> 
      </div>
    </div>


  );
}
export default Blog;