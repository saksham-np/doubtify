// src/context/UserContext.js
import React, { createContext, useState, useEffect } from 'react';
import jwt_decode from 'jwt-decode'; // Correct default import for v3.1.2
import axios from '../axiosConfig';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decoded = jwt_decode(token); // Use jwt_decode as a function
        setUser(decoded);
        // Optionally, set axios default headers
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      } catch (error) {
        console.error('Invalid token:', error);
        localStorage.removeItem('token');
      }
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
