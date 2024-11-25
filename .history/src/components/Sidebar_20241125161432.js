// src/components/Sidebar.js

import React from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  ListItemButton,
  Collapse,
} from '@mui/material';
import { Link } from 'react-router-dom';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const Sidebar = () => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Drawer variant="permanent" style={{ width: '240px' }}>
      <List>
        <ListItem button component={Link} to="/">
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button onClick={handleClick}>
          <ListItemText primary="Meer Opties" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton component={Link} to="/optie1">
              <ListItemText primary="Optie 1" />
            </ListItemButton>
            <ListItemButton component={Link} to="/optie2">
              <ListItemText primary="Optie 2" />
            </ListItemButton>
          </List>
        </Collapse>
        <Divider />
      </List>
    </Drawer>
  );
};

export default Sidebar;
