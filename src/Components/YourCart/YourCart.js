import React, { useContext } from "react";
import { ShopContext } from "../../Context/shop-contex";
import { data } from "../../data/items";
// import { CartItem } from "./CartItem";
import { useNavigate } from "react-router-dom";
import  { DisplayCart } from "./DisplayCart"

export const YourCart = () => {
  const { cartItems, getTotalCartAmount, checkout, removeFromCart, updateCartItemCount, addToCart } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart">
        {data.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <DisplayCart product={product}/>
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <p> Subtotal: ${totalAmount} </p>
          <button onClick={() => navigate("/")}> Continue Shopping </button>
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
        <h1> Your Shopping Cart is Empty</h1>
      )}
    </div>
  );
};

