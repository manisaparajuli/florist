import React from "react";
import {data} from "../../data/items";

const FilterBtn = ({ filterItem, setItem, menuItems }) => {
  return (
    <>
      <div className="d-flex justify-content-center">
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