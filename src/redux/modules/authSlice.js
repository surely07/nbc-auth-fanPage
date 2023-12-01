import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSignedUp: true,
  userId: "",
  userPassword: "",
  userNickName: "",
  isLoggedIn: false,
};

// const BASE_URL = "https://moneyfulpublicpolicy.co.kr";

// export const __loginData = createAsyncThunk(
//   "loginData",
//   async (payload, thunkAPI) => {
//     try {
//       const response = await axios.post(`${BASE_URL}/login`);
//       const accessToken = response.data.token;
//       setCookie("is_login", `${accessToken}`);
//       console.log("response :", response);

//       return thunkAPI.fulfillWithValue(response.data);
//     } catch (error) {
//       console.log("error :", error);
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    SignUp: (state, action) => {
      state.isSignedUp = !state.isSignedUp;
    },
    logIn: (state, action) => {
      return { ...state, isLoggedIn: !state.isLoggedIn };
    },
    setUserId: (state, action) => {
      state.userId = action.payload;
    },
    setUserNickName: (state, action) => {
      state.userNickName = action.payload;
    },
    setUserPassword: (state, action) => {
      state.userPassword = action.payload;
    },
  },
});

export default authSlice.reducer;
export const { SignUp, logIn, setUserId, setUserNickName, setUserPassword } =
  authSlice.actions;
