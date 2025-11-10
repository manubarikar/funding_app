import React from 'react';
import { Link } from 'react-router-dom';
import '../Home.css';

export default function Home() {
  return (
    <div className="home-hero">
      <div className="home-overlay">
        <h1>Welcome to CrowdFund</h1>
        <div className="home-buttons">
          <Link to="/signup"><button>Signup</button></Link>
          <Link to="/login"><button>Login</button></Link>
        </div>
      </div>
    </div>
  );
}