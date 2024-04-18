import React from 'react'
import promoImg from "../Assests/promoImage.png"
import "./Promo.css"

const Promo = () => {
  return (
    <div className='event-container'>
      <div className='event-content'>
        <h2> <span>Up to 30% off</span> is always something to party about.</h2>
        <button>View Current Offers</button>
      </div>
      <img src={promoImg} alt="" />
    </div>
  )
}

export default Promo
