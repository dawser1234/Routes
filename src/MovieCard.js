import React from 'react'
import { useState } from 'react'
import { Rating } from 'react-simple-star-rating';
import { Link } from 'react-router-dom';

function MovieCard({el}) {
  return (
    
    <div className="card cart" style={{width: '18rem'}}>
  <img src={el.posterUrl} className="card-img-top" alt="photo" />
  <div className="card-body">
    <h5 className="card-title"> {el.title}</h5>
    <p className="card-text"> {el.description}</p>
    <p className="card-text">{el.trailerSrc}</p>
    <Rating iconsCount={5} readonly={true} initialValue={el.rating}/>
   
    <Link to={`/${el.id}`}>
    <button style={{ backgroundColor: "violet" }}>Description</button>
  </Link>
 </div>
</div>


  )
}

export default MovieCard