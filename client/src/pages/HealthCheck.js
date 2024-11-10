import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Container, 
  Typography, 
  FormGroup, 
  FormControlLabel, 
  Checkbox, 
  Button, 
  Paper,
  Box 
} from '@mui/material';

function HealthCheck() {
  const navigate = useNavigate();
  const [conditions, setConditions] = useState({
    heartCondition: false,
    jointIssues: false,
    diabetes: false,
    highBloodPressure: false,
    other: false
  });

  const handleChange = (event) => {
    setConditions({
      ...conditions,
      [event.target.name]: event.target.checked
    });
  };

  const handleSubmit = () => {
    // Here you can add logic to handle health conditions
    navigate('/user-info');
  };

  return (
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Health Check
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          Please indicate if you have any of the following conditions:
        </Typography>
        
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={conditions.heartCondition} onChange={handleChange} name="heartCondition" />}
            label="Heart Condition"
          />
          <FormControlLabel
            control={<Checkbox checked={conditions.jointIssues} onChange={handleChange} name="jointIssues" />}
            label="Joint Issues"
          />
          <FormControlLabel
            control={<Checkbox checked={conditions.diabetes} onChange={handleChange} name="diabetes" />}
            label="Diabetes"
          />
          <FormControlLabel
            control={<Checkbox checked={conditions.highBloodPressure} onChange={handleChange} name="highBloodPressure" />}
            label="High Blood Pressure"
          />
          <FormControlLabel
            control={<Checkbox checked={conditions.other} onChange={handleChange} name="other" />}
            label="Other Conditions"
          />
        </FormGroup>

        <Box sx={{ mt: 3 }}>
          <Button variant="contained" onClick={handleSubmit}>
            Continue
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}

export default HealthCheck; 