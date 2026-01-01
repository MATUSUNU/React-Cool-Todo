import { useState } from "react";
import {v4 as uuidv4} from "uuid";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

function ToDoApp() {
  const [transform, setTransform] = useState("rotate(-2deg)");
  const [todoData, setTodoData] = useState([]);

  const customStyle = {
    transform: transform
  };
  function handleFocus() {setTransform("rotate(2deg)");}
  function handleBlur() {setTransform("rotate(-2deg)");}

  function handleToDo(inputData) {
    setTodoData((prev) => {
      return [
        ...prev,
        {id: uuidv4(), text: inputData}
      ]
    })
  }

  function deleteItem(id) {
    setTodoData((prev) => {
      // Because already the filter return `array`.
      return (
        prev.filter((data) => {
          return (id !== data.id)
        })
      )
    })
  }

  return (
    <div className="container-fluid vh-100 d-flex justify-content-center align-items-center">
      <div className="col-12 col-md-6 col-lg-4">
      <div className="notebook-card text-center position-relative">

        <div className="pin-container">
          <div className="pin-icon"></div>
          <div className="hanging-line"></div>
        </div>

        <div className="mb-4 mt-4">
          <h1
            className="title-highlight"
            style={customStyle}
          >
            To-Do List
          </h1>
        </div>

        <InputArea
          onFocus={handleFocus}
          onBlur={handleBlur}
          onSubmit={handleToDo}
        />

        <div className="text-start">
          <ul className="todo-list">
            {todoData.map((data) => (
              <ToDoItem
                key={data.id}
                id={data.id}
                value={data.text}
                onChecked={deleteItem}
              />
            ))}
          </ul>
        </div>

      </div>
      </div>
    </div>
  )
}

export default ToDoApp;
