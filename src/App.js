import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from './MovieList';
import NavvBar from './NavvBar';
import { useState } from 'react';
import { Rating } from 'react-simple-star-rating';
import arr from './data';
import {Routes,Link,Route, useNavigate}from 'react-router-dom';
import Moviedesc from './Moviedesc';
function App() {
  const [DATA, setDATA] = useState(arr);
  const [rating, setRating] = useState(0);
  const [search, setSearch] = useState("");

  const handleRating = (rate) => {
    setRating(rate);
  }

  const add = (title, description, rating) => {
    setDATA([...DATA, { title, description, rating }]);
  }

  return (
    <div className="">
      <Routes>
        <Route path='/Add' element={<NavvBar add={add} />} />
        <Route path=":id" element={<Moviedesc info={DATA} />} />
        <Route path='/' element={
          <div>
            <input placeholder='Search app' onChange={(e) => setSearch(e.target.value)} />
            <Rating onClick={handleRating} ratingValue={rating} />
            
            <MovieList
              info={DATA.filter((el) => el.title.toLowerCase().includes(search.toLowerCase()) && el.rating >= rating)}
            />
          </div>
        } />
      </Routes>
    </div>
  );
}
export  default App