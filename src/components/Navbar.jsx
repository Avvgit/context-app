import React from 'react'
import { useContext } from 'react'
import UserContext from '../contexts/UserContext'

export const Navbar = () => {

const { user, login, logout } = useContext(UserContext); // login y logout de userContext para los botones iniciar y cerrar sesion

  return ( // ClassName de bootstrap
    <nav className='navbar navbar-dark bg-dark mb-4'> 
      <div className='container'>

          <span className='navbar-brand'> 
            <h1>{user ? `Hola ${user.name}` : 'Bienvendi@'}</h1>
          </span>

          { user 
          ? <button className='btn btn-primary' onClick={logout}>
             Cerrar sesión
            </button>

          : <button className='btn btn-primary' onClick={login}>
             Iniciar sesión
            </button>
          }

      </div>
    </nav>
  )
}