import React, { useState } from 'react';
import { 
  TextField, 
  Paper, 
  Typography,
  Box,
  IconButton,
  Avatar
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import axios from 'axios';

function ChatBot() {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    const userMessage = { type: 'user', content: message };
    setChatHistory(prev => [...prev, userMessage]);
    setLoading(true);

    try {
      const result = await axios.post('http://localhost:5000/api/chat', {
        prompt: message
      });
      
      const aiMessage = { type: 'ai', content: result.data.response };
      setChatHistory(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error('Error:', error);
      const errorMessage = { type: 'ai', content: 'Error occurred while fetching response' };
      setChatHistory(prev => [...prev, errorMessage]);
    } finally {
      setLoading(false);
      setMessage('');
    }
  };

  return (
    <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Chat header */}
      <Box sx={{ 
        p: 2, 
        borderBottom: '1px solid rgba(0,0,0,0.1)',
        bgcolor: 'white'
      }}>
        <Typography variant="h6">AI Assistant</Typography>
      </Box>

      {/* Chat messages */}
      <Box sx={{ 
        flex: 1,
        overflow: 'auto',
        p: 2,
        bgcolor: '#f8f9fa'
      }}>
        {chatHistory.map((msg, index) => (
          <Box 
            key={index}
            sx={{
              display: 'flex',
              justifyContent: msg.type === 'user' ? 'flex-end' : 'flex-start',
              mb: 2
            }}
          >
            <Box sx={{
              maxWidth: '70%',
              display: 'flex',
              gap: 1,
              alignItems: 'flex-start'
            }}>
              {msg.type === 'ai' && (
                <Avatar sx={{ bgcolor: 'primary.main' }}>AI</Avatar>
              )}
              <Paper
                sx={{
                  p: 2,
                  bgcolor: msg.type === 'user' ? 'primary.main' : 'white',
                  color: msg.type === 'user' ? 'white' : 'text.primary',
                  borderRadius: '1rem',
                  boxShadow: 1
                }}
              >
                <Typography>{msg.content}</Typography>
              </Paper>
              {msg.type === 'user' && (
                <Avatar sx={{ bgcolor: 'secondary.main' }}>U</Avatar>
              )}
            </Box>
          </Box>
        ))}
        {loading && (
          <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
            <Avatar sx={{ bgcolor: 'primary.main' }}>AI</Avatar>
            <Paper sx={{ p: 2, bgcolor: 'white', borderRadius: '1rem' }}>
              <Typography>Typing...</Typography>
            </Paper>
          </Box>
        )}
      </Box>

      {/* Chat input */}
      <Box 
        component="form" 
        onSubmit={handleSubmit}
        sx={{ 
          p: 2, 
          bgcolor: 'white',
          borderTop: '1px solid rgba(0,0,0,0.1)'
        }}
      >
        <Box sx={{ display: 'flex', gap: 1 }}>
          <TextField
            fullWidth
            placeholder="Type a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            variant="outlined"
            size="small"
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: '1.5rem',
              }
            }}
          />
          <IconButton 
            type="submit" 
            color="primary"
            disabled={!message.trim() || loading}
            sx={{ 
              bgcolor: 'primary.main',
              color: 'white',
              '&:hover': {
                bgcolor: 'primary.dark'
              }
            }}
          >
            <SendIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}

export default ChatBot;