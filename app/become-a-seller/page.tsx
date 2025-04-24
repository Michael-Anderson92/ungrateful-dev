

import ResponsiveAppBar from '@/components/ResponsiveAppBar';
import LabelBottomNavigation from '@/components/LabelBottomNavigation';
import ResponsiveSearchButton from '@/components/ResponsiveSearchButton';
import { getServerSession } from '../lib/auth'; // Correct the path
import { redirect } from 'next/navigation';

export default async function Page() {
  const session = await getServerSession();

  if (!session) {
    redirect('/user-not-found');
  }

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
        {/* Add your become-a-seller page content here */}
        <h1 className="text-3xl font-bold mb-6">Become a Seller</h1>
        {/* ...additional content/components for onboarding... */}
      </main>

      {/* Fixed Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 z-10">
        <ResponsiveSearchButton />
        <LabelBottomNavigation />
      </div>
    </div>
  );
}
