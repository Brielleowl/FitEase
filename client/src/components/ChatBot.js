import React, { useState } from 'react';
import { 
  TextField, 
  Button, 
  Paper, 
  Typography,
  Box 
} from '@mui/material';
import axios from 'axios';

function ChatBot() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await axios.post('http://localhost:5000/api/chat', {
        prompt
      });
      setResponse(result.data.response);
    } catch (error) {
      console.error('Error:', error);
      setResponse('Error occurred while fetching response');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        AI Chat
      </Typography>
      
      <form onSubmit={handleSubmit}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField
            label="Prompt"
            name="prompt"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            required
          />
        </Box>
        
        <Button 
          type="submit" 
          variant="contained" 
          sx={{ mt: 3 }}
        >
          Send
        </Button>
      </form>

      {loading && (
        <Typography variant="body1">
          Loading...
        </Typography>
      )}

      {response && (
        <Typography variant="body1">
          Response: {response}
        </Typography>
      )}
    </Paper>
  );
}

export default ChatBot; 