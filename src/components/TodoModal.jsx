import React, { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";

const TodoModal = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodolist] = useState([]);
  const todoHandler = (e) => {
    setTodo(e.target.value);
  };

  const keyDownHandler = (e) => {
    if (e.key === "Enter") {
      setTodolist([...todoList, {id: uuid() , todo , isCompleted: false}]);
      localStorage.setItem("todos" , JSON.stringify(todoList))
      setTodo("");
    }
  };

  const checkBoxHandler = (item) => {
   const items = todoList.map(todo => todo.id === item.id ? {...todo , isCompleted: !todo.isCompleted} : todo)
   setTodolist(items)
  };

  const deleteTodoHandler = (item) => {
    const remainingItems = todoList.filter(todo => todo.id !== item.id)
    setTodolist(remainingItems)
  }

  useEffect(() => {
    setTodolist(JSON.parse(localStorage.getItem("todos")))
  },[])

  return (
    <div className="todo-modal-container">
      <h3 className="todo-heading">Todo's</h3>

      {todoList.map((item) => (
        <div className="flex">
          <label
            className={item.isCompleted ? "todo-check-text checked" : "todo-check-text"}
          >
            <input
              type="checkbox"
              value={item.todo}
              className="todo-check-input"
              onChange={() => checkBoxHandler(item)}
            />
            {item.todo}
          </label>
          <span className="material-symbols-outlined del-icon" onClick={() => deleteTodoHandler(item)}>delete</span>
        </div>
      ))}

      <input
        type="text"
        placeholder="Add todo"
        value={todo}
        className="todo-input"
        onChange={todoHandler}
        onKeyDown={keyDownHandler}
      />
    </div>
  );
};

export { TodoModal };
