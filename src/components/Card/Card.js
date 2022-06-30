import React from 'react'
import './Card.css'
import Carousel from '../Carousel/Carousel';


function Card({song}) {

  console.log(song ,"hi");
  return (
    <>
      <br/>
 
      <div className="card">
        <a href={song.result.url}>
          <img src={song.result.song_art_image_url} alt='img1' width="100%" height="100%" />
          <div className="card-body">
          </div>
          </a>
          <h5> {song.result.title}</h5>

      </div>

  </>
    
  )
}

export default Card