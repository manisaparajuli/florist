import React, { createContext } from "react";
import { data } from '../data/items.js'
import ViewItem from "../Components/ViewItem/ViewItem.js";

export const ShopContext = createContext(null)

const ShopContextProvider = () => {
  const contextValue = {data};
  return(
    <ShopContext.Provider value={contextValue}>
      <ViewItem/>
    </ShopContext.Provider>
  )
}

export default ShopContextProvider
