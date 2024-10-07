import React from 'react'
import { useSelector } from 'react-redux'
import LinkNav from './LinkNav'

function UserData() {
  const user = useSelector( store => store.user.user)
  const role = ( role ) =>{
    if (role === 'admin') return 'Administrador'
    if (role === 'instructor') return 'Instructor'
    if (role === 'user') return 'Usuario'

  }
  if (user){
    return (
    <figure className='container d-flex flex-column'>
        <img src={user.photo} className='portrait_offcanvas' alt="user_photo" />
        <figcaption>{user.firstName} {user.lastName}</figcaption>
        <span>{role(user.role)}</span>
        <LinkNav content={'Perfil Personal'} path={`/private/profile/${user._id}`} />
        <LinkNav content={'Panel de Instructor'} path={`/private/instructor`} />
    </figure>
  )
  }
  return null
}

export default UserData
