import React from 'react'

function Carousel() {
  return (
    <div>
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://rmc.dk/sites/default/files/styles/background_full_wide/public/node/field_image/rmc_uddannelse_music_management_0.jpg?h=d88fbc39&itok=qdS2rNsO" class="d-block w-100" alt="img1"/>
    </div>
    <div class="carousel-item">
      <img src="https://culturedvultures.com/wp-content/uploads/2016/03/music-video-band-lights.jpg" class="d-block w-100" alt="img2"/>
    </div>
    <div class="carousel-item">
      <img src="https://cms.kerrang.com/images/Nine-Inch-Nails-live-promo-2022-credit-Corinne-Schiavone.jpg" class="d-block w-100" alt="img3"/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default Carousel