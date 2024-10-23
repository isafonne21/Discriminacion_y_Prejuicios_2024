import React from 'react'
import Menu_login from '../componentes/Menu_login'
import Profile_usuario from "../componentes/Profile_usuario"

function Profile(){
  return (
    <div className="container">
      <Menu_login/> 
      <Profile_usuario/>
    </div>  
  )
}
export default Profile;