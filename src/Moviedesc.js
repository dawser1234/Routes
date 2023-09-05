import React from 'react'
import { Button } from "react-bootstrap"
import { Link, useParams } from "react-router-dom"

function Moviedesc({info}) {
    const {id} = useParams()
  return (
    <div> {info.filter((el)=>el.id==id).map((el)=>
        <div key={el.id}> 
        <h2 style={{color:"white"}}>{el.title}</h2>
        <iframe width="560" height="315" src={el.trailerSrc} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <Link to="/">
        <Button >Go Home</Button>
        </Link>
        </div>)}
        </div>
  )
}

export default Moviedesc