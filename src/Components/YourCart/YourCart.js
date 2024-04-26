import React, { useContext } from "react";
import { ShopContext } from "../../Context/shop-contex";
import { data } from "../../data/items";
import { useNavigate } from "react-router-dom";
import  { DisplayCart } from "./DisplayCart";
import './YourCart.css'

export const YourCart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <div className="cart-container">
      <div className="your-cart-items">
        <h2>Your Cart Items</h2>
      </div>
      <div className="cart">
        {data.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <DisplayCart product={product}/>
          }else{
            return <p></p>
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <hr />
          <p> <span>Sub-Total: $ {totalAmount} </span> </p>
          <button
            onClick={() => {
              checkout();
              navigate("/");
            }}
          >
            Checkout
          </button>
        </div>
      ) : (
        <h4> Your Shopping Cart is Empty</h4>
      )}
    </div>
  );
};

