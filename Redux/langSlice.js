import { createSlice } from "@reduxjs/toolkit";
import { i18n } from "../src/utils/localizations";

const initialState = {
  language: "en",
};

const langSlice = createSlice({
  name: "lang",
  initialState,
  reducers: {
    changeLang: (state, action) => {
      // const { lang } = action.payload;
      state.language = action.payload;
      console.log(action.payload);
    },
  },
});

export default langSlice.reducer;
export const { changeLang } = langSlice.actions;
