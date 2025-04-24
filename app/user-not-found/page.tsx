// app/user-not-found/page.tsx
import Link from 'next/link';

export default function UserNotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <h1 className="text-2xl font-bold mb-4 text-red-600">Please login or create an account before making your shop</h1>
      <div className="flex flex-col gap-4 mb-8">
        <Link href="/new-account" passHref>
          <button className="px-6 py-2 bg-blue-500 text-white rounded">Create Account</button>
        </Link>
        <Link href="/sign-in" passHref>
          <button className="px-6 py-2 bg-green-500 text-white rounded">Login</button>
        </Link>
      </div>
      <div className="mt-8">
        <Link href="/" passHref>
          <button className="px-4 py-2 border border-gray-400 rounded text-gray-700 bg-gray-100">Back to Dashboard</button>
        </Link>
      </div>
    </div>
  );
}
