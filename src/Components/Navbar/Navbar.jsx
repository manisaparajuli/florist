import React, { useState, useContext } from 'react'
import './Navbar.css';
import logo from '../Assests/bliss-logo.png';
import cart from '../Assests/add-to-cart.png';
import { Link } from 'react-router-dom';
import closeIcon from "../Assests/closeIcon.png";
import menuIcon from "../Assests/menuIcon.png";
import { ShopContext } from "../../Context/shop-contex";



const Navbar = () => {
  const [activeItem, setActiveItem] = useState('Home'); 
  const [menuOpen, setMenuOpen] = useState(true);
  const handleItemClick = (item) => {
    setActiveItem(item);
  };
  const { cartCount } = useContext(ShopContext);
  


  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img  src={logo} alt="florist logo here" />
        <p>The florist</p>
        <div className="menu" onClick={() => {setMenuOpen(!menuOpen)}}>
        {menuOpen? <img src={menuIcon} alt=""/> : <img src={closeIcon} alt=""/>}
        </div>
      </div>
      <div className='nav-item'>
        <ul className={menuOpen? "nav-menu" : ""} >
          <li onClick={() => handleItemClick('home')} className={activeItem === 'home' ? 'active' : ''}><Link to="/home" style={{textDecoration: "none", color: "inherit"}}> Home</Link></li>
          <li onClick={() => handleItemClick('product')} className={activeItem === 'product' ? 'active' : ''}><Link to="/product" style={{textDecoration: "none", color: "inherit"}}>Product</Link></li>
          <li onClick={() => handleItemClick('wedding&event')} className={activeItem === 'wedding&event' ? 'active' : ''}> <Link to="/events" style={{textDecoration: "none", color: "inherit"}}>Wedding & Event</Link></li>
          <li onClick={() => handleItemClick('aboutUs')} className={activeItem === 'aboutUs' ? 'active' : ''}><Link to="/about" style={{textDecoration: "none", color: "inherit"}}>About Us</Link></li>
          <li className='login-btn' ><Link to="/authentication" style={{textDecoration: "none", color: "inherit"}}>Login</Link></li>

        </ul>
      </div>
        <div className="nav-login-cart">
          <Link to="/authentication"><button>Login</button></Link>
          <Link to="/cart"><img  src={cart} alt="cart" /></Link>
          <div className='nav-cart-count'>{cartCount}</div>
        </div>
    </div>
  )
}

export default Navbar
