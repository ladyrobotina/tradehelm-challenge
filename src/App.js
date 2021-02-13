import React, { useState, useEffect } from "react";
import { TaskRow } from "./components/TaskRow";
import { ItemCreator } from "./components/ItemCreactor";

function App() {
  const [taskItems, setTaskItems] = useState([]);

  const [showCompleted, setshowCompleted] = useState(true);

  useEffect(() => {
    let data = localStorage.getItem("items");
    if (data != null) {
        setTaskItems(JSON.parse(data))
    } else {
          <div>
            <p>Inserte un item</p>
          </div>
          }
  }, []);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(taskItems));
  }, [taskItems]);

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

  return (
    <div className="app">
      <div>
        <h1 className="text-black text-center p-4">
            Supermarket list
        </h1>
        <p className="text-black text-center p-2">{taskItems.filter(t => !t.done).length}{" "}item(s)</p>
      </div>
      <ItemCreator callback={createNewItem} />
      
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th className="bg-primary text-white text-center p-2">Description</th>
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
