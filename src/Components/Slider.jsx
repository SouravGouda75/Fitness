import React from 'react'
import "./Slider.css"
const Slider = () => {
  return (
    <div className='Slider'>
      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://www.bodybuilding.com/fun/images/2015/fitness360-tabitha-klausen.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://sportsmatik.com/uploads/matik-sports-corner/matik-know-how/bodybuilding_1498893908_29288.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3Cz4Zb6uoqCI0I5oLmGlrHuC1HhHiVfgTVw&usqp=CAU" className="d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}

export default Slider
