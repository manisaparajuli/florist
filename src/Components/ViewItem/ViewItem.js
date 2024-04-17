import React from 'react'
import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'

const ViewItem = () => {
  const allItem = useContext(ShopContext);
  
  return (
    <div>
      product details
    </div>
  )
}

export default ViewItem
