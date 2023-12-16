import { configureStore } from "@reduxjs/toolkit";
import cartelaReducer from "./slices/cartela.slice";

export const store = configureStore({
  reducer: cartelaReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
