"use client";
import React, { useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";

//interface
interface item {
  id: number;
  text: string;
  completed: boolean;
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<item[]>([]);

  const handleToggle = (idtoDelete: number) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === idtoDelete) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  const [input, setInput] = useState<string>("");

  const handleClick = () => {
    const newtoDo: item = { id: Date.now(), text: input, completed: false };
    setTodos([...todos, newtoDo]);
  };
  return (
    <div className="flex flex-col items-center justify-center w-[50%] mx-auto bg-blue-200 rounded-md py-8 text-gray-700">
      <div className="w-[90%] flex flex-col items-center">
        <h1 className="font-bold text-3xl">To do List</h1>
        <form
          className="flex  my-8 w-full"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            placeholder="task"
            onChange={(e) => setInput(e.target.value)}
            value={input}
            className="outline-none  py-2 px-3 border-[1px] border-gray-700 bg-transparent flex-1"
          />
          <button
            type="submit"
            onClick={() => {
              if (input === "") {
                return;
              } else {
                handleClick();
                setInput("");
              }
            }}
            className=" px-2 py-2 text-white bg-black flex-0"
          >
            Add task
          </button>
        </form>

        {todos.map((todo) => (
          <div className="cursor-pointer flex justify-between  border px-3 py-3  shadow-sm rounded-md bg-blue-300/70 items-center mb-2 w-[100%]">
            <p
              key={todo.id}
              onClick={() => handleToggle(todo.id)}
              className={todo.completed ? "line-through flex-1" : "flex-1"}
            >
              {todo.text}
            </p>
            <AiOutlineEdit />
          </div>
        ))}
      </div>
    </div>
  );
};
export default TodoList;
