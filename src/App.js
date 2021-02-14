import React, { useState, useEffect } from "react";
import "./App.css";
import Modal from 'react-modal';
import { TaskRow } from "./components/TaskRow";
import { ItemCreator } from "./components/ItemCreactor";

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [taskItems, setTaskItems] = useState([]);

  //Va a mostrar la lista que ya fue previamente cargada
  useEffect(() => {
    let data = localStorage.getItem("items");
    if (data != null) {
        setTaskItems(JSON.parse(data))
    } else {
            return <span>Inserte un item a la lista</span>
          }
  }, []);

  //Funcion para guardar los datos en el localstorage
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(taskItems));
  }, [taskItems]);

  //Funcion para crear un nuevo item a la lista
  //Si el item ya existe, no permite agregar
  const createNewItem = taskName => {
    if (!taskItems.find(t => t.name === taskName)) {
      setTaskItems([...taskItems, { name: taskName, done: false }]);
    }
  };

  //funcion para cambiar el estado de la tarea
  // va a recibir un item y por cada item va a cambiar el estado de los items
  const toggleTask = task =>
    setTaskItems(
      taskItems.map(t => (t.name === task.name ? { ...t, done: !t.done } : t))
    );

  // funcion que recibe los rows
  const taskTableRows = doneValue =>
    taskItems
      .filter(task => task.done === doneValue)
      .map(task => (
        <TaskRow key={task.name} task={task} toggleTask={toggleTask} />
      ));

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
        <p className="text-black text-center p-2">{taskItems.filter(t => !t.done).length}{" "}item(s)</p>
      </div>
      <button className="button-addItem" onClick={() => setModalIsOpen(true)} >Add Item</button>
      <Modal style={customStyles} isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        <ItemCreator callback={createNewItem} />
        
      
      </Modal>
      
      
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th className="bg-primary text-white text-center p-2">Item</th>
            <th className="bg-primary text-white text-center p-2">Done</th>
          </tr>
        </thead>
        <tbody>
          {taskTableRows(false)}
        </tbody>
      </table>
    </div>
  );
}

export default App;
