import React, { useState } from "react";

export const ItemCreator = props => {
  const [newItemName, setNewItemName] = useState("");

  const updateNewItemValue = e => setNewItemName(e.target.value);

  const createNewItem = () => {
    props.callback(newItemName);
    setNewItemName('');
  }

  return (
    <div className="my-1">
      <input
        type="text"
        className="form-control"
        value={newItemName}
        onChange={updateNewItemValue}
      />
      <button className="btn btn-primary mt-1" onClick={createNewItem}>
        Cancel
      </button>
      <button className="btn btn-primary mt-1" onClick={createNewItem}>
        Add
      </button>
    </div>
  );
};