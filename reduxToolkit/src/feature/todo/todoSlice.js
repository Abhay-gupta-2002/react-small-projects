import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialState = {
  todos: [{ id:nanoid(), text: "hello world" }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: nanoid(),
        text: action.payload.text,
      };
      state.todos.push(newTodo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      state.todos.forEach((todo) => {
        if (todo.id === action.payload.id) todo.text = action.payload.text;
      });
    }
  }
});


export const {addTodo,removeTodo,updateTodo}=todoSlice.actions

export default todoSlice.reducer