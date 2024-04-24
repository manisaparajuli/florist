import React, {useState} from 'react'
import Items from '../Components/items/Items'
import {data} from "../data/items"
import FilterBtn from '../Components/Filter/FilterBtn';


const Product = () => {
  const [item, setItem] = useState(data);
  const menuItems = [...new Set(data.map((Val) => Val.category))];

  const filterItem = (curcat) => {
    const newItem = data.filter((newVal) => {
      return newVal.category === curcat;
    });
    setItem(newItem);
  };
  return (
    <>   
      <FilterBtn
            filterItem={filterItem}
            setItem={setItem}
            menuItems={menuItems}
          />
      <Items item={item}/>
    </>
  )
}

export default Product
