import React, { useEffect, useState } from 'react';
import { ref, onValue } from 'firebase/database';
import { db } from '../firebase';

export default function DonationDashboard({ campaignId }) {
  const [donations, setDonations] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const donationRef = ref(db, 'donations/' + campaignId);

    const unsubscribe = onValue(donationRef, snapshot => {
      const data = snapshot.val();
      if (data) {
        const donationList = Object.values(data);
        setDonations(donationList);

        const totalAmount = donationList.reduce((sum, d) => sum + d.amount, 0);
        setTotal(totalAmount);
      } else {
        setDonations([]);
        setTotal(0);
      }
    });

    return () => unsubscribe();
  }, [campaignId]);

  return (
    <div className="dashboard">
      <h3>Total Raised: ₹{total}</h3>
      <ul>
        {donations.map((d, index) => (
          <li key={index}>
            <strong>{d.donor}</strong> donated ₹{d.amount} on {new Date(d.timestamp).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
}