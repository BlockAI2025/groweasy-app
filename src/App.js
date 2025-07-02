import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Box, Drawer, List, ListItem, ListItemText, Toolbar, AppBar, Typography } from '@mui/material';

const drawerWidth = 240;

function Dashboard() {
  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="fixed" sx={{ zIndex: 1201 }}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            GrowEasy Dashboard
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
      >
        <Toolbar />
        <List>
          {[
            { text: 'Create Ad', path: '/create-ad' },
            { text: 'View Stats', path: '/view-stats' },
            { text: 'Optimize Ads', path: '/optimize' },
            { text: 'Upload Content', path: '/upload-content' },
            { text: 'View Leads', path: '/view-leads' },
            { text: 'Payments', path: '/payments' },
            { text: 'Compliance', path: '/compliance' },
          ].map((item) => (
            <ListItem button component={Link} to={item.path} key={item.text}>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3, ml: `${drawerWidth}px` }}>
        <Toolbar />
        <Routes>
          <Route path="/create-ad" element={<div>Create Ad Page</div>} />
          <Route path="/view-stats" element={<div>View Stats Page</div>} />
          <Route path="/optimize" element={<div>Optimize Page</div>} />
          <Route path="/upload-content" element={<div>Upload Content Page</div>} />
          <Route path="/view-leads" element={<div>View Leads Page</div>} />
          <Route path="/payments" element={<div>Payments Page</div>} />
          <Route path="/compliance" element={<div>Compliance Page</div>} />
          <Route path="*" element={<div>Welcome to GrowEasy!</div>} />
        </Routes>
      </Box>
    </Box>
  );
}

export default function App() {
  return (
    <Router>
      <Dashboard />
    </Router>
  );
}
