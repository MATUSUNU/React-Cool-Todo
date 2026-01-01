import { useState } from "react";

function InputArea(props) {
  const [inputData, setInputData] = useState("");

  function handleChange(event) {
    const {value} = event.target;
    setInputData(value)
  }

  return (
    <div className="mb-4 d-flex justify-content-center align-items-end">
      <input className="custom-input" type="text" placeholder="Enter your to do"
        value={inputData}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
        onChange={handleChange}
        onKeyUp={(e) => {
          if(e.key==="Enter") {
            props.onSubmit(inputData)
            setInputData("")
          }
        }}
      />
      <button className="btn btn-add"
        onClick={() => {
          return (
            props.onSubmit(inputData),
            setInputData("")
          )
        }}
      >
        Add
      </button>
    </div>
  )
}

export default InputArea;
