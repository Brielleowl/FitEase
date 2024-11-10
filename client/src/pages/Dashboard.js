import React, { useState } from 'react';
import { 
  Container, 
  Paper, 
  Tabs, 
  Tab, 
  Box, 
  Typography 
} from '@mui/material';
import ChatBot from '../components/ChatBot';
import GoalTracker from '../components/GoalTracker';

function TabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

function Dashboard() {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ mt: 4 }}>
        <Tabs value={tabValue} onChange={handleTabChange}>
          <Tab label="AI Chat" />
          <Tab label="Goal Tracker" />
        </Tabs>

        <TabPanel value={tabValue} index={0}>
          <ChatBot />
        </TabPanel>
        <TabPanel value={tabValue} index={1}>
          <GoalTracker />
        </TabPanel>
      </Paper>
    </Container>
  );
}

export default Dashboard; 