import { configureStore } from "@reduxjs/toolkit";
import infoSlice from "../feature/ProductsSlice";
const store = configureStore({
  reducer: {
    infoStudent: infoSlice,
  },
});
export default store;
