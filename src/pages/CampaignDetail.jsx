import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import DonateButton from '../components/DonateButton';

export default function CampaignDetail() {
  const { id } = useParams();
  const campaign = useSelector(state =>
    state.campaigns.find(c => c.id === parseInt(id))
  );

  if (!campaign) return <p>Campaign not found.</p>;

  return (
    <div className="container">
      <h2>{campaign.title}</h2>
      <img src={campaign.image} alt={campaign.title} style={{ width: '100%', borderRadius: '8px' }} />
      <p>{campaign.description}</p>
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${(campaign.raised / campaign.goal) * 100}%` }}></div>
      </div>
      <p>₹{campaign.raised} of ₹{campaign.goal}</p>
      <DonateButton campaignId={campaign.id} />
    </div>
  );
}

