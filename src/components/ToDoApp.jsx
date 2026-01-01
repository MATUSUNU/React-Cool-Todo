import { useState } from "react";
import {v4 as uuidv4} from "uuid";
import ToDoItem from "./ToDoItem";

function ToDoApp() {
  const [transform, setTransform] = useState("rotate(-2deg)");
  const [inputData, setInputData] = useState("");
  const [todoData, setTodoData] = useState([]);

  const customStyle = {
    transform: transform
  };
  function handleFocus() {setTransform("rotate(2deg)");}
  function handleBlur() {setTransform("rotate(-2deg)");}


  function handleChange(event) {
    const {value} = event.target;
    setInputData(value)
  }

  function handleToDo() {
    setTodoData((prev) => {
      return [
        ...prev,
        {id: uuidv4(), text: inputData}
      ]
    })
    setInputData("");
  }

  // This Is Cool!!!
  // function handleToDo() {
  //   setTodoData((prev) => (
  //     [...prev, inputData]
  //   ));
  //   setInputData("");
  // }

  function handleEnter(event) {
    // console.log(event.nativeEvent.key)
    // const {key} = event.nativeEvent
    // key==="Enter"&&handleToDo();

    // This is cool!!!
    event.key==="Enter"&&handleToDo();
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

  // OR
  // function deleteItem(id) {
  //   setTodoData((prev) => (
  //     prev.filter((_,index) => (id !== index))
  //   ))
  // }

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

          <div className="mb-4 d-flex justify-content-center align-items-end">
            <input
              className="custom-input"
              type="text"
              placeholder="Enter your to do"
              name="todo"
              value={inputData}
              onFocus={handleFocus}
              onBlur={handleBlur}
              onChange={handleChange}
              onKeyUp={handleEnter}
            />
            <button
              className="btn btn-add"
              onClick={handleToDo}
            >
              Add
            </button>
          </div>

          <div className="text-start">
            <ul className="todo-list">
              {todoData.map((data) => (
                {/* <ToDoItem
                  key={index}
                  id={index}
                  value={data}
                /> */},
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
