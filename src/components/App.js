import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";


function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const [appClass, setClass] = useState(false)
  const [darkMode, setMode]  = useState(false)
  function handleClick(){
    setClass(!appClass)
    setMode(!darkMode) 
  }
  const dark = "Dark Mode"
  const light = "Light Mode"
  

  return (
    <div className={!appClass? "App light" : "App dark"  }>
      <header> 
        <h2>Shopster</h2>
        <button onClick={handleClick}>{!darkMode? dark : light}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
