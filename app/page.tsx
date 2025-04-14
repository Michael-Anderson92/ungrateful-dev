import Link from 'next/link';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import ResponsiveAppBar from '@/components/ResponsiveAppBar';
import FloatingActionButtons from '@/components/FloatingActionButtons';
import Box from '@mui/material/Box';
import LabelBottomNavigation from '@/components/LabelBottomNavigation';
import { ThemeProvider } from '@mui/material/styles';
import { BottomNavigation } from '@mui/material';
import ResponsiveSearchButton from '@/components/ResponsiveSearchButton';

export default function Page() {
  return (
    <div 
      className="flex flex-col min-h-screen" 
      // style={{ backgroundImage: "url('/backgrounds/candybar-background-1.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
      style={{ backgroundColor: "var(--yellow)", backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {/* AppBar at the top */}
      <ResponsiveAppBar position="fixed" />

      {/* Main Content */}
      <main className="flex-grow flex flex-col p-6">
        <FloatingActionButtons />
        <ThemeProvider
          theme={{
            palette: {
              primary: {
                main: '#007FFF',
                dark: '#0066CC',
              },
            },
          }}
        >
          <Box
          
            sx={{
              width: '100%',
              height: 200,
              marginTop: 2,
              marginBottom: 2,
              borderRadius: 1,
              backgroundColor: 'rgba(235, 242, 250, 0.5)',
              '&:hover': {
                bgcolor: 'primary.dark',
              },
            }}
          />
        </ThemeProvider>

        <h1 className="text-center text-2xl font-semibold">You might like these</h1>

        {/* Horizontal scrolling list */}
        <div style={{ display: 'flex', overflowX: 'auto', gap: '16px', padding: '8px' }}>
          {Array.from({ length: 10 }).map((_, index) => (
            <Box
              key={index}
              sx={{
                flex: '0 0 28%',
                aspectRatio: '1 / 1',
                backgroundColor: 'rgba(235, 242, 250, 0.5)',
                marginTop: 1,
                marginBottom: 1,
                borderRadius: 1,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
              }}
            >
              {/* Optional content */}
            </Box>
          ))}
        </div>

        <h1 className="text-center text-2xl font-semibold mt-2">More stuff</h1>

        {/* Grid-based layout */}
        <div style={{ display: 'grid', gap: '16px', padding: '8px', gridTemplateColumns: 'repeat(2, 1fr)' }}>
          {Array.from({ length: 8 }).map((_, index) => (
            <Box
              key={index}
              sx={{
                aspectRatio: '3 / 4',
                backgroundColor: 'rgba(235, 242, 250, 0.5)',
                marginTop: 1,
                borderRadius: 1,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
              }}
            >
              {/* Optional content */}
            </Box>
          ))}
        </div>
        <div className="flex flex-col items-center mb-32">
          <h1 className="text-2xl font-semibold mt-2">Our Mission</h1>
          <p className="text-center text-lg mt-2">
            Our mission is to provide a seamless and enjoyable shopping experience for our customers, offering a wide range of products that cater to their needs and preferences.
            We strive to create a platform that is user-friendly, efficient, and reliable, ensuring that our customers can easily find and purchase the products they love. Our commitment to quality and customer satisfaction drives us to continuously improve and innovate, making shopping with us a delightful experience.
          </p>
        </div>

        {/* <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
          <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
            <p className={`text-xl text-gray-800 md:text-3xl md:leading-normal`}></p>
            <Link
              href="/login"
              className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base">
            </Link>
          </div>
          <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
            Add Hero Images Here
          </div>
        </div> */}
      </main>

      {/* Fixed Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 z-10">
      <ResponsiveSearchButton />
      <LabelBottomNavigation />
      </div>
    </div>
  );
}
