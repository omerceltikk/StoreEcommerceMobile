import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {FetchPostMethod} from '../FetchServices';

export const fetchUserData = createAsyncThunk(
  'users/getUsers',
  async (url, body) => {
    const res = FetchPostMethod(url, body);
    return res;
  },
);

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    status: 'idle',
    error: null,
    userStatus: null,
  },
  reducers: {
    loginUserReducer: (state, action) => {
      state.users = [action.payload];
      state.userStatus = action.payload.userStatus;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.users = action.payload;
      })
      .addCase(fetchUserData.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const {loginUserReducer,setStatus} = usersSlice.actions;

export default usersSlice.reducer;
