import { createSlice } from '@reduxjs/toolkit';

const donationSlice = createSlice({
  name: 'donations',
  initialState: [],
  reducers: {
    donate: (state, action) => {
      state.push(action.payload);
    }
  }
});

export const { donate } = donationSlice.actions;
export default donationSlice.reducer;

