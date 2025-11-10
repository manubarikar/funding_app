import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import campaignReducer from '../features/campaignSlice';
import donationReducer from '../features/donationSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    campaigns: campaignReducer,
    donations: donationReducer,
  },
});

