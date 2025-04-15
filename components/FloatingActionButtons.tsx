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
    <div className="flex mt-4 justify-center items-center space-x-8">
        <div className="flex flex-col items-center text-center font-semibold">
      <Fab href ="best-sellers" sx={{backgroundColor: 'var(--white)', marginBottom: 1 }}  size="large"  aria-label="">
        +
      </Fab>
      Best Sellers
      </div>
      <div className="flex flex-col items-center text-center font-semibold">
      <Fab href="/categories" sx={{backgroundColor: 'var(--white)', marginBottom: 1 }} size="large"  aria-label="">
        +
      </Fab>
      Shop by Category
      </div>
      <div className="flex flex-col items-center text-center font-semibold">
      <Fab href="become-a-seller" sx={{backgroundColor: 'var(--white)', marginBottom: 1 }} size="large"  aria-label="">
        +
      </Fab>
      Top Sellers
      </div>
     
    </div>
  );
}
