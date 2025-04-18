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
              backgroundImage: 'url(./backgrounds/icecream-bars.webp)', // Add your image here
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              '&:hover': {
                bgcolor: 'primary.dark', // Changes background color on hover
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
          {Array.from({ length: 10 }).map((_, index) => (
            <Box
              key={index}
              sx={{
                flex: '0 0 28%',
                aspectRatio: '1 / 1',
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
