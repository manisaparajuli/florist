import React from 'react'
import './Hero.css'
import image1 from '../Assests/firstImage.png'
import image2 from '../Assests/secondImage.png'
import image3 from '../Assests/thirdImage.png'


const Hero = () => {
  return (
    <>
      <div className='hero-container'>
        <h1><span className='green-text'>Elevate</span>  your moments with our <br/><span className='yellow-text'> enchanting </span> blooms.</h1>
        <button>View all product </button>
      </div>
      <div className='image-container'>
        {/* <img src={image1} alt="plant image" className='first-image'/>  */}
        <img src={image2} alt="plant image" className='second-image'/>
        {/* <img src={image3} alt="plant image" className='third-image'/> */}
        
      </div>
    </>
  )
}

export default Hero
