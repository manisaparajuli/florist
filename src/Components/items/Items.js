// import React from 'react'
import "./items.css"
import { data } from "../../data/items"
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Items = () => {
  const navigate = useNavigate()
  return (
    <div className='container'>
      <div className='card'>
        {data.map((item)=> {
          return <div  className='item' key={item.id}>
            <Link to={`/product/${item.id}`}><img src={item.image}  className='card-image' alt="" /></Link>
            <button className='Add-to-cart' onClick={() => navigate('/home')}>Add to cart</button>
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
