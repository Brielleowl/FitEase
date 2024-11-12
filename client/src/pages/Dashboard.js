import React, { useState } from "react";
import { Box, Paper, Typography, IconButton, Drawer } from "@mui/material";
import ChatBot from "../components/ChatBot";
import Logo from "../components/Logo";
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import ChatIcon from '@mui/icons-material/Chat';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import LogoutIcon from '@mui/icons-material/Logout';

const DRAWER_WIDTH = 240;

function Dashboard() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState('chat');

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    { icon: <HomeIcon />, label: 'Home', value: 'home' },
    { icon: <ChatIcon />, label: 'Chat', value: 'chat' },
    { icon: <TrackChangesIcon />, label: 'Goals', value: 'goals' },
  ];

  const drawer = (
    <Box sx={{ 
      height: '100%', 
      bgcolor: '#fce3dc',
      color: '#1a1a1a',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <Box sx={{ p: 2, borderBottom: '1px solid rgba(0,0,0,0.1)' }}>
        <Logo />
      </Box>
      
      <Box sx={{ flex: 1, p: 2 }}>
        {menuItems.map((item) => (
          <Box
            key={item.value}
            onClick={() => setSelectedTab(item.value)}
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              p: 2,
              cursor: 'pointer',
              borderRadius: 1,
              mb: 1,
              color: '#1a1a1a',
              bgcolor: selectedTab === item.value ? 'rgba(0,0,0,0.05)' : 'transparent',
              '&:hover': {
                bgcolor: 'rgba(0,0,0,0.03)'
              }
            }}
          >
            {item.icon}
            <Typography>{item.label}</Typography>
          </Box>
        ))}
      </Box>

      <Box 
        sx={{ 
          p: 2, 
          borderTop: '1px solid rgba(0,0,0,0.1)',
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          cursor: 'pointer',
          '&:hover': {
            bgcolor: 'rgba(0,0,0,0.03)'
          }
        }}
      >
        <LogoutIcon />
        <Typography>Logout</Typography>
      </Box>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      {/* Sidebar */}
      <Box
        component="nav"
        sx={{
          width: { sm: DRAWER_WIDTH },
          flexShrink: { sm: 0 }
        }}
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { width: DRAWER_WIDTH },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { width: DRAWER_WIDTH },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      {/* Main content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${DRAWER_WIDTH}px)` }
        }}
      >
        <ChatBot />
      </Box>
    </Box>
  );
}

export default Dashboard;
