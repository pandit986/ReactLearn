import { useEffect, useState } from "react";
import { TodoProvider } from "./context/TodoContext";
import { TodoForm } from "./components/TodoForm";
import { TodoItems } from "./components/Todoitems";

export default function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => {
        prevTodo.id === id ? todo : prevTodo;
      })
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    console.log(id);
    setTodos((prev) =>
      prev.map((todo) => {
        todo.id === id ? { ...todo, completed: !todo.completed } : todo;
        //take all and the override the completed
      })
    );
  };

  useEffect(() => {
    const todo = JSON.parse(localStorage.getItem("todo"));

    if (todo && todo.length > 0) {
      setTodos(todo);
    }
  }, []);
  //you can use multiple useEffect

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider
      value={{ addTodo, deleteTodo, toggleComplete, updateTodo, todos }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            <TodoForm></TodoForm>
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodoItems todo={todo}></TodoItems>
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}
