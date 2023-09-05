import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
function NavvBar({add}) {
  const [title, settitle] = useState("")
  const [description, setdescription] = useState("")
  const [rating, setrating] = useState("")
  
  const validateInput = () => {
    if (title.trim() === "" || description.trim() === "") {
      alert("Veuillez remplir tous les champs.");
      return false;
    }
    return true;
  }
  const navigate = useNavigate();
  const handleClick=()=>{
    if (validateInput()) {
      // Les champs sont valides, ajoutez le film
      add(title, description, rating);
      // Effacez les champs après l'ajout
      settitle("");
      setdescription("");
      navigate('/');
    }
  
  }

  return (
    <div className='navbar'>
    


<label>title</label>
<input onChange={(e)=>settitle(e.target.value)}/>
<label>des</label>
<input onChange={(e)=>setdescription(e.target.value)}/>
<label>rating</label>
<input type='number' max={5} onChange={(e)=>setrating(e.target.value)}/>
<button onClick={()=>handleClick()}>save</button>

</div>
    
    
  )
}

export default NavvBar