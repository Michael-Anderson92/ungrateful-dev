'use client';

import * as React from 'react';
import Link from 'next/link';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import ResponsiveAppBar from '@/components/ResponsiveAppBar';
import FloatingActionButtons from '@/components/FloatingActionButtons';
import Box from '@mui/material/Box';
import LabelBottomNavigation from '@/components/LabelBottomNavigation';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ResponsiveSearchButton from '@/components/ResponsiveSearchButton';

// Liked products data
const likedProducts = [
  { id: 1, name: 'Chocolate Bar', color: '#FF5733', category: 'Sweets' },
  { id: 2, name: 'Vanilla Cone', color: '#FFC300', category: 'Ice Cream' },
  { id: 3, name: 'Strawberry Swirl', color: '#DAF7A6', category: 'Ice Cream' },
];

// All products data
const allProducts = [
  { id: 4, name: 'Mint Chip', color: '#C70039', category: 'Ice Cream' },
  { id: 5, name: 'Cookie Dough', color: '#900C3F', category: 'Ice Cream' },
  { id: 6, name: 'Rocky Road', color: '#581845', category: 'Ice Cream' },
  { id: 7, name: 'Candy Cane', color: '#FF69B4', category: 'Sweets' },
  { id: 8, name: 'Gummy Bears', color: '#FF8C00', category: 'Sweets' },
];

// Get recommended products
const recommendedProducts = allProducts.filter(
  (product) =>
    likedProducts.some((liked) => liked.category === product.category) &&
    !likedProducts.some((liked) => liked.id === product.id)
);

export default function Page() {
  // Theme for advertisements box
  const theme = createTheme({
    palette: {
      primary: {
        main: '#007FFF',
        dark: '#0066CC',
      },
    },
  });

  return (
    <div
      className="flex flex-col min-h-screen"
      style={{
        backgroundColor: 'var(--yellow)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* AppBar at the top */}
      <ResponsiveAppBar />

      {/* Main Content */}
      <main className="flex-grow flex flex-col p-6">
        {/* Floating Action Buttons */}
        <FloatingActionButtons />

        {/* Advertisement Box */}
        <ThemeProvider theme={theme}>
          <Box
            sx={{
              width: '100%',
              height: 200,
              marginTop: 2,
              marginBottom: 2,
              borderRadius: 1,
              backgroundColor: 'rgba(235, 242, 250, 0.5)',
              backgroundImage: 'url(./backgrounds/icecream-bars.webp)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              '&:hover': {
                bgcolor: 'primary.dark',
              },
            }}
          >
            <h1 className="text-center text-3xl mt-3 font-semibold text-red-400">
              Summer Specials!
            </h1>
          </Box>
        </ThemeProvider>

        {/* Recommendations Section */}
        <h1 className="text-center text-2xl font-semibold">You might like these</h1>
        <div
          style={{
            display: 'flex',
            overflowX: 'auto',
            gap: '16px',
            padding: '8px',
          }}
        >
          {recommendedProducts.map((item) => (
            <div
              key={item.id}
              style={{
                flex: '0 0 28%',
                aspectRatio: '1 / 1',
                backgroundColor: item.color,
                borderRadius: '8px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                fontSize: '1rem',
                fontWeight: 'bold',
              }}
            >
              {item.name}
            </div>
          ))}
        </div>

        {/* More Content Section */}
        <h1 className="text-center text-2xl font-semibold mt-2">More stuff</h1>
        <div
          style={{
            display: 'grid',
            gap: '16px',
            padding: '8px',
            gridTemplateColumns: 'repeat(2, 1fr)',
          }}
        >
          {Array.from({ length: 8 }).map((_, index) => (
            <Box
              key={index}
              sx={{
                aspectRatio: '3 / 4',
                backgroundColor: 'rgba(235, 242, 250, 0.5)',
                borderRadius: 1,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
              }}
            />
          ))}
        </div>

        {/* Mission Section */}
        <div className="flex flex-col items-center mb-32">
          <h1 className="text-2xl font-semibold mt-2">Our Mission</h1>
          <p className="text-center text-lg mt-2">
            Our mission is to provide a seamless and enjoyable shopping experience for our
            customers, offering a wide range of products that cater to their needs and
            preferences. We strive to create a platform that is user-friendly, efficient, and
            reliable, ensuring that our customers can easily find and purchase the products they
            love. Our commitment to quality and customer satisfaction drives us to continuously
            improve and innovate, making shopping with us a delightful experience.
          </p>
        </div>
      </main>

      {/* Fixed Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 z-10">
        <ResponsiveSearchButton />
        <LabelBottomNavigation />
      </div>
    </div>
  );
}
