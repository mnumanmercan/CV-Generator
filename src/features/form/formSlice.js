import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  headerInfo: {
    name: "Name",
    title: "Title",
    email: "email",
    phone: "555 555 55 55",
    portfolio: "portfolio",
    github: "github",
    linkedin: "linkedin",
  },
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    updateField: (state, action) => {
      const { field, value } = action.payload;
      state.headerInfo[field] = value;
    },
  },
});

export const { updateField } = formSlice.actions;
export default formSlice.reducer;
