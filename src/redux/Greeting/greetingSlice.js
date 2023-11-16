import { createAsyncThunk, createReducer } from '@reduxjs/toolkit';
import axios from 'axios';

const GET_GREETING = "greetingStore/greeting/GET_GREETING";

export const getGreeting = createAsyncThunk(GET_GREETING, () => {
  return axios.get('http://127.0.0.1:3000/api/greeting')
    .then(res => res.data)
    .catch(err => console.log(err));
});

const initialState = {
  greeting: ''
};

const greetingSlice = createReducer(initialState, builder => {
  builder
    .addCase(getGreeting.fulfilled, (state, { payload }) => {
      state.greeting = payload;
    })
});

export default greetingSlice