import React, { useState } from 'react'
import './Navbar.css';
import logo from '../Assests/bliss-logo.png';
import cart from '../Assests/add-to-cart.png';

const Navbar = () => {
  const [activeItem, setActiveItem] = useState('Home'); 
  const handleItemClick = (item) => {
    setActiveItem(item);
  };
  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img  src={logo} alt="florist logo here" />
        <p>The florist</p>
      </div>
        <ul className="nav-menu">
          <li onClick={() => handleItemClick('home')} className={activeItem === 'home' ? 'active' : ''}> Home</li>
          <li onClick={() => handleItemClick('product')} className={activeItem === 'product' ? 'active' : ''}>Product</li>
          <li onClick={() => handleItemClick('wedding&event')} className={activeItem === 'wedding&event' ? 'active' : ''}>Wedding & Event</li>
          <li onClick={() => handleItemClick('aboutUs')} className={activeItem === 'aboutUs' ? 'active' : ''}>About Us</li>
        </ul>
        <div className="nav-login-cart">
          <button>Login</button>
          <img  src={cart} alt="cart" />
          <div className='nav-cart-count'>0</div>
        </div>
    </div>
  )
}

export default Navbar
