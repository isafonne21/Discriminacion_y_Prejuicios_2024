import React from 'react'
import { Link } from 'react-router-dom'

function Menu() {
  return (
    <div className='header'>
       <nav class="navbar navbar-expand-lg bg-body-tertiary">
         <div class="container-fluid">
           <Link class="navbar-brand" to="">
             <i>
             Discriminación y prejuicios
         </i>
           </Link>
           <button
             class="navbar-toggler" 
             type="button" 
             data-bs-toggle="collapse" 
             data-bs-target="#navbarSupportedContent" 
             aria-controls="navbarSupportedContent" 
             aria-expanded="false" aria-label="Toggle navigation">
             
             <span class="navbar-toggler-icon"></span>
           </button>
           <div class="collapse navbar-collapse" id="navbarSupportedContent">
             <ul class="navbar-nav me-auto mb-2 mb-lg-0">
               <li class="nav-item">
                 <Link class="nav-link active" aria-current="page" to="/login">
                   Inicio de sesión
                 </Link>
               </li>
               <li class="nav-item">
                 <Link class="nav-link active" to="/registro">
                   Regístrate
                 </Link>
               </li>
               <li class="nav-item">
                 <Link class="nav-link active"to="/">
                   Inicio
                 </Link>
               </li>
             </ul>
            
           </div>
         </div>
       </nav>
      <div className="container">
        <form class="d-flex" role="search">
           <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"/>
          <button type="button" class="btn btn-secondary">Buscar</button>
         </form>
      </div>

      <div className="p-3">
        <div className="card text-center">
          <div className="card-header" style={{ backgroundColor: "#7cdaf9" }}>
             <strong> Bienvenido </strong> 
            </div>
          <div className="card-body" style={{backgroundColor: "#94e7ff"}}>
            <h4 className="encabezado fst-italic">Discriminación y prejuicios</h4>
            <p class="card-text">¡Bienvenidos a nuestra página!</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Menu;
