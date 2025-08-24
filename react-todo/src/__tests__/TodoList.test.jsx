// src/__tests__/TodoList.test.jsx
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";

describe("TodoList Component", () => {
  test("renders initial todos in TodoList", () => {
    render(<TodoList />);
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
  });

  test("adds a new todo in TodoList", () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText("Add new todo");
    const addButton = screen.getByText("Add");

    fireEvent.change(input, { target: { value: "New Todo" } });
    fireEvent.click(addButton);

    expect(screen.getByText("New Todo")).toBeInTheDocument();
  });

  test("toggles a todo completion in TodoList", () => {
    render(<TodoList />);
    const todo = screen.getByText("Learn React");

    fireEvent.click(todo);

    // Check for class that indicates completion
    expect(todo).toHaveClass("line-through");
  });

  test("deletes a todo in TodoList", () => {
    render(<TodoList />);
    const todo = screen.getByText("Learn React");
    const deleteButton = todo.nextSibling;

    fireEvent.click(deleteButton);

    expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
  });
});
