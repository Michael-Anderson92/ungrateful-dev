import Link from 'next/link';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import ResponsiveAppBar from '@/components/ResponsiveAppBar';
import LabelBottomNavigation from '@/components/LabelBottomNavigation';
import ResponsiveSearchButton from '@/components/ResponsiveSearchButton';

export default function Page() {
  return (
    <div 
      className="flex flex-col min-h-screen" 
      // style={{ backgroundImage: "url('/backgrounds/candybar-background-1.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
      style={{ backgroundColor: "var(--yellow)", backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {/* AppBar at the top */}
      <ResponsiveAppBar />

      {/* Main Content */}
      <main className="flex-grow flex flex-col p-6">
    

      </main>

      {/* Fixed Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 z-10">
      <ResponsiveSearchButton />
      <LabelBottomNavigation />
      </div>
    </div>
  );
}
