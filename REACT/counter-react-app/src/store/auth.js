import { createSlice } from "@reduxjs/toolkit";

const authInitialState = { authenticated: false };
const authSlide = createSlice({
  name: "auth",
  initialState: authInitialState,
  reducers: {
    login(state) {
      state.authenticated = true;
    },
    logout(state) {
      state.authenticated = false;
    },
  },
});

export const authAction = authSlide.actions;
export default authSlide.reducer;
