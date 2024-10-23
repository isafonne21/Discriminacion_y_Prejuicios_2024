import React from 'react'
import Menu from '../componentes/Menu'
import Registro_usuario from '../componentes/registro_usuario'
import FormularioRegistro from '../componentes/FormularioRegistro';

function Registro(){
  return (
    <div className='Registro'>
      <Menu/>
      <FormularioRegistro/>

    </div>
  );
}

export default Registro