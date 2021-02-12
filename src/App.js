import React, { useState, useEffect } from "react";
import { TaskRow } from "./components/TaskRow";
import { TaskBanner } from "./components/TaskBanner";

function App() {
  const [taskItems, setTaskItems] = useState([
    { name: "Task One", done: false },
    { name: "Task Two", done: false },
    { name: "Task Three", done: true },
    { name: "Task Four", done: false }
  ]);

  //funcion para cambiar el estado de la tarea
  // va a recibir una tarea y por cada tarea va a cambiar el estado de los items
  const toggleTask = task =>
    setTaskItems(
      taskItems.map(t => (t.name === task.name ? { ...t, done: !t.done } : t))
    );

  // funcion que recibe los rows
  const taskTableRows = doneValue =>
    taskItems
      //.filter(task => task.done === doneValue)
      .map(task => (
        <TaskRow key={task.name} task={task} toggleTask={toggleTask} />
      ));

  return (
    <div className="app">
      <TaskBanner taskItems={taskItems} />
      {/* <h1>Supermarket List</h1>
      <p>0 item(s)</p> */}
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th className="bg-primary text-white text-center p-2">Description</th>
            <th className="bg-primary text-white text-center p-2">Done</th>
          </tr>
        </thead>
        <tbody>
          {taskTableRows()}
        </tbody>
      </table>
    </div>
  );
}

export default App;
