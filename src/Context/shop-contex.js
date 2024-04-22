import { createContext, useEffect, useState } from "react";
import { data } from "../data/items";

export const ShopContext = createContext(null);

const getLocalCartData = () => {
    const localCartData = localStorage.getItem("myCart")
    if(localCartData.length != {}){
      return JSON.parse(localCartData)
    }else {
      return {};
    }
  }

const getDefaultCart = () => {
  let cart = getLocalCartData();
  for (let i = 1; i < data.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    localStorage.setItem("myCart", JSON.stringify(cartItems))
  }, [cartItems])

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = data.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    setCartCount(cartCount + 1)
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    setCartCount(cartCount - 1)

  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const checkout = () => {
    setCartItems(getDefaultCart());
  };




  const contextValue = {
    cartItems,
    addToCart,
    updateCartItemCount,
    removeFromCart,
    getTotalCartAmount,
    checkout,
    cartCount,
    
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};