import React, { useContext } from "react";
import { ShopContext } from "../../Context/shop-contex";
import "./YourCart.css"

export const DisplayCart = (props) => {
  const { id, name, price, image, quantity } = props.product;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <div className="cartItem" key={id}>
        <img src={image} alt=""/>
        <div className="description">
          <b>{name}</b>
          <p> Price: ${price}</p>
        </div>
        <div className="countHandler">Quantity: 
          <button onClick={() => removeFromCart(id)}> - </button>
          <input
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button onClick={() => addToCart(id)}> + </button>
        </div>
      </div>
  );
};