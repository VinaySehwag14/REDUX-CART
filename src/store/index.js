import { configureStore } from "@reduxjs/toolkit";
import toggleSlice from "./toggleCart";

const store = configureStore({
  reducer: { toggle: toggleSlice.reducer },
});

export default store;
