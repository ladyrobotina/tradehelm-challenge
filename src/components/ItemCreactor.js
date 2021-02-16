import React from "react";
import "./ItemCreator.css";

export const ItemCreator = ({itemText, setItemText, listItems, setListItems, setModalIsOpen}) => {
  

  //Funcion para tomar el texto que se ingresa en el input
  const inputTextHandler = (e) => {
    setItemText(e.target.value)
    if (!itemText) return;
  }

  const submitItemHandler = (e) => {
    e.preventDefault();

    if(!itemText) {
      setModalIsOpen(false);
    } 
      else{
        
        setListItems([
          ...listItems, {text: itemText, completed: false, id: Math.random() * 1000 },
        ]);
               
        setItemText("");
        setModalIsOpen(false);
      }
      
    }

    const sameItemHandler = (e) => {

      if(itemText.text === listItems.text){
        alert("product")
    }
    } 
  

  return (
    <div className="my-1">
      <div className="modal-article">
          <h2>Add Item</h2>
      <input
        type="text"
        className="form-control"
        autoFocus
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