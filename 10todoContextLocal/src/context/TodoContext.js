import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [
    { id: 1, todo: "Todo Msg", completed: false },
    { id: 2, todo: "Todo Play", completed: false },
    { id: 3, todo: "Todo Dance", completed: false },
  ],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

export const useTodo = () => {
  return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider;

//useContext which context is used
