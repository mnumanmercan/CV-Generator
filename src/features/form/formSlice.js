import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  headerInfo: {
    name: "Name",
    email: "email",
    title: "Title",
    phone: "555 555 55 55",
    linkedin: "linkedin",
    github: "github",
    portfolio: "portfolio"
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
