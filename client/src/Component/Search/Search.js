import React,{useState} from 'react'
import StarRatingComponent from 'react-star-rating-component';

const Search = () => {
    const [rating,setRating]=useState(1)
    const onStarClick=(nextValue, prevValue, name) => {
        setRating(nextValue);
    }
  return (                
        <div>
          <input type="text" className="form-control mb-2 mr-sm-2" placeholder="search movies" />
          <br></br>
          <StarRatingComponent 
            name="rate1" 
            starCount={5}
            value={rating}
            onStarClick={onStarClick}
          />
        </div>
      );
  }
export default Search