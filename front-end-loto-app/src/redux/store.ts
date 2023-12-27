import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartelaReducer from "./slices/cartela.slice";
import { apiFilterReducer } from "./slices/api.slice.filter";
import { apiUploadSheetReducer } from "./slices/api.slice.sheet";

const rootReducer = combineReducers({
  cartela: cartelaReducer,
  apiFilter: apiFilterReducer,
  apiUpload: apiUploadSheetReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
