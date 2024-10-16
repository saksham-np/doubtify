import React, { useState } from 'react';
import axios from 'axios';

const ExpertSignup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [expertise, setExpertise] = useState('');
  const [error, setError] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const res = await axios.post('http://localhost:5000/api/experts/signup', {
        username,
        password,
        expertise,
      });
      alert(res.data.message);
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <div>
      <h1>Expert Signup</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSignup}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Expertise"
          value={expertise}
          onChange={(e) => setExpertise(e.target.value)}
          required
        />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default ExpertSignup;
