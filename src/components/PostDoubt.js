// src/components/PostDoubt.js
import React, { useState } from 'react';
import axios from '../axiosConfig'; // Ensure the import path is correct
import { useNavigate } from 'react-router-dom';

function PostDoubt() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handlePostDoubt = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post('/doubts', { title, description });
      alert('Doubt posted successfully!');
      setTitle('');
      setDescription('');
      navigate('/user-dashboard'); // Navigate after success
    } catch (error) {
      console.error('Error posting doubt:', error.response?.data?.error || error.message);
      alert(error.response?.data?.error || 'Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="commonContainer">
      <h2>Post a Doubt</h2>
      <form onSubmit={handlePostDoubt}>
        <input
          type="text"
          placeholder="Title"
          className="commonInput"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Description"
          className="commonInput"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
        <button type="submit" className="commonButton" disabled={loading}>
          {loading ? 'Posting...' : 'Post Doubt'}
        </button>
      </form>
    </div>
  );
}

export default PostDoubt;
