import React, { useContext } from 'react'
import MoviesContext from '../contexts/MoviesContext'
import { Movie } from './Movie'

export const MovieList = () => {

  const { movies } = useContext(MoviesContext);

  return (
    <div className='container'>
      <div className='row'>
        { movies.map(movie => ( //como {initilMovies} es un arreglo, vamos a iterar mediante map y retornar una pelicula completa y hay que agregar un Key con un valor unico: movie.id
          <div className='col-md-4' key={movie.id}> 
            <Movie 
              movie={ movie } //Se le pasa la informaccion del objeto
            />
          </div>
        ))}
      </div>
    </div>
  )
}

