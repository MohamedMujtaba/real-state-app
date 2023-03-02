import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "easy",
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.mode = "normal";
    },
    logout: (state) => {
      state.mode = "easy";
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
