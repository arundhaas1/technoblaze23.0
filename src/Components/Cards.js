import React from 'react'
import './Cards.css'

function Cards(props) {
  return (
    <div to="/register" style={{textDecoration:"none",color:"black"}} className="cards">
      <div className="cards__img">
        <img
          alt=""
          src={props.url}
        />
      </div>
      <p>{props.name}</p>
    </div>
  )
}

export default Cards