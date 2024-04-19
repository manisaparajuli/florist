import React from 'react'
import './Event.css'
import floraFrame from "../Assests/floraframe.png"
import brideImage from "../Assests/brides.jpg"
import brideBouquet from "../Assests/wedding-bouquet.jpg"
import Promo from '../Promo/Promo'

const Event = () => {
  return (
    <>
      <Promo/>
      <div className='second-section'>
        <div className='second-content'>
          <hr />
          <h2>Our current offer :</h2>
          <hr />
          <p>We're excited to announce a special offer on our exquisite flower arrangements for functions and events! For a limited time, we're offering an exclusive 30% discount on all floral designs tailored for your special occasions. Whether you're planning a wedding, corporate event, or milestone celebration, our expert florists will create stunning arrangements that perfectly complement your theme and vision. Don't miss out on this fantastic opportunity to enhance your event with our discounted flower arrangements!</p>
          
        </div>
        <div className='images'>
          <img src={brideBouquet} alt="bride holding her bridal bouquet "  className='second-image'/>
          <img src={brideImage} alt="bride in between beautiful decor" className='first-image'/>
        </div>
      </div>
      <div className='third-section'>
        <hr />
        <div className='third-section-content'>
          <img src={floraFrame} alt="" />
          <p>From elegant bouquets to enchanting centerpieces, our skilled florists are here to transform your vision into reality. </p>
        </div>
        <hr />
      </div>
    </>
  )
}

export default Event
