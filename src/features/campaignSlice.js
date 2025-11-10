// src/features/campaignSlice.js
import { createSlice } from '@reduxjs/toolkit';

const campaignSlice = createSlice({
  name: 'campaigns',
  initialState: [
    {
      id: 1,
      title: "Save the Rainforest",
      description: "Help us protect ecosystems.",
      goal: 100000,
      raised: 45000,
      image: "https://images.unsplash.com/photo-1508780709619-79562169bc64"
    },
    {
      id: 2,
      title: "Clean Water for All",
      description: "Fund purification systems.",
      goal: 75000,
      raised: 60000,
      image: "https://images.unsplash.com/photo-1603570419960-8f5c4b6f1c5b"
    }
  ],
  reducers: {
    addCampaign: (state, action) => {
      state.push(action.payload);
    },
    updateRaisedAmount: (state, action) => {
      const { id, amount } = action.payload;
      const campaign = state.find(c => c.id === id);
      if (campaign) {
        campaign.raised += amount;
      }
    }
  }
});

export const { addCampaign, updateRaisedAmount } = campaignSlice.actions;
export default campaignSlice.reducer;

