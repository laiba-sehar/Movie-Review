import React from 'react'
import './Header.css'
const movie = (props) => {
  return (
    <div className="Movie">
    <img src={props.img} alt="" />
    <p>{props.title}</p>
    <p>Year: {props.year}</p>
    </div>
  )
}

export default movie