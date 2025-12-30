import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo, updateTodo } from "../feature/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <>
      <div className="mt-8 text-4xl font-bold mb-4 text-pink-500 text-center">
        Todos
      </div>

      {todos.map((todo) => (
        <div
          key={todo.id}
          className="bg-pink-200 mb-2 px-3 py-2 flex items-center justify-between text-2xl rounded"
        >
          <span>{todo.text}</span>

          <div className="flex gap-2">
            <button
              className="border border-yellow-700 rounded bg-orange-400 w-8 h-8 flex items-center justify-center"
              onClick={() => {
                const newText = prompt("Edit todo:", todo.text);
                if (newText && newText.trim())
                  dispatch(updateTodo({ id: todo.id, text: newText }));
              }}
            >
              ✏️
            </button>

            <button
              className="border bg-red-500 rounded w-8 h-8 flex items-center justify-center text-white"
              onClick={() => dispatch(removeTodo(todo.id))}
            >
              ✕
            </button>
          </div>
        </div>
      ))}
    </>
  );
}

export default Todos;
