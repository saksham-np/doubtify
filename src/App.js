import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Navbar from './components/Navbar';
import UserDashboard from './components/UserDashboard';
import ExpertDashboard from './components/ExpertDashboard';
import ErrorBoundary from './components/ErrorBoundary';

const App = () => {
  const role = localStorage.getItem('role');

  return (
    <ErrorBoundary>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/user-dashboard" element={role === 'user' ? <UserDashboard /> : <Navigate to="/login" />} />
          <Route path="/expert-dashboard" element={role === 'expert' ? <ExpertDashboard /> : <Navigate to="/login" />} />
        </Routes>
      </Router>
    </ErrorBoundary>
  );
};

export default App;
