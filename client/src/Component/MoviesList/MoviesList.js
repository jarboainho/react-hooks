
import React from 'react'
import MoviesCard from '../MoviesCard/MoviesCard'

const MoviesList = ({movies}) => {
  return (
    <div>
        {movies.map(movie =><MoviesCard movie={movie} key={movie.id}/> )}
    </div>
  )
}

export default MoviesList