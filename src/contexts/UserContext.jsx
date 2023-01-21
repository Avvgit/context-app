import React, { createContext, useState } from "react";

const UserContext = createContext();

const initialUser = {
  id: 1,
  name: 'Alejandro',
  favoriteMovies: [1,2]
};

const UserProvider = ({ children }) => { //prop 'children' contiene la info desde App.jsx

    const [user, setUser ] = useState(initialUser); //Valor inicial initialUser
    
    const login = () => { //Esta funcion normalmente se encargaria de hacer una peticion a la API y ver que las credenciales esten correctas pero el resultado final seria cargar el usuario, ejemplo initialUser
      setUser(initialUser);
    }
    const logout = () => { // login y logout se van para consumir en el navbar
      setUser(null);
    }

    const favoriteMovieOrNot = (movieID) => {

      const isFavorite = user.favoriteMovies.includes(movieID); 

      const favoriteMovies = isFavorite
      ? user.favoriteMovies.filter(favMovieId => favMovieId !== movieID)
      : [...user.favoriteMovies, movieID] // Agregar peliculas

      setUser({ 
        ...user, //...user trae los mismos atributos de user 
        favoriteMovies
      })
    }

    const data = { user, login, logout, favoriteMovieOrNot }

  return(
    <UserContext.Provider value={data}> 
      { children } 
    </UserContext.Provider>
  )
}

export { UserProvider };
export default UserContext;