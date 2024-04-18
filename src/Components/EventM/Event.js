import React from 'react'
import './Event.css'
import promoImg from "../Assests/promoImage.png"
import brideImage from "../Assests/brides.jpg"
import brideBouquet from "../Assests/wedding-bouquet.jpg"

const Event = () => {
  return (
    <>
      <div className='event-container'>
        <div className='event-content'>
          <h2> <span>Up to 30% off</span> is always something to party about.</h2>
          <button>View Current Offers</button>
        </div>
          <img src={promoImg} alt="" />
      </div>

      <div className='second-section'>
        <div className='second-content'>
          <hr />
          <h2>Why choose us:</h2>
          <hr />
          <p>We're excited to announce a special offer on our exquisite flower arrangements for functions and events! For a limited time, we're offering an exclusive 30% discount on all floral designs tailored for your special occasions. Whether you're planning a wedding, corporate event, or milestone celebration, our expert florists will create stunning arrangements that perfectly complement your theme and vision. From elegant centerpieces to breathtaking bouquets, our flowers will add an extra touch of beauty and sophistication to your event while saving you money. Don't miss out on this fantastic opportunity to enhance your event with our discounted flower arrangements!</p>
          
        </div>
        <div className='images'>
          <img src={brideBouquet} alt="bride holding her bridal bouquet "  className='second-image'/>
          <img src={brideImage} alt="bride in between beautiful decor" className='first-image'/>
        </div>
      </div>
{/* 
      <div>
        <ul className='third-section-list'>
            <li>
              Customized floral designs tailored to your unique style and preferences.
            </li>
            <li>
              Expert event coordination to ensure flawless execution and peace of mind.
            </li>
            <li>
              Premium quality, fresh blooms sourced for stunning, long-lasting arrangements.
            </li>
          </ul>
      </div> */}
    </>
  )
}

export default Event
