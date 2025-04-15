'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';

export default function FloatingActionButtons() {
  return (
    
    <div className="flex mt-4 justify-center items-center" style={{ width: '100%' }}>
  <div
    className="flex flex-col items-center text-center font-semibold"
    style={{ flex: '0 0 33%', maxWidth: '33%' }}
  >
    <Fab
      href="best-sellers"
      sx={{ backgroundColor: 'var(--white)', backgroundImage: 'url(./backgrounds/best-sellers.webp)', backgroundSize: '150%', backgroundPosition: '-10px -5px', marginBottom: 1, }}
      size="large"
      aria-label=""
    >
      
    </Fab>
    Best Sellers
  </div>
  <div
    className="flex flex-col items-center text-center font-semibold"
    style={{ flex: '0 0 33%', maxWidth: '33%' }}
  >
    <Fab
      href="/categories"
      sx={{ backgroundColor: 'var(--white)', marginBottom: 1 }}
      size="large"
      aria-label=""
    >
      +
    </Fab>
    Categories
  </div>
  <div
    className="flex flex-col items-center text-center font-semibold"
    style={{ flex: '0 0 33%', maxWidth: '33%', overflowWrap: 'break-word' }}
  >
    {/* Make "Become a Seller" dynamic */}
    <Fab
      href="become-a-seller"
      sx={{ backgroundColor: 'var(--white)', backgroundImage: 'url(./backgrounds/become-a-seller.png)', backgroundSize: '130%', backgroundPosition: '-8px -5px', marginBottom: 1 }}
      size="large"
      aria-label=""
    >
      +
    </Fab>
    Start your bar!
  </div>
</div>
    );
    }   