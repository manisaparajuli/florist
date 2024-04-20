import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import Breadcrum from '../Breadcrums/Breadcrum'
import {data} from '../../data/items.js'
import "./ViewItem.css"
import { ShopContext } from '../../Context/shop-contex.js'



const ViewItem = () => {
  const { productId } = useParams();
  const product = data.find(e => e.id === Number(productId))
  const{ addToCart, cartItems} = useContext(ShopContext)
  

  return (
    <div className='view-item-page'>
      <Breadcrum product={product}/>
      <div className='product-container'>
      <img className="main-image"src={product.image} alt="" />
        <div className='view-item-content'>
          <h2>{product.name}</h2>
          <p>Price: ${product.price}.00</p>
          <p>{product.description}</p>
          <button className='Add-to-cart' onClick={() => addToCart(product.id)}>Add to cart {cartItems[product.id] > 0 && <>({cartItems[product.id]}) </>}</button>
        </div>
      </div>
      <div className="c">
        <input type="checkbox" id="faq-1"/>
        <h3><label htmlFor="faq-1">How to take care of "{product.name}" ?</label></h3>
        <div className="p">
          <p>{product.careTips}</p>
        </div>
      </div>
      <h4>Similar products:</h4>
      <p>TODO: use category to suggest similar products.</p>
    </div>
  )
}

export default ViewItem
