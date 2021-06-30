import { createSlice } from "@reduxjs/toolkit";

const countInitialState = { counter: 0, showCounter: true };

const counterSlide = createSlice({
  name: "counter",
  initialState: countInitialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    showCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterAction = counterSlide.actions;

export default counterSlide.reducer;
