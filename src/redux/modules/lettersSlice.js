import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  letters: [],
  isLoading: false,
  isError: false,
  error: null,
};

export const __getLetters = createAsyncThunk(
  "getLetters",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.get("http://localhost:3001/letters");
      console.log("response :", response);
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      console.log("error :", error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const lettersSlice = createSlice({
  name: "letters",
  initialState,
  reducers: {
    addLetter: (state, action) => {
      const newLetter = action.payload;
      return { ...state, letters: [newLetter, ...state.letters] };
    },
    deleteLetter: (state, action) => {
      const letterId = action.payload;
      return state.filter((letter) => letter.id !== letterId);
    },
    editLetter: (state, action) => {
      const { userId, nickname, avatar, editedContent } = action.payload;
      return state.map((letter) => {
        if (letter.userId === userId) {
          return { ...letter, content: editedContent, nickname, avatar };
        }
        return letter;
      });
    },
    setLetter: (state, action) => {
      return { ...state, letters: action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(__getLetters.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(__getLetters.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.letters = action.payload;
      })
      .addCase(__getLetters.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload;
      });
  },
});

export default lettersSlice.reducer;
export const { addLetter, deleteLetter, editLetter, setLetter } =
  lettersSlice.actions;
