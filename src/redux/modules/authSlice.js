import axios from "axios";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});

export default authSlice.reducer;
export const {} = authSlice.actions;



// 3. 초기값을 통신과 관련된 state로
const initialState = {
  todos: [],
  isLoading: false,
  isError: false,
  error: null,
};

// 1. createAsyncThunk
export const __getTodos = createAsyncThunk(
  "getTodos",
  async (payload, thunkAPI) => {
    try {
    // thunkAPI.fulfillWithValue 또는 thunkAPI.rejectWithValue
    // 이것을 이용하여 extraReducers로 보내줌
    const response = await axios.get("http://localhost:3001/todos")
    } catch {
console.log("error", error)
    }

  }
);

// 2. extraReducers 추가
export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: {},
});

export const {} = todosSlice.actions;
export default todosSlice.reducer;
