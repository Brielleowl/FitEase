import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Box, 
  Drawer, 
  List, 
  ListItem, 
  ListItemButton, 
  ListItemIcon, 
  ListItemText,
  Button,
} from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import LogoutIcon from '@mui/icons-material/Logout';
import ChatBot from '../components/ChatBot';
import Goals from '../components/Goals';
import Logo from '../components/Logo';

const DRAWER_WIDTH = 240;

function Dashboard() {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState('chat');

  const handleTabChange = (value) => {
    if (value === 'goals') {
      // Open Goals in a new tab
      window.open('/dashboard?tab=goals', '_blank');
    } else {
      // Regular tab switching for Chat
      setSelectedTab(value);
    }
  };

  const handleLogout = () => {
    // Add any logout logic here (clear localStorage, etc.)
    navigate('/');
  };

  const menuItems = [
    { icon: <ChatIcon />, label: 'Chat', value: 'chat' },
    { icon: <TrackChangesIcon />, label: 'Goals', value: 'goals' },
  ];

  // Get the tab parameter from URL if it exists
  React.useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const tabParam = urlParams.get('tab');
    if (tabParam) {
      setSelectedTab(tabParam);
    }
  }, []);

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
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
            display: 'flex',
            flexDirection: 'column',
          },
        }}
      >
        {/* Logo Section */}
        <Box
          onClick={() => window.open('/', '_blank')}
          sx={{
            height: '80px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
            bgcolor: 'white',
            cursor: 'pointer',
            '&:hover': {
              opacity: 0.8,
            },
          }}
        >
          <Logo />
        </Box>

        {/* Menu Items */}
        <List sx={{ flexGrow: 1 }}>
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

        {/* Warning Message */}
        <Box 
          sx={{ 
            p: 2, 
            borderTop: '1px solid rgba(0, 0, 0, 0.12)',
            color: 'text.primary',
            fontSize: '0.75rem',
            textAlign: 'center',
            fontStyle: 'italic',
            opacity: 0.8
          }}
        >
          Please don't close or refresh your browser while we're working on the next iteration.
        </Box>

        {/* Logout Button */}
        <Box sx={{ p: 2, borderTop: '1px solid rgba(0, 0, 0, 0.12)' }}>
          {/* <Button
            fullWidth
            startIcon={<LogoutIcon />}
            onClick={handleLogout}
            sx={{
              justifyContent: 'flex-start',
              color: 'text.primary',
              '&:hover': {
                bgcolor: 'rgba(0, 0, 0, 0.08)',
              },
            }}
          >
            Logout
          </Button> */}
        </Box>
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
