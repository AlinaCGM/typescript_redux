import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slice/counter";

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

//type for the State
export type RootState = ReturnType<typeof store.getState>;
export default store;
