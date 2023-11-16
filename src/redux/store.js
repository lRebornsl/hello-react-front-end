import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: { 
    greetingSlice
  },
});

export default store