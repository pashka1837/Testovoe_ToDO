import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  isCreateTaskOpen: boolean;
  isEditTaskOpen: boolean;
  filter: string;
}

const initialState: CounterState = {
  isCreateTaskOpen: false,
  isEditTaskOpen: false,
  filter: "",
};

export const appSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    setIsCreateTaskOpen(state, action: PayloadAction<boolean>) {
      state.isCreateTaskOpen = action.payload;
    },
    setIsEditTaskOpen(state, action: PayloadAction<boolean>) {
      state.isEditTaskOpen = action.payload;
    },
    setPopUpsClose(state) {
      state.isEditTaskOpen = false;
      state.isCreateTaskOpen = false;
    },
  },
});

export const { setIsCreateTaskOpen, setIsEditTaskOpen, setPopUpsClose } =
  appSlice.actions;

export default appSlice.reducer;
