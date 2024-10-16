import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials(prev => ({ ...prev, [name]: value }));
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/login', credentials);
            
            console.log('Login Response:', response.data); // Log the full response
            
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('role', response.data.role);
            console.log('Role saved in localStorage:', response.data.role); // Log saved role
            
            navigate(response.data.role === 'expert' ? '/expert-dashboard' : '/user-dashboard');
        } catch (err) {
            console.error('Login failed:', err.response ? err.response.data : err); // Log error response
            setError(err.response ? err.response.data.message : 'Invalid credentials');
        }
    };

    return (
        <div>
            <h1>Login</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={credentials.username}
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={credentials.password}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
