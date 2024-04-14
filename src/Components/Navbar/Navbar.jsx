import React from 'react'
import './Navbar.css';
import logo from '../Assests/bliss-logo.png';
import cart from '../Assests/add-to-cart.png';
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img className='icons' src={logo} alt="florist logo here" />
        <p>The florist</p>
      </div>
        <ul className="nav-menu">
          <li>Home</li>
          <li>Product</li>
          <li>Wedding & Event</li>
          <li>About Us</li>
        </ul>
        <div className="nav-login-cart">
          <button>Login</button>
          <img className='icons' src={cart} alt="cart" />
        </div>
    </div>
  )
}

export default Navbar
