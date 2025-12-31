import { useState } from "react";

function ToDoApp() {
  const [transform, setTransform] = useState("rotate(-2deg)");

  const customStyle = {
    transform: transform
  };

  function handleFocus() {setTransform("rotate(2deg)");}

  function handleBlur() {setTransform("rotate(-2deg)");}

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
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
            <button
              className="btn btn-add"
            >
              Add
            </button>
          </div>

          <div className="text-start ps-4">
            <ul className="todo-list">
              <li>A item</li>
            </ul>
          </div>

      </div>
      </div>
    </div>
  )
}

export default ToDoApp;
