import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  formData: {
    name: "",
    email: "",
    title: "",
    phone: "",
    social: {
        linkedin: "",
        github: "",
        portfolio: ""
    }
  },
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    updateField: (state, action) => {
      const { field, value } = action.payload;
      state.formData[field] = value;
    },
  },
});

export const { updateField } = formSlice.actions;
export default formSlice.reducer;
