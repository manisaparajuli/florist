import React from 'react'
import './Hero.css'
import image2 from '../Assests/Peperomia.png'
import Items from '../items/Items'

const Hero = () => {
  return (
    <>
      <div className='hero-container'>
        <h1><span className='green-text'>Elevate</span>  your moments with our <br/><span className='yellow-text'> enchanting </span> blooms.</h1>
        <button>View all product </button>
      </div>
      <div className='image-container'>
        <img src={image2} alt="plant image" className='second-image'/>
      </div>
      <h2> People's choice:</h2>
      <Items/>
    </>
  )
}

export default Hero
