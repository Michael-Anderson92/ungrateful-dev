'use client';

import { useParams } from 'next/navigation';

export default function ShopsPage() {
  const { id } = useParams(); // Retrieve the dynamic `id` from the URL

  return (
    <div>
      <h1 className="text-center text-2xl font-semibold mt-6">
        Welcome to Shop {id}
      </h1>
      <p className="text-center mt-2">
        This is the shop page for ID: <strong>{id}</strong>.
      </p>
    </div>
  );
}
