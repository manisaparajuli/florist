import React from 'react'
import "./items.css"
import { data } from "../../data/items"

const Items = () => {
  return (
    <div className='container'>
      <div className='card'>
        {data.map((item)=> {
          return <div  className='item'>
            <img src={item.image} alt={item.name} className='card-image' />
            <div className='card-content'>
              <h5>{item.name}</h5>
              <h5>$ {item.price}.00</h5>
            </div>
          </div>
        })}
      </div>
    </div>
  )
}

export default Items
