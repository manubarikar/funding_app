import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { donate } from '../features/donationSlice';

export default function DonateButton({ campaignId }) {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.email);

  const handleDonate = () => {
    if (!user) return alert("Login first");
    const amount = prompt("Enter donation amount:");
    if (amount) {
      dispatch(donate({ campaignId, amount: parseInt(amount), donor: user }));
      alert("Donation successful!");
    }
  };

  return <button onClick={handleDonate}>Donate Now</button>;
}

