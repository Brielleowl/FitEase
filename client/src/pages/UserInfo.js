import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Container, 
  TextField, 
  Button, 
  Paper, 
  Typography,
  Box,
  Alert,
  Snackbar
} from '@mui/material';
import Logo from "../components/Logo";

function UserInfo() {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    name: '',
    age: '',
    height: '', // in inches
    weight: '', // in pounds
    goalWeight: '',
    timeline: ''
  });
  const [bmi, setBmi] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (userInfo.height && userInfo.weight) {
      const heightInMeters = userInfo.height * 0.0254;
      const weightInKg = userInfo.weight * 0.453592;
      const calculatedBmi = weightInKg / (heightInMeters * heightInMeters);
      setBmi(calculatedBmi.toFixed(1));
    }
  }, [userInfo.height, userInfo.weight]);

  const handleChange = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value
    });
  };
  const testRequest = async () => {
    const response = await fetch('http://localhost:5000/test');
    const data = await response.json();
    console.log(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    console.log('Submitting user info:', userInfo);

    try {
      const response = await fetch('http://localhost:5000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: userInfo.name,
            age: parseInt(userInfo.age),
            height: parseFloat(userInfo.height),
            weight: parseFloat(userInfo.weight),
            goalWeight: parseFloat(userInfo.goalWeight),
            timeline: parseInt(userInfo.timeline),
            bmi: parseFloat(bmi)
        }),
      });

      console.log('Response status:', response.status);

      const data = await response.json();
      console.log('Response data:', data);

      if (!response.ok) {
        throw new Error(data.error || 'Failed to save user information');
      }

      localStorage.setItem('userId', data.userId);
      
      setShowSuccess(true);

      setTimeout(() => {
        navigate('/dashboard');
      }, 1500);

    } catch (err) {
      console.error('Error:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Logo />
      <Container maxWidth="md">
        <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
          <Typography variant="h4" gutterBottom>
            Personal Information
          </Typography>
          
          {error && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {error}
            </Alert>
          )}

          <form onSubmit={handleSubmit}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <TextField
                label="Name"
                name="name"
                value={userInfo.name}
                onChange={handleChange}
                required
                disabled={loading}
              />
              <TextField
                label="Age"
                name="age"
                type="number"
                value={userInfo.age}
                onChange={handleChange}
                required
                disabled={loading}
              />
              <TextField
                label="Height (inches)"
                name="height"
                type="number"
                value={userInfo.height}
                onChange={handleChange}
                required
                disabled={loading}
              />
              <TextField
                label="Current Weight (lbs)"
                name="weight"
                type="number"
                value={userInfo.weight}
                onChange={handleChange}
                required
                disabled={loading}
              />
              {bmi && (
                <Typography variant="body1">
                  Your BMI: {bmi}
                </Typography>
              )}
              <TextField
                label="Goal Weight (lbs)"
                name="goalWeight"
                type="number"
                value={userInfo.goalWeight}
                onChange={handleChange}
                required
                disabled={loading}
              />
              <TextField
                label="Timeline to Reach Goal (weeks)"
                name="timeline"
                type="number"
                value={userInfo.timeline}
                onChange={handleChange}
                required
                disabled={loading}
              />
            </Box>
            
            <Button 
              type="submit" 
              variant="contained" 
              sx={{ mt: 3 }}
              disabled={loading}
            >
              {loading ? 'Saving...' : 'Continue'}
            </Button>
          </form>
        </Paper>

        <Button 
              type="submit" 
              variant="contained"
              onClick={testRequest}
            >
        </Button>

        <Snackbar
          open={showSuccess}
          autoHideDuration={3000}
          onClose={() => setShowSuccess(false)}
        >
          <Alert severity="success">
            Information saved successfully!
          </Alert>
        </Snackbar>
      </Container>
    </>
  );
}

export default UserInfo; 