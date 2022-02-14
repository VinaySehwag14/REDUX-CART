import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart";
import toggleSlice from "./toggleCart";

const store = configureStore({
  reducer: { toggle: toggleSlice.reducer, cart: cartSlice.reducer },
});

export default store;
