import React from "react";
import "./ItemCreator.css";

export const ItemCreator = ({itemText, setItemText, listItems, setListItems, setModalIsOpen}) => {
  

  //Funcion para tomar el texto que se ingresa en el input
  const inputTextHandler = (e) => {
    setItemText(e.target.value)
  }

  const submitItemHandler = (e) => {
    e.preventDefault();
    setListItems([
      ...listItems, {text: itemText, completed: false, id: Math.random() * 1000 },
    ]);
    setItemText("");
  }

  return (
    <div className="my-1">
      <div className="modal-article">
          <h2>Add Item</h2>
      <input
        type="text"
        className="form-control"
        value={itemText}
        onChange={inputTextHandler}
      />
      <button className="button-cancel" type="button" 
       onClick={() => setModalIsOpen(false)}
       >
        Cancel
      </button>
      <button className="button-submit" type="submit" onClick={submitItemHandler}>
        Add
      </button>
      </div>
    </div>
  );
};