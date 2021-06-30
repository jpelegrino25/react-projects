import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialUserProps = { users: [], isShow: false };

const userReducer = createSlice({
  name: "user",
  initialState: initialUserProps,
  reducers: {
    addUser(state, action) {
      console.log(action.payload);
      const updatedUsers = [...state.users, action.payload];
      return { users: updatedUsers };
    },
    showUserForm(state, action) {
      state.isShow = action.payload;
    },
  },
});

export const userAction = userReducer.actions;

const store = configureStore({
  reducer: { user: userReducer.reducer },
});

export default store;
