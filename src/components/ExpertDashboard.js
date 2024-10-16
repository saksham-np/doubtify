import React, { useState } from 'react';

const ExpertDashboard = () => {
  const [queries] = useState(['Sample Query 1', 'Sample Query 2']);
  const [bids, setBids] = useState([]);

  const handleBid = (query) => {
    setBids((prevBids) => [...prevBids, query]);
    // You can add socket emit logic here if needed
  };

  return (
    <div>
      <h1>Expert Dashboard</h1>
      <ul>
        {queries.map((query, index) => (
          <li key={index}>
            {query} 
            <button onClick={() => handleBid(query)}>Bid</button>
          </li>
        ))}
      </ul>
      <h2>Bids</h2>
      <ul>
        {bids.map((bid, index) => (
          <li key={index}>{bid}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExpertDashboard;
