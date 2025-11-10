import React from 'react';
import DonateButton from './DonateButton';

const campaigns = [
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
];

export default function CampaignList() {
  return (
    <div className="campaign-grid">
      {campaigns.map(c => (
        <div key={c.id} className="campaign-card glass">
          <img src={c.image} alt={c.title} />
          <h3>{c.title}</h3>
          <p>{c.description}</p>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${(c.raised / c.goal) * 100}%` }}></div>
          </div>
          <p>₹{c.raised} of ₹{c.goal}</p>
          <DonateButton campaignId={c.id} />
        </div>
      ))}
    </div>
  );
}

