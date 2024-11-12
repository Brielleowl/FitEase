import React, { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  Button,
  LinearProgress,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Card,
  CardContent,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

function Goals() {
  const [goals, setGoals] = useState([
    {
      id: 1,
      title: 'Weight Loss Goal',
      target: 'Lose 10 pounds',
      progress: 60,
      notes: 'Been consistent with workouts, need to improve diet',
      startDate: '2024-01-01',
      targetDate: '2024-03-01'
    },
    // Add more sample goals as needed
  ]);
  
  const [openDialog, setOpenDialog] = useState(false);
  const [newGoal, setNewGoal] = useState({
    title: '',
    target: '',
    progress: 0,
    notes: '',
    startDate: '',
    targetDate: ''
  });

  const handleAddGoal = () => {
    setGoals([...goals, { ...newGoal, id: goals.length + 1 }]);
    setOpenDialog(false);
    setNewGoal({
      title: '',
      target: '',
      progress: 0,
      notes: '',
      startDate: '',
      targetDate: ''
    });
  };

  const handleDeleteGoal = (id) => {
    setGoals(goals.filter(goal => goal.id !== id));
  };

  return (
    <Box sx={{ maxWidth: 800, mx: 'auto', py: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4 }}>
        <Typography variant="h4" component="h1">
          My Fitness Goals
        </Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => setOpenDialog(true)}
        >
          Add Goal
        </Button>
      </Box>

      {/* Goals List */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        {goals.map((goal) => (
          <Card key={goal.id} sx={{ position: 'relative' }}>
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                <Typography variant="h6">{goal.title}</Typography>
                <Box>
                  <IconButton size="small">
                    <EditIcon />
                  </IconButton>
                  <IconButton 
                    size="small" 
                    onClick={() => handleDeleteGoal(goal.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </Box>
              </Box>
              
              <Typography color="textSecondary" gutterBottom>
                Target: {goal.target}
              </Typography>
              
              <Box sx={{ mt: 2, mb: 1 }}>
                <LinearProgress 
                  variant="determinate" 
                  value={goal.progress} 
                  sx={{ height: 10, borderRadius: 5 }}
                />
                <Typography align="right" variant="body2" sx={{ mt: 0.5 }}>
                  {goal.progress}%
                </Typography>
              </Box>

              <Typography variant="body2" sx={{ mt: 2 }}>
                Notes: {goal.notes}
              </Typography>

              <Box sx={{ mt: 2, display: 'flex', gap: 2, color: 'text.secondary' }}>
                <Typography variant="body2">
                  Start: {new Date(goal.startDate).toLocaleDateString()}
                </Typography>
                <Typography variant="body2">
                  Target: {new Date(goal.targetDate).toLocaleDateString()}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>

      {/* Add Goal Dialog */}
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Add New Goal</DialogTitle>
        <DialogContent>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, pt: 2 }}>
            <TextField
              label="Goal Title"
              value={newGoal.title}
              onChange={(e) => setNewGoal({ ...newGoal, title: e.target.value })}
              fullWidth
            />
            <TextField
              label="Target"
              value={newGoal.target}
              onChange={(e) => setNewGoal({ ...newGoal, target: e.target.value })}
              fullWidth
            />
            <TextField
              label="Progress (%)"
              type="number"
              value={newGoal.progress}
              onChange={(e) => setNewGoal({ ...newGoal, progress: Number(e.target.value) })}
              fullWidth
            />
            <TextField
              label="Notes"
              value={newGoal.notes}
              onChange={(e) => setNewGoal({ ...newGoal, notes: e.target.value })}
              multiline
              rows={3}
              fullWidth
            />
            <TextField
              label="Start Date"
              type="date"
              value={newGoal.startDate}
              onChange={(e) => setNewGoal({ ...newGoal, startDate: e.target.value })}
              InputLabelProps={{ shrink: true }}
              fullWidth
            />
            <TextField
              label="Target Date"
              type="date"
              value={newGoal.targetDate}
              onChange={(e) => setNewGoal({ ...newGoal, targetDate: e.target.value })}
              InputLabelProps={{ shrink: true }}
              fullWidth
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
          <Button onClick={handleAddGoal}>Add Goal</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default Goals; 