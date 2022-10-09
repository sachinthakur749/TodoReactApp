import "./index.css";
import trashIcon from "./trash-can.png";
import { useState } from "react";
import { props } from "react";

function App() {
  const [taskInput, setTaskInput] = useState("");
  const [toDoList, setToDoList] = useState([]);

  const addNote = () => {
    toDoList.push({ description: taskInput });
    setToDoList(toDoList);
    setTaskInput("");
  };

  const deleteTask = (index) => {
    const newList = toDoList.filter((item, i) => i!== index);
    setToDoList(newList);
    console.log("sachin");
  };

  return (
    <div className="app-background">
      <p className="heading-text">React To Do List</p>
      <div className="task-container">
        <div>
          <input
            className="text-input"
            type="text"
            onChange={(e) => setTaskInput(e.target.value)}
          />
          <button className="add-button" onClick={addNote}>
            Add
          </button>
        </div>
        {toDoList?.length ? (
          toDoList.map((toDoObject, index) => (
            <ListItem
              index={index}
              itemData={toDoObject}
              deleteTask={deleteTask}
            />
          ))
        ) : (
          <p className="no-item-text">No Task Added</p>
        )}
        {/* <ListItem /> */}
      </div>
      <p className="footer-text">Sachin kumar Thakur</p>
    </div>
  );
}

function ListItem(props) {
  return (
    <div className="list-item row jc-space-between">
      <span>{props.itemData.description}</span>
      <img
        className="delete-icon"
        src={trashIcon}
        onClick={(e) => props.deleteTask(props.index)}
      />
    </div>
  );
}

export default App;
