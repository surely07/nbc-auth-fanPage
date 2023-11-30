import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSignedUp: true,
  userId: "",
  userPassword: "",
  userNickName: "",
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    SignUp: (state, action) => {
      state.isSignedUp = !state.isSignedUp;
    },
    logIn: (state, action) => {
      state.isLoggedIn = !state.isLoggedIn;
    },
    setUserId: (state, action) => {
      state.userId = action.payload;
    },
    setUserNickName: (state, action) => {
      state.userId = action.payload;
    },
    setUserPassword: (state, action) => {
      state.userPassword = action.payload;
    },
  },
});

export default authSlice.reducer;
export const { SignUp, logIn, setUserId, setUserNickName, setUserPassword } =
  authSlice.actions;
