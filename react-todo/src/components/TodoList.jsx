// src/components/TodoList.jsx
import React, { useState } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build a Todo App", completed: true },
  ]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = (e) => {
    e.preventDefault();
    if (newTodo.trim() === "") return;
    setTodos([
      ...todos,
      { id: Date.now(), text: newTodo.trim(), completed: false },
    ]);
    setNewTodo("");
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id, e) => {
    e.stopPropagation(); // prevent toggling when clicking delete
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="max-w-md mx-auto p-4 border rounded">
      <h2 className="text-xl font-bold mb-4">Todo List</h2>
      <form className="flex gap-2 mb-4" onSubmit={addTodo}>
        <input
          className="flex-1 p-2 border rounded"
          type="text"
          placeholder="Add new todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button className="bg-blue-500 text-white px-4 rounded" type="submit">
          Add
        </button>
      </form>
      <ul className="space-y-2">
        {todos.map((todo) => (
          <li
            key={todo.id}
            onClick={() => toggleTodo(todo.id)}
            className={`flex justify-between p-2 border rounded ${
              todo.completed ? "line-through text-gray-400" : ""
            }`}
          >
            <span>{todo.text}</span>
            <button
              className="text-red-500 font-bold"
              onClick={(e) => deleteTodo(todo.id, e)}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
