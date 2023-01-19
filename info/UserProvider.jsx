import React from 'react'
import { useState } from 'react'
import UserContext from '../src/contexts/UserContext'

const initialUser = { 
  id:1, 
  name: 'Alejandro', 
  favoritesMovies: [1,2]
}

export const UserProvider = ({children}) => {
  
  const [user, setUser] = useState(initialUser)
  const login = () => {
    setUser(initialUser);
  }
  const logout = () => {
    setUser(null);
  }
  const data = { user, login, logout }
  return (
      <UserContext.Provider value={data}>
        { children }
      </UserContext.Provider>
  )
}
