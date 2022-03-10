import { configureStore } from "@reduxjs/toolkit";
import globalReducer from "../features/global";
import styleSnowCleanReducer from "../features/styleSnowClean";

export const store = configureStore({
  reducer: {
    global: globalReducer,
    styleSnowClean: styleSnowCleanReducer,
  },
});
