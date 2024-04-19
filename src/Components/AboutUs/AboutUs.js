import React from 'react'
import "./AboutUs.css"
import missionImage from "../Assests/missionImg.png"
import whyUsImage from "../Assests/whyUs.png"
import missionImg from "../Assests/missionst.jpg"

const AboutUs = () => {
  return (
      <>
      <div className='mission-first-section'>
        <img src={missionImg} alt="" />
        <div className='first-section-content'>
          <hr />
          <h2>Our Mission:</h2>
          <hr />
          <p>we're on a mission to turn events into unforgettable experiences through creative floral design and innovative decoration. With a focus on excellence, sustainability, and client collaboration, we craft bespoke arrangements that push boundaries and leave lasting impressions. Our goal is simple: to make every occasion a cherished memory.</p>
        </div>
      </div>
      <div className='growth-section'>
        <hr />
        <h2>Growing fast:</h2>
        <div className='growth-section-content'>
          <div>
            <h2>120%</h2>
            <p>Our growth last year was amazing, and it motivates us to achieve even more.</p>
          </div>
          <div>
            <h2>50+</h2>
            <p>We have a team of over 50 dedicated staff members to meet our customers' demands.</p>
          </div>
          <div>
            <h2>9+</h2>
            <p>We operate more than 9 stores across Australia.</p>
          </div>
        </div>
        <hr />
      </div>
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
          <div className='third-section-list'>
            <hr />
            <h2>Why Us:</h2>
            <hr />
            <ul className=''>
              <li>Customized floral designs tailored to your unique style and preferences</li>
              <li>Expert event coordination to ensure flawless execution and peace of mind </li>
              <li>Premium quality, fresh blooms sourced for stunning, long-lasting arrangements.</li>
            </ul>
          </div>
          <img src={whyUsImage} alt="" />
        </div> 
      </>
  )
}

export default AboutUs
