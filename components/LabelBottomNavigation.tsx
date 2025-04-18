'use client';

import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function LabelBottomNavigation() {
  // Define state to manage selected navigation option
  const [value, setValue] = React.useState('recents');

  // Function to handle changes in navigation selection
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation
      sx={{
        width: '100%',
        position: 'sticky', // Keeps navigation fixed at the bottom
        backgroundColor: 'var(--white)', // Make sure to define this CSS variable
        bottom: 0,
        left: 0,
        boxShadow: '0 -2px 8px rgba(0, 0, 0, 0.1)', // Adds a slight shadow for aesthetics
      }}
      value={value}
      onChange={handleChange}
    >
      {/* Recents Navigation Action */}
      <BottomNavigationAction
        label="Recents"
        value="recents"
        icon={<RestoreIcon />}
        sx={{ color: 'var(--gray-dark)' }} // Optional customization of icon color
      />
      
      {/* Favorites Navigation Action */}
      <BottomNavigationAction
        label="Favorites"
        value="favorites"
        icon={<FavoriteIcon />}
        sx={{ color: 'var(--gray-dark)' }}
      />
      
      {/* Nearby Navigation Action */}
      <BottomNavigationAction
        label="Nearby"
        value="nearby"
        icon={<LocationOnIcon />}
        sx={{ color: 'var(--gray-dark)' }}
      />
      
      {/* Folder Navigation Action */}
      <BottomNavigationAction
        label="Folder"
        value="folder"
        icon={<FolderIcon />}
        sx={{ color: 'var(--gray-dark)' }}
      />
    </BottomNavigation>
  );
}
