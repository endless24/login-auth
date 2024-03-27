import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {},
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    userLoginStore: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { userLoginStore } = userSlice.actions;

export default userSlice.reducer;
