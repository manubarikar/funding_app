import React, { useEffect, useState } from 'react';

export default function RewardTiers() {
  const [time, setTime] = useState(600);
  useEffect(() => {
    const timer = setInterval(() => setTime(t => Math.max(0, t - 1)), 1000);
    return () => clearInterval(timer);
  }, []);
  const mins = String(Math.floor(time / 60)).padStart(2, '0');
  const secs = String(time % 60).padStart(2, '0');

  return (
    <div>
      <h2>Reward Tiers</h2>
      <div style={{ display: 'flex', gap: '10px' }}>
        <div className="campaign-card"><h3>₹500</h3><p>Thank You Email</p></div>
        <div className="campaign-card"><h3>₹1000</h3><p>Exclusive Badge</p></div>
        <div className="campaign-card"><h3>₹5000</h3><p>Meet the Creator</p><p>Time Left: {mins}:{secs}</p></div>
      </div>
    </div>
  );
}

