import React, { useState, useEffect } from "react";
import "./App.css";
import Modal from 'react-modal';
import { ItemCreator } from "./components/ItemCreactor";
import ItemList from "./components/ItemList";

function App() {
  const [itemText, setItemText] = useState("");
  const [listItems, setListItems] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  //Va a mostrar la lista que ya fue previamente cargada
  useEffect(() => {
    let data = localStorage.getItem("items");
    if (data != null) {
      setListItems(JSON.parse(data))
    } else {
            return <span>Inserte un item a la lista</span>
          }
  }, []);

  //Funcion para guardar los datos en el localstorage
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(listItems));
  }, [listItems]);

    //Estilos del Modal
   const customStyles = {
     content : {
       top                   : '50%',
       left                  : '50%',
       right                 : 'auto',
       bottom                : 'auto',
       marginRight           : '-50%',
       transform             : 'translate(-50%, -50%)'
     }
   };

  return (
    <div className="app">
      <div>
        <h1 className="text-black text-center p-4">
            Supermarket list
        </h1>
        <p className="text-black text-center p-2">{listItems.length}{" "}item(s)</p> 
      </div>
      <button className="button-addItem" onClick={() => setModalIsOpen(true)} >Add Item</button>
      <Modal style={customStyles} isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        <ItemCreator 
          itemText={itemText}
          setItemText={setItemText}
          listItems={listItems}
          setListItems={setListItems} 
          setModalIsOpen={setModalIsOpen}
        />
      </Modal>

      <ItemList 
        itemText={itemText}
        setItemText={setItemText}
        listItems={listItems}
        setListItems={setListItems} 
      />
            
    </div>
  );
}

export default App;
