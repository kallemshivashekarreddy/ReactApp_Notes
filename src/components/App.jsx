import React, { useState } from "react";

function App() {
  const [inputText, setText] = useState("");
  const [items, setItems] = useState([]);
  function changeHandle(event) {
    const val = event.target.value;
    setText(val);
  }

  function handleAdd() {
    setItems((prev) => {
      if (inputText.trim().length) return [...prev, inputText];
      else return prev;
    });
    setText("");
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input value={inputText} onChange={changeHandle} type="text" />
        <button onClick={handleAdd}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItems, index) => {
            return <li key={index}>{todoItems}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
