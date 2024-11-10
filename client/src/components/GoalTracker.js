import React from 'react';
import { 
  Typography, 
  Box,
  LinearProgress,
  Paper 
} from '@mui/material';

function GoalTracker() {
  // This is a placeholder. You'll want to connect this to your state management
  const goals = {
    currentWeight: 180,
    goalWeight: 160,
    timelineWeeks: 12,
    progress: 30 // percentage
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Goal Progress
      </Typography>
      
      <Paper elevation={1} sx={{ p: 2, mb: 2 }}>
        <Typography variant="body1" gutterBottom>
          Current Weight: {goals.currentWeight} lbs
        </Typography>
        <LinearProgress variant="determinate" value={goals.progress} />
      </Paper>
    </Box>
  );
}

export default GoalTracker; 