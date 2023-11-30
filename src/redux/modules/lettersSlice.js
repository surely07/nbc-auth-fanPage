import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const lettersSlice = createSlice({
  name: "letters",
  initialState,
  reducers: {
    addLetter: (state, action) => {
      const newLetter = action.payload;
      return [newLetter, ...state];
    },
    deleteLetter: (state, action) => {
      const letterId = action.payload;
      return state.filter((letter) => letter.id !== letterId);
    },
    editLetter: (state, action) => {
      const { id, editedContent } = action.payload;
      return state.map((letter) => {
        if (letter.id === id) {
          return { ...letter, content: editedContent };
        }
        return letter;
      });
    },
    setLetter: (state, action) => {
      return action.payload;
    },
  },
});

export default lettersSlice.reducer;
export const { addLetter, deleteLetter, editLetter, setLetter } =
  lettersSlice.actions;
