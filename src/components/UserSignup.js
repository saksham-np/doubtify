import React, { useState } from 'react';
import axios from 'axios';

const UserSignup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const res = await axios.post('http://localhost:5000/api/users/signup', {
        username,
        password,
      });
      alert(res.data.message);
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <div>
      <h1>User Signup</h1>
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
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default UserSignup;
