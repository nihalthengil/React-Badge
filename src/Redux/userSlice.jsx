import { createSlice } from "@reduxjs/toolkit";

const TodoSlice = createSlice({
  name: "user",
  initialState: {
    user: [],
  },
  reducers:{
    addUser: (state, action) => {
      state.user.push(action.payload);
    },
    removeUser: (state, action) => {
      state.user = state.user.filter((user) => user.id !== action.payload.id);
    },
    
  }
    })
    export const {addUser,removeUser } = TodoSlice.actions;
    export default TodoSlice.reducer;