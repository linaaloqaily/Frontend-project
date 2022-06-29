import React from 'react'
import './Card.css'
import Carousel from '../Carousel/Carousel';


function Card({song}) {

  return (
    <>
      <br/>
      
      <div className="container">
          <h3 className="text-center">Enjoy with us and listen to your favorite song</h3>
          <hr/>
          <br/>
      </div>
      <div className="songCard row">
      <div className="col">
          <div className="card">
              <img src={song.img} alt='img1' />
              <audio src={song.src.id} />
              <div className="card-body">
              <h5 className="card-title">{song.name}</h5>
                <p className="card-text">{song.uNm}</p>
              </div>
            </div>
      </div>      
      </div>
   
  </>
    
  )
}

export default Card