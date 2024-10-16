import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Welcome to Doubtify</h1>
      <p>Choose your role to continue:</p>
      <Link to="/login">
        <button style={{ margin: '10px' }}>Login</button>
      </Link>
      <Link to="/register">
        <button style={{ margin: '10px' }}>Register</button>
      </Link>
    </div>
  );
};

export default LandingPage;
