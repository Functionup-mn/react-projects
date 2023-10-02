import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "Hello world" }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = { id: nanoid(), text: action.payload };
      console.log(action.payload);
      state.todos = state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    // update khud se banana h
  },
});

export const { addTodo, removeTodo } = todoSlice.actions; // for using in the compnents

export default todoSlice.reducer; // hme btna padega store me all reducers
