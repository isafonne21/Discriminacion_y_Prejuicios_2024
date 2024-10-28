import React from 'react'
import Menu_login from '../componentes/Menu_login'

function Relacionate(){
  return (
    <div className='Relacionate'>
      <Menu_login/>

      <center>
        {""}
        <div className="mt-4 mx-4">
          <div className="body">
            <h4>RELACIÓNATE CON MÁS PERSONAS</h4>
          </div>
          <p> Conoce nuestros mejores asistentes psicológicos y charla y aprende con ellos </p>  
        </div>
        <table class="table">
          <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Asistente</th>
              <th scope="col">Contacto</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Carolina Giraldo</td>
              <td> +57 320 7231996</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td> Carmenza Zapata</td>
              <td>+57 314 7175742</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td> Nicole Taborda</td> 
              <td>+57 318 8625714</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Vladimir Jessurum</td> 
              <td>+57 304 6500231</td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td> Gustavo Petro </td> 
              <td>+57 322 5232070</td>
            </tr>
            <tr>
              <th scope="row">6</th>
              <td> Paola Suarez</td> 
              <td> +57 323 2951707 </td>
            </tr>
          </tbody>
        </table>
        </table>
      </center>    
      <div className="mt-4 mx-4">
        <p> A continuación podrás opinar sobre este tema de interés </p>
      </div>

      <div id="carouselExampleIndicators" class="carousel slide">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://www.psyalive.com/blog/wp-content/uploads/2021/10/bullying.jpg" class="d-block w-100"/>
          </div>
          <div class="carousel-item">
            <img src="https://media.glamour.mx/photos/64652afe1fb01f9d7570e5c6/16:9/w_2560%2Cc_limit/es_malo_ir_al_psicologo.jpg" class="d-block w-100"/>
          </div>
          <div class="carousel-item">
            <img src="https://media.istockphoto.com/id/117148620/es/foto/young-boy-looking-para-personas-con-discapacidades-a-sus-compa%C3%B1eros-de-salir-fuera-de-%C3%A9l.jpg?s=612x612&w=0&k=20&c=xgRQKZKLCSW0UY93fmR3qE2WbfgZPo2PkXlZHhhMiIo=" class="d-block w-100"/>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Anterior</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Siguiente</span>
        </button>
      </div>



         <form>
      <div size="mx-auto">  
        <div className="mt-4 mx-4"> 
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Escribe tu correo</label>
          <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="nombre@ejemplo.com"/>
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">Dinos qué opinas</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Enviar</button>
      </div>
      </form>





      
    </div>
  );
}
export default Relacionate;