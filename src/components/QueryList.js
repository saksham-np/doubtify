import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import axios from 'axios';

function QueryList() {
  const [queries, setQueries] = useState([]);

  useEffect(() => {
    const fetchQueries = async () => {
      const res = await axios.get('/api/queries');
      setQueries(res.data);
    };
    fetchQueries();
  }, []);

  return (
    <div>
      {queries.map(query => (
        <Card key={query._id} style={{ marginBottom: '20px' }}>
          <CardContent>
            <Typography variant="h5">{query.title}</Typography>
            <Typography>{query.description}</Typography>
            {query.image && <img src={query.image} alt="query" width="100" />}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default QueryList;
