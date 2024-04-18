import React from 'react'
import backgroundImg from '../Assests/eventBg.png'
import './Event.css'
import twoImg from "../Assests/2.png"

const Event = () => {
  return (
    <>
      <div className='event-container'>
        
          {/* <img src={backgroundImg} alt="" /> */}
          
        
        <div className='event-content'>
          <h2> <span>Up to 30% off</span> is always something to party about.</h2>
          {/* <p>We're excited to announce a special offer on our exquisite flower arrangements for functions and events! For a limited time, we're offering an exclusive 30% discount on all floral designs tailored for your special occasions. Whether you're planning a wedding, corporate event, or milestone celebration, our expert florists will create stunning arrangements that perfectly complement your theme and vision. From elegant centerpieces to breathtaking bouquets, our flowers will add an extra touch of beauty and sophistication to your event while saving you money. Don't miss out on this fantastic opportunity to enhance your event with our discounted flower arrangements!</p> */}
          <button>View Current Offers</button>
        </div>
          <img src={twoImg} alt="" />
      </div>

      <div>

      </div>
    </>
  )
}

export default Event
