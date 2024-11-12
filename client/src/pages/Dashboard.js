import React, { useState } from 'react';
import { 
  Box, 
  Drawer, 
  List, 
  ListItem, 
  ListItemButton, 
  ListItemIcon, 
  ListItemText,
} from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import ChatBot from '../components/ChatBot';
import Goals from '../components/Goals';
import Logo from '../components/Logo';

const DRAWER_WIDTH = 240;

function Dashboard() {
  const [selectedTab, setSelectedTab] = useState('chat');

  const handleTabChange = (value) => {
    setSelectedTab(value);
  };

  const menuItems = [
    { icon: <ChatIcon />, label: 'Chat', value: 'chat' },
    { icon: <TrackChangesIcon />, label: 'Goals', value: 'goals' },
  ];

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      {/* Permanent Drawer */}
      <Drawer
        variant="permanent"
        sx={{
          width: DRAWER_WIDTH,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: DRAWER_WIDTH,
            boxSizing: 'border-box',
            bgcolor: '#fce3dc',
            borderRight: 'none',
          },
        }}
      >
        {/* Logo Section */}
        <Box
          sx={{
            height: '80px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
          }}
        >
          <Logo />
        </Box>

        {/* Menu Items */}
        <List>
          {menuItems.map((item) => (
            <ListItem key={item.value} disablePadding>
              <ListItemButton
                selected={selectedTab === item.value}
                onClick={() => handleTabChange(item.value)}
                sx={{
                  '&.Mui-selected': {
                    bgcolor: 'rgba(0, 0, 0, 0.08)',
                  },
                }}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Main content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
        }}
      >
        {selectedTab === 'chat' ? <ChatBot /> : <Goals />}
      </Box>
    </Box>
  );
}

export default Dashboard;
