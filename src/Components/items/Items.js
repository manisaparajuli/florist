// import React from 'react'
import "./items.css"
import { Link } from 'react-router-dom'
import Promo  from "../Promo/Promo"
import { ShopContext } from "../../Context/shop-contex"
import { useContext } from "react"


const Items = ({item}) => {
  const {addToCart, cartItems} = useContext(ShopContext);

  return (
    <>
    <div className='container'>
      <div className='card'>
        {item.map((Val)=> {
          return <div  className='item' key={Val.id}>
            <Link to={`/product/${Val.id}`}><img src={Val.image}  className='card-image' alt="" /></Link>
            <div className="buttom-card">
              <div className='card-content'>
                <h5>{Val.name}</h5>
                <h5>$ {Val.price}.00</h5> <br />
              </div>
              <button className='Add-to-cart' onClick={() => addToCart(Val.id)}>
                Add to cart {cartItems[Val.id] > 0 && <>({cartItems[Val.id]}) </>}
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
