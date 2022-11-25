import React, { useState, useEffect } from "react";

function Todo() {
  const [todo, setTodo] = useState(["washing", "clothings", "iron"]);
  const [text, setText] = useState("");

  function addTask() {
    if (!todo.includes(text)) {
      setTodo([...todo, text]);
    }
  }

  function deleteme(i) {
    setTodo(todo.filter((j) => j !== i));
  }
  return (
    <div className="col-lg-8">
      <div className="input-group mb-2 ">
        <input
          className="form-control"
          placeholder="type.."
          onChange={(e) => setText(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              addTask();
            }
          }}
        />
        <button className="btn btn-primary" onClick={addTask}>
          Add
        </button>
      </div>

      <ul className="list-group">
        {todo.map((i, index) => (
          <li
            className="text-capitalize list-group-item d-flex justify-content-between align-items-center"
            key={index}
          >
            {i}
            <span
              onClick={() => deleteme(i)}
              className="pointer link-danger font-20 mdi mdi-delete"
            ></span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
