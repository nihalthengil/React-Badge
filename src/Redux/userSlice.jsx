import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: "user",
  initialState: {
    user: {},
  },
  reducers: {
    addUser: (state, action) => {
      state.user = action.payload;
    },
    removeUser: (state, action) => {
      state.user = state.user.filter((user) => user.id !== action.payload.id);
    },
  },
});
export const { addUser, removeUser } = UserSlice.actions;
export default UserSlice.reducer;
