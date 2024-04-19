import React from 'react'
import './Event.css'
import floraFrame from "../Assests/floraframe.png"
import brideImage from "../Assests/brides.jpg"
import brideBouquet from "../Assests/wedding-bouquet.jpg"
import Promo from '../Promo/Promo'
import decors from "../Assests/decors.jpeg"

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
          <img src={floraFrame} alt=""  className='image-flip'/>
        </div>
        <hr />
      </div>

      <div className='fourth-section'>
        <img src={decors} alt="" />
        <div className="fourth-section-content">
          <p>Whether you're planning an intimate gathering or a grand celebration, The florist is here to make your event truly unforgettable. Contact us today to schedule a consultation and discover how we can turn your dreams into reality with our exquisite floral arrangements and event decoration services. Let's create moments that will be cherished for a lifetime!</p>
          <button>Contact us.</button>
        </div>
      </div>
    </>
  )
}

export default Event
