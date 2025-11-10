import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../features/userSlice';
import { useNavigate } from 'react-router-dom';
import '../Login.css'

export default function Login() {
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email) {
      dispatch(login(email));
      navigate('/campaigns');
    }
  };

  return (
    <div className="login-wrapper">
    <div className="login-card">
      <h2>Login</h2>
      <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="password"></input>
      <button onClick={handleLogin}>Login</button>
      {/* <Link to="/signup"><p style={{ color: 'white', marginTop: '10px' }}>Don't have an account? Sign up</p></Link> */}
    </div>
    </div>
  );
}
