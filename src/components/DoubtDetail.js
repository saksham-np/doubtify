// src/components/DoubtDetail.js
import React, { useEffect, useState } from 'react';
import axios from '../axiosConfig'; // Adjust the path as necessary
import { useParams, useNavigate } from 'react-router-dom';

function DoubtDetail() {
  const { id } = useParams();
  const [doubt, setDoubt] = useState(null);
  const [bidAmount, setBidAmount] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchDoubt() {
      try {
        const response = await axios.get(`/doubt/${id}`);
        setDoubt(response.data);
      } catch (error) {
        console.error('Error fetching doubt:', error);
      }
    }

    fetchDoubt();
  }, [id]);

  const handlePlaceBid = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`/doubt/${id}/bids`, { amount: bidAmount });
      alert('Bid placed successfully!');
      setBidAmount('');
      navigate('/doubts'); // Redirect to doubt list
    } catch (error) {
      console.error('Error placing bid:', error.response.data.error);
      alert(error.response.data.error);
    }
  };

  if (!doubt) return <div className="commonContainer">Loading...</div>;

  return (
    <div className="commonContainer">
      <h2>{doubt.title}</h2>
      <p>{doubt.description}</p>
      <h3>Bids</h3>
      {doubt.bids && doubt.bids.length > 0 ? (
        doubt.bids.map(bid => (
          <div key={bid._id} className="bidCard">
            <p><strong>Expert:</strong> {bid.expert.email}</p>
            <p><strong>Amount:</strong> ${bid.amount}</p>
          </div>
        ))
      ) : (
        <p>No bids yet.</p>
      )}
      <form onSubmit={handlePlaceBid}>
        <input
          type="number"
          placeholder="Bid Amount"
          className="commonInput"
          value={bidAmount}
          onChange={(e) => setBidAmount(e.target.value)}
          required
          min="1"
        />
        <button type="submit" className="commonButton">Place Bid</button>
      </form>
    </div>
  );
}

export default DoubtDetail;
