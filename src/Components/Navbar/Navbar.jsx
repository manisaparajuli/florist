import React, { useState } from 'react'
import './Navbar.css';
import logo from '../Assests/bliss-logo.png';
import cart from '../Assests/add-to-cart.png';
import { Link } from 'react-router-dom';

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
          <li onClick={() => handleItemClick('home')} className={activeItem === 'home' ? 'active' : ''}><Link to="/home" style={{textDecoration: "none", color: "inherit"}}> Home</Link></li>
          <li onClick={() => handleItemClick('product')} className={activeItem === 'product' ? 'active' : ''}><Link to="/product" style={{textDecoration: "none", color: "inherit"}}>Product</Link></li>
          <li onClick={() => handleItemClick('wedding&event')} className={activeItem === 'wedding&event' ? 'active' : ''}> <Link to="/events" style={{textDecoration: "none", color: "inherit"}}>Wedding & Event</Link></li>
          <li onClick={() => handleItemClick('aboutUs')} className={activeItem === 'aboutUs' ? 'active' : ''}><Link to="/about" style={{textDecoration: "none", color: "inherit"}}>About Us</Link></li>
        </ul>
        <div className="nav-login-cart">
          <Link to="/authentication"><button>Login</button></Link>
          <Link to="/cart"><img  src={cart} alt="cart" /></Link>
          <div className='nav-cart-count'>0</div>
        </div>
    </div>
  )
}

export default Navbar
