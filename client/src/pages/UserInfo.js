import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Container, 
  TextField, 
  Button, 
  Paper, 
  Typography,
  Box 
} from '@mui/material';

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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add logic to save user info
    navigate('/dashboard');
  };

  return (
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Personal Information
        </Typography>
        
        <form onSubmit={handleSubmit}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField
              label="Name"
              name="name"
              value={userInfo.name}
              onChange={handleChange}
              required
            />
            <TextField
              label="Age"
              name="age"
              type="number"
              value={userInfo.age}
              onChange={handleChange}
              required
            />
            <TextField
              label="Height (inches)"
              name="height"
              type="number"
              value={userInfo.height}
              onChange={handleChange}
              required
            />
            <TextField
              label="Current Weight (lbs)"
              name="weight"
              type="number"
              value={userInfo.weight}
              onChange={handleChange}
              required
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
            />
            <TextField
              label="Timeline to Reach Goal (weeks)"
              name="timeline"
              type="number"
              value={userInfo.timeline}
              onChange={handleChange}
              required
            />
          </Box>
          
          <Button 
            type="submit" 
            variant="contained" 
            sx={{ mt: 3 }}
          >
            Continue
          </Button>
        </form>
      </Paper>
    </Container>
  );
}

export default UserInfo; 