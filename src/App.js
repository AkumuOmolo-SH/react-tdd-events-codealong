// src/App.js
import React, { useState } from "react";

function App() {
  const [addPepperoni, setAddPepperoni] = useState(false);

  function handleCheckboxChange() {
    setAddPepperoni(!addPepperoni);
  }

  return (
    <div>
      <h1>Select Pizza Toppings</h1>

      <input
        type="checkbox"
        id="pepperoni"
        checked={addPepperoni}
        onChange={handleCheckboxChange}
      />
      <label htmlFor="pepperoni">Add pepperoni</label>

      <h2>Your Toppings:</h2>
      <ul>
        <li>Cheese</li>
        {addPepperoni && <li>Pepperoni</li>}
      </ul>
    </div>
  );
}

export default App;


