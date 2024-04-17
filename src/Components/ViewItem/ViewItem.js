import React from 'react'
import { useParams } from 'react-router-dom'
import Breadcrum from '../Breadcrums/Breadcrum'
import {data} from '../../data/items.js'
import "./ViewItem.css"
import { useNavigate } from 'react-router-dom'

const ViewItem = () => {
  const { productId } = useParams();
  const product = data.find(e => e.id === Number(productId))
  const navigate = useNavigate()

  return (
    <div className='view-item-page'>
      <Breadcrum product={product}/>
      <div className='product-container'>
        <img src={product.image} alt="" />
        <div className='view-item-content'>
          <h2>{product.name}</h2>
          <p>Price: {product.price}</p>
          <p>Quantity: {product.quantity}</p>
          <p>{product.description}</p>
          <button className='Add-to-cart' onClick={() => navigate('/home')}>Add to cart</button>
        </div>
      </div>
    </div>
  )
}

export default ViewItem
