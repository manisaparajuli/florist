import React from 'react'
import "./items.css"
import { data } from "../../data/items"
import { useNavigate } from 'react-router-dom'

const Items = () => {
  const navigate = useNavigate()
  return (
    <div className='container'>
      <div className='card'>
        {data.map((item)=> {
          return <div  className='item'>
            <img src={item.image}  className='card-image' alt="" />
            <div className='card-content'>
              <h5>{item.name}</h5>
              <h5>$ {item.price}.00</h5>
            </div>
            <button className='Add-to-cart' onClick={() => navigate('/home')}>Add to cart</button>
          </div>
        })}
      </div>
    </div>
  )
}

export default Items
