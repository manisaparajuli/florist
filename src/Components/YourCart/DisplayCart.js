import React, { useContext } from "react";
import { ShopContext } from "../../Context/shop-contex";
import "./YourCart.css"

export const DisplayCart = (props) => {
  const { id, name, price, image } = props.product;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount, daleteAllFromCart } =
    useContext(ShopContext);

  return (
    <div className="cartItem" key={id}>
        <img src={image} alt=""/>
        <div className="description">
          <b>{name}</b>
        </div>
        <div className="countHandler"> 
          <button onClick={() => removeFromCart(id)}> - </button>
          <input
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
            />
          <button onClick={() => addToCart(id)}> + </button>
        </div>
          <p>  ${price}.00</p>
      </div>
  );
};