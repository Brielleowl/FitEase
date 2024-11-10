import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, Button, Box } from '@mui/material';

function LandingPage() {
  const navigate = useNavigate();

  return (
    <Container maxWidth="md">
      <Box sx={{ 
        minHeight: '100vh', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center',
        textAlign: 'center',
        gap: 4
      }}>
        <Typography variant="h2" component="h1">
          Welcome to FitAI
        </Typography>
        <Typography variant="h5">
          Your Personal AI-Powered Fitness Journey
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: '600px', mb: 4 }}>
          Transform your fitness journey with our AI-powered platform. 
          Get personalized workout plans, nutrition advice, and real-time guidance.
        </Typography>
        <Button 
          variant="contained" 
          size="large"
          onClick={() => navigate('/health-check')}
        >
          Get Started
        </Button>
      </Box>
    </Container>
  );
}

export default LandingPage; 