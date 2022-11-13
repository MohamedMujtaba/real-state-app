import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "normal",
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    changeMode: (state) => {
      if (state.mode === "normal") {
        state.mode = "easy";
      } else {
        state.mode = "normal";
      }
    },
  },
});

export const { changeMode } = authSlice.actions;
export default authSlice.reducer;
