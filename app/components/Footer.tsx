'use client';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 text-center p-4 w-full mt-auto">
      <p>
        © {new Date().getFullYear()} Michael Anderson | CrossHaven Web Solutions.
      </p>
      <p className="text-sm italic">
        All rights reserved. Not that you'd want them.
      </p>
    </footer>
  );
}