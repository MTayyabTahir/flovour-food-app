import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../redux/Slices/Cartslice"; // Import your cart slice
import CategorySlice from "./Slices/CategorySlice";
import Searchslice from "./Slices/Searchslice";

const store = configureStore({
  reducer: {
    Cart: cartReducer, // Register cart reducer
    category: CategorySlice,
    search: Searchslice,
  },
});

export default store;
