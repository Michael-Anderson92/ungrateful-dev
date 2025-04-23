'use client';

import { useParams } from 'next/navigation';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import ResponsiveAppBar from '@/components/ResponsiveAppBar';
import LabelBottomNavigation from '@/components/LabelBottomNavigation';
import ResponsiveSearchButton from '@/components/ResponsiveSearchButton';

export default function CategoriesPage() {
  const { id } = useParams(); // Retrieve the dynamic `id` from the URL

  return (
    
      <div 
      className="flex flex-col min-h-screen" 
      // style={{ backgroundImage: "url('/backgrounds/candybar-background-1.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
      style={{ backgroundColor: "var(--yellow)", backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <ResponsiveAppBar />
      <h1 className="text-center text-2xl font-semibold mt-6">
        Welcome to Categories {id}
      </h1>
      <p className="text-center mt-2">
        This is the Products page for Name: <strong>{id}</strong>.
      </p>
      <div className="fixed bottom-0 left-0 right-0 z-10">
            <ResponsiveSearchButton />
            <LabelBottomNavigation />
            </div>
    </div>
  );
}
