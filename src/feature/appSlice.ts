import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  isCreateTaskOpen: boolean;
  isEditTaskOpen: boolean;
  isDeleteTaskOpen: boolean;
  isTaskOpen: boolean;
  curTask: TaskT | null;
  filter: string;
}

const initialState: CounterState = {
  curTask: null,
  isCreateTaskOpen: false,
  isEditTaskOpen: false,
  isDeleteTaskOpen: false,
  isTaskOpen: false,
  filter: "",
};

export const appSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    setCreateTaskOpen(state, action: PayloadAction<boolean>) {
      state.isCreateTaskOpen = action.payload;
    },
    setEditTaskOpen(state, action: PayloadAction<boolean>) {
      state.isEditTaskOpen = action.payload;
    },
    setPopUpsClose(state) {
      state.isEditTaskOpen = false;
      state.isCreateTaskOpen = false;
      state.isDeleteTaskOpen = false;
      state.isTaskOpen = false;
      state.curTask = null;
    },
    setDeleteTaskOpen(state, action: PayloadAction<boolean>) {
      state.isDeleteTaskOpen = action.payload;
    },
    setTaskOpen(state, action: PayloadAction<boolean>) {
      state.isTaskOpen = action.payload;
    },
    setCurTask(state, action: PayloadAction<TaskT | null>) {
      state.curTask = action.payload;
    },
  },
});

export const {
  setCreateTaskOpen,
  setEditTaskOpen,
  setPopUpsClose,
  setDeleteTaskOpen,
  setTaskOpen,
  setCurTask,
} = appSlice.actions;

export default appSlice.reducer;
