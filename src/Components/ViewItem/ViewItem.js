import React from 'react'
import { useParams } from 'react-router-dom'

const ViewItem = () => {
  const params = useParams()
  console.log(params)
  return (
    <div>
      product details
    </div>
  )
}

export default ViewItem
