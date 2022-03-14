import React, {useState} from "react";

function Item({ name, category }) {
  
  const [appClass, setClass] = useState(false)
  const [inCart, setCart] = useState(false)
  function handleClick(){
    setClass(!appClass) 
    setCart(!inCart)
  }
  const add = "Add to Cart"
  const remove = "Remove From Cart"
 

  return (
    <li className={appClass === false? "" : "in-cart"  }>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>{!inCart? add : remove}</button>
    </li>
  );
}

export default Item;
