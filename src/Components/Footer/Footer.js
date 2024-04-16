import React from 'react'
import './Footer.css'
import {Link} from 'react-router-dom'
const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="footer-col">
              <h4>company</h4>
              <ul>
                <li><Link to="/about">about us</Link></li>
                <li><Link to="#">our services</Link></li>
                <li><Link to="#">privacy policy</Link></li>
                <li><Link to="#">affiliate program</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>get help</h4>
              <ul>
                <li><Link to="#">FAQ</Link></li>
                <li><Link to="#">shipping</Link></li>
                <li><Link to="#">returns</Link></li>
                <li><Link to="#">order status</Link></li>
                <li><Link to="#">payment options</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>online shop</h4>
              <ul>
                <li><Link to="#">Indoor plants</Link></li>
                <li><Link to="#">Plant seeds</Link></li>
                <li><Link to="#">Bouquets</Link></li>
                <li><Link to="#">Flower arrangment</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>follow us</h4>
              <div className="social-links">
                <Link to="#"><i className="fab fa-facebook-f"></i></Link>
                <Link to="#"><i className="fab fa-twitter"></i></Link>
                <Link to="#"><i className="fab fa-instagram"></i></Link>
                <Link to="#"><i className="fab fa-linkedin-in"></i></Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
