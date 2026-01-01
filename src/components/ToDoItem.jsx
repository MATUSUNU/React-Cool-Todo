import { useState } from "react";

function ToDoItem (props) {

  const [isCompleted, setIsCompleted] = useState(false);

  const customStyle = {
    textDecoration: isCompleted ? "line-through" : "none"
  }

  // function handleClick() {
  //   isCompleted==="line-through"?setIsCompleted(""):setIsCompleted("line-through");
  // }

  // More Descriptive
  function toggleComplete() {
    setIsCompleted((prev) => {
      return (!prev)
    });
  }

  // Shortest and cool
  // function toggleComplete() {
  //   setIsCompleted(prev => !prev);
  // }

  return (
    <div onClick={toggleComplete}>
      <li key={props.id} style={customStyle}>{props.value}</li>
    </div>
  )
}

export default ToDoItem;
