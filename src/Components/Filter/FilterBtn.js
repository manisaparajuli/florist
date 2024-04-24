import React from "react";
import {data} from "../../data/items";
import "./FilterBtn.css"

const FilterBtn = ({ filterItem, setItem, menuItems }) => {
  return (
    <>
      <div className="filter-btn">
        {menuItems.map((Val, id) => {
          return (
            <button
              onClick={() => filterItem(Val)}
              key={id}
            >
              {Val}
            </button>
          );
        })}
        <button
          onClick={() => setItem(data)}
        >
          All
        </button>
      </div>
    </>
  );
};

export default FilterBtn;