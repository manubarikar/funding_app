import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../features/userSlice';
import '../styles.css'

export default function Navbar() {
  const user = useSelector(state => state.user.email);
  const dispatch = useDispatch();

  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/campaigns">Campaigns</Link>
      <Link to="/dashboard">Dashboard</Link>
      {user ? (
        <>
          <span>Logged in as {user}</span>
          <button onClick={() => dispatch(logout())}>Logout</button>
        </>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </nav>
  );
}

