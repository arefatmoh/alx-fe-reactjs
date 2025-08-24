// src/__tests__/TodoList.test.jsx
import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";

describe("TodoList Component", () => {
  test("renders initial todos", () => {
    render(<TodoList />);
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
  });

  test("adds a new todo", () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText("Add new todo");
    const addButton = screen.getByText("Add");

    fireEvent.change(input, { target: { value: "New Todo" } });
    fireEvent.click(addButton);

    expect(screen.getByText("New Todo")).toBeInTheDocument();
  });

  test("toggles a todo completion", () => {
    render(<TodoList />);
    const todoItem = screen.getByText("Learn React").closest("li"); // check parent <li>
    fireEvent.click(todoItem);
    expect(todoItem).toHaveClass("line-through");
  });

  test("deletes a todo", () => {
    render(<TodoList />);
    const todoItem = screen.getByText("Learn React").closest("li");
    const deleteButton = todoItem.querySelector("button");
    fireEvent.click(deleteButton);
    expect(todoItem).not.toBeInTheDocument();
  });
});
