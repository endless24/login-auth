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
      prepare(firstname, lastname, email, password) {
        return {
          payload: {
            id: nanoid(),
            firstname,
            lastname,
            email,
            password,
          },
        };
      },
    },
  },
});

export const { registerUsers } = registerSlice.actions;

export default registerSlice.reducer;
