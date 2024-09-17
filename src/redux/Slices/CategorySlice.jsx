import { createSlice } from "@reduxjs/toolkit";

const CategorySlice = createSlice({
  name: "category",
  initialState: {
    category: "All",
  },
  reducers: {
    setcategory: (state, action) => {
      state.category = action.payload;
    },
  },
});

export const { setcategory } = CategorySlice.actions;
export default CategorySlice.reducer;
