import React from 'react'
import { useContext } from 'react';
import UserContext from '../contexts/UserContext';

export const Movie = ({ movie }) => { // en las props recibimos el movie desde MovieList

  const { favoriteMovieOrNot } = useContext(UserContext);

  const imgStyles = { //bootstrap
    height: '260px',
    objectFit: 'cover'
  }

  const { user } = useContext(UserContext);

  const isFavorite = user?.favoriteMovies?.includes(movie.id); // Si user?.favoriteMovies? contiene la pelicula (movie.id) . user se carga tambien en un contexto.

  return (
    <div className='card'>
      <img 
          src={movie.imageUrl}
          alt={movie.title}
          className='card-img-top'
          style={imgStyles}
      />
      <div className='card-body'> 
        <h4>{movie.title}</h4>
          { user?.id && //Si existe el user muestra el boton; ? si es null no lo muestre
          <button className={`btn ${isFavorite ? 'btn-success' : 'btn-outline-primary'}`} // Si la pelicula es favorita me carga btn-succes, sino la otra.

           onClick={() => favoriteMovieOrNot(movie.id)}> 
            Favorito
          </button>
          }  
      </div>
    </div>
  )
}
