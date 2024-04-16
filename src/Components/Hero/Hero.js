import React from 'react'
import './Hero.css'
import image2 from '../Assests/Peperomia.png'
import indoorplant from "../Assests/indoorPlant.jpg"
import { useNavigate } from 'react-router-dom'

const Hero = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className='hero-container'>
        <h1><span className='green-text'>Elevate</span>  your moments with our <br/><span className='yellow-text'> enchanting </span> blooms.</h1>
        <button onClick={() => navigate("/product")}>View all product </button>
      </div>
      <div className='image-container'>
        <img src={image2} alt="plant " className='second-image'/>
      </div>
      <div className='scroll-container'>
        <div className='scroll-text'>Elevate your indoor space with lush, organic plants meticulously grown by our expert sellers, bringing natural beauty and freshness to your home.</div>
      </div>
      <div className='indoorplant-section'>
        <img src={indoorplant}  alt="" className='indoorplant'/>
        <div className='description'>
          <h2>We grow our plants</h2>
          <p>Delight in the assurance that our plants are cultivated with meticulous care, undergoing thorough inspections to guarantee they are organically grown and entirely free from harmful chemicals. Experience the joy of transforming your indoor environment into a verdant sanctuary, as our lush and vibrant selection breathes new life into your space, creating a refreshing oasis of natural beauty and tranquility.</p>
        </div>
      </div>
      <div className='low-price-section'>
        <h2>Lowest price guarantee</h2>
        <p>At our website, we proudly offer a Lowest Price Guarantee, ensuring that you always get the best deal possible. If you find the same product elsewhere at a lower price, we'll match it or refund the difference, because your satisfaction and savings are our top priority.</p>
      </div>
      <div className="subscribe">
        <h2 className="subscribe-title">Let's keep in touch</h2>
        <p className="subscribe-copy">Subscribe to keep up with fresh news and exciting updates. We promise not to spam you!</p>
        <div className="form">
          <input type="email" className="form-email" placeholder="Enter your email address" />
          <button className="form-button">Send</button>
        </div>
        <div className="notice">
          <input type="checkbox"/>
          <span className="notice-copy">I agree to my email address being stored and uses to recieve monthly newsletter.</span>
        </div>
      </div>
      <div className='scroll-container'>
        <div className='scroll-text'>Elevate your indoor space with lush, organic plants meticulously grown by our expert sellers, bringing natural beauty and freshness to your home.</div>
      </div>
      
    </>
  )
}

export default Hero
