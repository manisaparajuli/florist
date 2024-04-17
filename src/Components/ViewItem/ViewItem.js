import React from 'react'
import { useParams } from 'react-router-dom'
import Breadcrum from '../Breadcrums/Breadcrum'
import {data} from '../../data/items.js'

const ViewItem = () => {
  const { productId } = useParams();
  console.log(productId)
  const product = data.find(e => e.id == productId)
  console.log(product)

  return (
    <div>
      <Breadcrum product={product}/>
      this is a view page
    </div>
  )
}

export default ViewItem
