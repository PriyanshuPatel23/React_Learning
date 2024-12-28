import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reducers/counterSlice"; // Import the default reducer

export default configureStore({
  reducer: {
    counter: counterReducer, // Use the reducer directly
  },
});
