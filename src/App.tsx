import React, { useState } from "react";
import { useStore } from "./store/store";

const App = () => {
  const [value, setValue] = useState("");
  const todoList = useStore((store) => store.todos);
  const addTodo = useStore((store) => store.addTodo);
  const deleteTodo = useStore((store) => store.deleteTodo);
  
  const handleAddTodo = () => {
    if (value) {
      addTodo(value);
      setValue("");
    }
  };
  return (
    <div style={{ maxWidth: "1000px", margin: "auto", textAlign: "center" }}>
      <h1>Zustand Practice</h1>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={handleAddTodo}>追加</button>
      {todoList.map((todo) => (
        <div
          key={todo.id}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <p>{todo.title}</p>
          <button onClick={() => deleteTodo(todo.id)}>削除</button>
        </div>
      ))}
    </div>
  );
};

export default App;
