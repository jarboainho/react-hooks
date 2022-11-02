import React from 'react'
import '../MoviesCard/MoviesCard.css'
import StarRatingComponent from 'react-star-rating-component';

const MoviesCard = ({movie}) => {
  return (
    <div>
      <div className='movie_card' id='bright'>
  <div className='info_section'>
    <div className='movie_header'>
      <img className='locandina' src={movie.img} alt="/"/>
      <h1>{movie.title}</h1>
      <h4>2017, David Ayer</h4>
      <span className='minutes'>117 min</span>
      <p className='type'>Action, Crime, Fantasy</p>
      <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={movie.rating}
        />
    </div>
    <div className='movie_desc'>
      <p className='text'>
        {movie.desc} 
      </p>
    </div>
  </div>
  <div className='blur_back'></div>
</div>
  </div>
  
   
  )
}

export default MoviesCard