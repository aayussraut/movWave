import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "../reducers/index";

const store = configureStore({
  reducer: movieReducer,
});

export default store;
