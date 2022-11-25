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
    setTodo(todo.filter((j) => j != i));
  }
  return (
    <>
      <input
        onChange={(e) => setText(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            addTask();
          }
        }}
      />
      <button onClick={addTask}>add</button>
      <ul>
        {todo.map((i, index) => (
          <li key={index} onClick={() => deleteme(i)}>
            {i}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todo;
