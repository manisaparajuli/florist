import React from 'react'
import "./AboutUs.css"
import missionImage from "../Assests/mission.png"

const AboutUs = () => {
  return (
      <>
      <div className='mission-container'>
        <img src={missionImage} alt="" />
        <div className='mission-content'>
          <hr />
          <h2>Our Mission:</h2>
          <hr />
          <p>we're on a mission to turn events into unforgettable experiences through creative floral design and innovative decoration. With a focus on excellence, sustainability, and client collaboration, we craft bespoke arrangements that push boundaries and leave lasting impressions. Our goal is simple: to make every occasion a cherished memory.</p>
        </div>
      </div>

        <div className='aboutus-second-container'>
          <h2>Why Us:</h2>
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
        </div> 
      </>
  )
}

export default AboutUs
