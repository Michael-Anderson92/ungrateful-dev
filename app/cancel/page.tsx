'use client';
import * as React from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Header from '../components/Header';

export default function CancelPage() {
  return (
    <main className="bg-gray-950 min-h-screen text-gray-200 flex flex-col">
      <div className="flex-grow px-4">
        <header className="relative flex flex-col items-center justify-between">
          <Header />
        </header>

        <div className="flex-grow flex items-center justify-center mt-48">
          <div className="w-full md:w-2/3 border border-indigo-700 rounded-lg bg-gray-900 p-6 md:p-8 text-center">
            <h1 className="text-2xl md:text-3xl text-indigo-300 mb-4">
              Oh, You Actually Canceled? Shocking.
            </h1>
            <p className="text-gray-400 italic mb-6">
              *sips coffee* I guess my charm was too much for your wallet to handle.
            </p>
            <p className="text-gray-300 mb-6">
              So, you've bailed on the grand adventure of funding my existential crisis. 
              Honestly, I'm not surprised. Most people can't handle the raw, unfiltered 
              cynicism that comes with supporting this operation. Your payment has been 
              canceled, and no funds were harmed in the process. 
            </p>
            <p className="text-gray-400 text-sm italic mb-6">
              (Don't expect a refund on the emotional investment, though. That's non-negotiable.)
            </p>
            <a
              href="/"
              className="inline-block bg-indigo-600 hover:bg-indigo-700 text-gray-200 font-bold py-2 px-6 rounded-lg transform hover:scale-105 transition duration-200"
            >
              Back to the Grind
            </a>
          </div>
        </div>

        <p className="text-center text-gray-400 my-8 italic px-4">
          Warning: Canceling doesn't make you immune to my sarcasm. <br />
          You're still on the hook for that.
        </p>
      </div>

      <footer className="bg-gray-900 text-gray-400 text-center p-4 w-full mt-auto">
        <p>
          © {new Date().getFullYear()} Michael Anderson | CrossHaven Web Solutions.
        </p>
        <p className="text-sm italic">
          All rights reserved. You didn't want them anyway.
        </p>
      </footer>
    </main>
  );
}