import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    firstname: "joe",
    lastname: "chi",
    email: "jcchi2004@yahoo.com",
    password: "12345",
  },
];

const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    //register users
    registerUsers: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(regData) {
        return {
          payload: {
            id: nanoid(),
            ...regData,
          },
        };
      },
    },
  },
});

export const { registerUsers } = registerSlice.actions;

export default registerSlice.reducer;
