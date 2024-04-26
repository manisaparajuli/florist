import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import Breadcrum from '../Breadcrums/Breadcrum'
import { data } from '../../data/items.js'
import "./ViewItem.css"
import { ShopContext } from '../../Context/shop-contex.js'
import { Link } from 'react-router-dom'



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
      <h2 className='related-heading'>Related Products:</h2>
      <div className='related-card'>
        {data.map((Val) => {
          if(Val.category === product.category){
            return (
                  <div  className='item' key={Val.id}>
                  <Link to={`/product/${Val.id}`}><img src={Val.image}  className='card-image' alt="" onClick={window.scrollTo(0,0)} /></Link>
                    <div className="buttom-card">
                      <div className='card-content'>
                        <h5>{Val.name}</h5>
                        <h5>$ {Val.price}.00</h5> <br />
                      </div>
                      <button className='Add-to-cart' onClick={() => addToCart(Val.id)}>
                        Add to cart {cartItems[Val.id] > 0 && <>({cartItems[Val.id]}) </>}
                      </button>
                      </div>
                    </div>)
                  
                }else {
                  return <p style={{display: "none"}}>items not available</p>
                }
            })
          }
        </div>
    </div>
  )
}

export default ViewItem
