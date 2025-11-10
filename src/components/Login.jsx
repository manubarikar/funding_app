import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../features/userSlice';
import styles from './Login.module.css'

export default function Login() {
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();

  const handleLogin = () => {
    if (email) dispatch(login(email));
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <h2>Sign In to CrowdFund</h2>
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );

}

