import React from 'react'
import './Hero.css'
import image2 from '../Assests/Peperomia.png'
import indoorplant from "../Assests/indoorPlant.jpg"


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
      <div className='scroll-container'>
        <div className='scroll-text'>Elevate your indoor space with lush, organic plants meticulously grown by our expert sellers, bringing natural beauty and freshness to your home.</div>
      </div>
      <div className='indoorplant-section'>
        <img src={indoorplant} alt="indoor plant plantations" className='indoorplant'/>
        <div className='description'>
          <h2>We grow our plants</h2>
          <p>Delight in the assurance that our plants are cultivated with meticulous care, undergoing thorough inspections to guarantee they are organically grown and entirely free from harmful chemicals. Experience the joy of transforming your indoor environment into a verdant sanctuary, as our lush and vibrant selection breathes new life into your space, creating a refreshing oasis of natural beauty and tranquility.</p>
        </div>
      </div>
      <div className='low-price-section'>
        <h2>Lowest price guarantee</h2>
        <p>At our website, we proudly offer a Lowest Price Guarantee, ensuring that you always get the best deal possible. If you find the same product elsewhere at a lower price, we'll match it or refund the difference, because your satisfaction and savings are our top priority.</p>
      </div>
      <div className='scroll-container'>
        <div className='scroll-text'>Elevate your indoor space with lush, organic plants meticulously grown by our expert sellers, bringing natural beauty and freshness to your home.</div>
      </div>
      
    </>
  )
}

export default Hero
