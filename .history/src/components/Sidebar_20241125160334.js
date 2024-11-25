// src/components/Sidebar.js

import React from 'react';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <Drawer variant="permanent" style={{ width: '240px' }}>
      <List>
        <ListItem button component={Link} to="/">
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button component={Link} to="/upload">
          <ListItemText primary="Upload 3D-model" />
        </ListItem>
        <ListItem button component={Link} to="/vraag-offerte">
          <ListItemText primary="Vraag Offerte" />
        </ListItem>
        <ListItem button component={Link} to="/quotes">
          <ListItemText primary="Bekijk Offertes" />
        </ListItem>
        <ListItem button component={Link} to="/ontwerphistorie">
          <ListItemText primary="Ontwerphistorie" />
        </ListItem>
        <ListItem button component={Link} to="/profiel">
          <ListItemText primary="Profiel" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
