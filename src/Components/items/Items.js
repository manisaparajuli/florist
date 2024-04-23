// import React from 'react'
import "./items.css"
import { data } from "../../data/items"
import { Link } from 'react-router-dom'
import Promo  from "../Promo/Promo"
import { ShopContext } from "../../Context/shop-contex"
import { useContext } from "react"


const Items = () => {
  const {addToCart, cartItems} = useContext(ShopContext);

  return (
    <>
    
    <div className='container'>
      <div className='card'>
        {data.map((item)=> {
          return <div  className='item' key={item.id}>
            <Link to={`/product/${item.id}`}><img src={item.image}  className='card-image' alt="" /></Link>
            <div className="buttom-card">
              <div className='card-content'>
                <h5>{item.name}</h5>
                <h5>$ {item.price}.00</h5> <br />
              </div>
              <button className='Add-to-cart' onClick={() => addToCart(item.id)}>
                Add to cart {cartItems[item.id] > 0 && <>({cartItems[item.id]}) </>}
              </button>
              </div>
            </div>
        })}
      </div>
    </div>
    <Promo />
    </>
  )
}

export default Items
