import { EnhancedStore, configureStore } from "@reduxjs/toolkit";
import appSlice from "../feature/appSlice";
import { tasksAPI } from "../services/tasksAPI";

export const store = configureStore({
  reducer: {
    app: appSlice,
    [tasksAPI.reducerPath]: tasksAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tasksAPI.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type AppStore = EnhancedStore;
