import React, { useState } from "react";
import "./ItemCreator.css";

export const ItemCreator = props => {
  const [newItemName, setNewItemName] = useState("");

  const updateNewItemValue = e => setNewItemName(e.target.value);

  const createNewItem = () => {
    props.callback(newItemName);
    setNewItemName('');
  }

  return (
    <div className="my-1">
      <div className="modal-article">
          <h2>Add Item</h2>
      <input
        type="text"
        className="form-control"
        value={newItemName}
        onChange={updateNewItemValue}
      />
      <button className="button-cancel" type="button" 
      // onClick={() => setModalIsOpen(false)}
       >
        Cancel
      </button>
      <button className="button-submit" type="submit" onClick={createNewItem}>
        Add
      </button>
      </div>
    </div>
  );
};