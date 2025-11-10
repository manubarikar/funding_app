import React from 'react';
import CampaignList from '../components/CampaignList';
import CampaignWizard from '../components/CampaignWizard';

export default function Campaigns() {
  return (
    <div className="container">
      <h2>Campaigns</h2>
      <CampaignWizard />
      <CampaignList />
    </div>
  );
}

