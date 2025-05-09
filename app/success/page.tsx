'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function SuccessPage() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const donationAmount = sessionStorage.getItem('donationAmount');
    if (donationAmount) {
      setMessage(`Oh wow, you actually donated ${donationAmount} dollars? I suppose I should be impressed.`);
      sessionStorage.removeItem('donationAmount'); // Clear stored data after displaying
    } else {
      setMessage("You made it to the success page, yet you haven’t contributed to my caffeine addiction. Typical.");
    }
  }, []);

  return (
    <main className="bg-black h-screen text-gray-300 flex flex-col justify-center items-center">
      <h1 className="text-5xl text-purple-500 font-bold">Donation Complete*</h1>
      <p className="text-center text-gray-500 mt-2 italic">
        *Your generosity will be met with begrudging acknowledgment at best.
      </p>

      <p className="text-center text-purple-400 mt-6">{message}</p>

      <Link href="/">
        <button className="mt-6 bg-purple-900 hover:bg-purple-700 text-gray-300 font-bold py-3 px-6 rounded-lg">
          Go back to continue being a disappointment
        </button>
      </Link>

      <p className="text-gray-600 mt-8 text-sm">
        Refunds? Hilarious concept. But no.
      </p>
    </main>
  );
}