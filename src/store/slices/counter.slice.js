import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    //add 1 to state
    incrementCounter: (state) => {
      return state + 1;
    },
    //subtract 1 from state
    decrementCounter: (state) => {
      return state - 1;
    },
    //set counter to 0
    resetCounter: () => {
      return 0;
    }
  }
})

export const { incrementCounter, decrementCounter, resetCounter } = counterSlice.actions;
export default counterSlice.reducer;