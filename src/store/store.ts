import { EnhancedStore, configureStore } from "@reduxjs/toolkit";
import { tasksAPI } from "../services/tasksAPI";

export const store = configureStore({
  reducer: {},
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tasksAPI.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type AppStore = EnhancedStore;
