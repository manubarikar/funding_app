import React from 'react';
import DonationDashboard from '../components/DonationDashboard';
import SupporterFeed from '../components/SupporterFeed';
import RewardTiers from '../components/RewardTiers';

export default function Dashboard() {
    return (
        <div className="dashboard-wrapper">
            <div className="dashboard-section">
                <DonationDashboard />
                <SupporterFeed />
                <RewardTiers />
            </div>
        </div>

    );
}

