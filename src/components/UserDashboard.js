import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserDashboard = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem('token');
            try {
                const response = await axios.get('http://localhost:5000/protected-route', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setData(response.data); // Set your response data
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <p>Loading...</p>;

    return (
        <div>
            <h1>User Dashboard</h1>
            {/* Render your data here */}
            {data && <div>{JSON.stringify(data)}</div>}
        </div>
    );
};

export default UserDashboard;
