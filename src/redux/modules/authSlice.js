import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  // logData: {
  isSignedUp: true,
  userId: localStorage.getItem("id") || "",
  userPassword: "",
  userNickName: "",
  userAvatar: null,
  isLoggedIn: false,
  // },
  // isLoading: false,
  // isError: false,
  // error: null,
};

const BASE_URL = "https://moneyfulpublicpolicy.co.kr";

export const __getUserData = createAsyncThunk(
  "getUserData",
  async (payload, thunkAPI) => {
    const accessToken = localStorage.getItem("accessToken");

    if (accessToken) {
      try {
        const response = await axios.get(`${BASE_URL}/user`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        });
        console.log(response.data);
        return thunkAPI.fulfillWithValue(response.data);
      } catch (error) {
        console.log("error :", error);
        return thunkAPI.rejectWithValue(error);
      }
    }
    return;
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signUp: (state, action) => {
      state.isSignedUp = action.payload;
    },
    logIn: (state, action) => {
      state.isLoggedIn = action.payload;
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
    setUserAvatar: (state, action) => {
      state.userAvatar = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(__getUserData.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(__getUserData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.letters = action.payload;
      })
      .addCase(__getUserData.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload;
      });
  },
});

export default authSlice.reducer;
export const {
  signUp,
  logIn,
  setUserId,
  setUserNickName,
  setUserPassword,
  setUserAvatar,
} = authSlice.actions;
