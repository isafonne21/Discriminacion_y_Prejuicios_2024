import React from 'react'
import Menu from '../componentes/Menu'
import Profile_usuario from "../componentes/Profile_usuario"

function Profile(){
  return (
    <div className="container">
      <Menu/> 
      <Profile_usuario/>
    </div>  
  )
}
export default Profile;