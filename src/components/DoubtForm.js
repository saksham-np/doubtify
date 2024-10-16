import React, { useState } from 'react';

const DoubtForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [attachments, setAttachments] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Call the Create Doubt API endpoint
    const response = await fetch('/api/doubts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, description, attachments }),
    });
    const data = await response.json();
    // Handle the response data
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
      </label>
      <label>
        Description:
        <textarea value={description} onChange={(event) => setDescription(event.target.value)} />
      </label>
      <label>
        Attachments:
        <input type="file" multiple onChange={(event) => setAttachments(event.target.files)} />
      </label>
      <button type="submit">Post Doubt</button>
    </form>
  );
};

export default DoubtForm;