import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDark: false,
};

const colorModeSlice = createSlice({
  name: "colorMode",
  initialState,
  reducers: {
    toggle: (state) => {
      state.isDark = !state.isDark;
    },
  },
});

export const { toggle } = colorModeSlice.actions;
export default colorModeSlice.reducer;
