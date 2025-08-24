// src/components/TodoList.jsx
import React, { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build a Todo App", completed: true },
  ]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = (e) => {
    e.preventDefault();
    if (!newTodo.trim()) return;

    const todo = {
      id: Date.now(),
      text: newTodo.trim(),
      completed: false,
    };
    setTodos([...todos, todo]);
    setNewTodo("");
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="max-w-md mx-auto p-4 border rounded">
      <h2 className="text-xl font-bold mb-4">Todo List</h2>
      <form onSubmit={addTodo} className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Add new todo"
          className="flex-1 p-2 border rounded"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 rounded"
        >
          Add
        </button>
      </form>
      <ul className="space-y-2">
        {todos.map((todo) => (
          <li key={todo.id} className="flex justify-between p-2 border rounded">
            <span
              onClick={() => toggleTodo(todo.id)}
              style={{ cursor: "pointer" }}
              className={todo.completed ? "line-through text-gray-400" : ""}
            >
              {todo.text}
            </span>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="text-red-500 font-bold"
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
