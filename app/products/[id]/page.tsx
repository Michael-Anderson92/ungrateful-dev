'use client';

import { useParams } from 'next/navigation';

export default function ProductsPage() {
  const { id } = useParams(); // Retrieve the dynamic `id` from the URL

  return (
    <div>
      <h1 className="text-center text-2xl font-semibold mt-6">
        Welcome to Products {id}
      </h1>
      <p className="text-center mt-2">
        This is the Products page for ID: <strong>{id}</strong>.
      </p>
    </div>
  );
}
