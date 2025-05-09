'use client';

import * as React from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


export default function Page() {

  const handlePayment = async (amount) => {
    const res = await fetch('/api/checkout', {
      method: 'POST',
      body: JSON.stringify({ amount }),
    });
    const { url } = await res.json();
    window.location.href = url;
  };
  
  

  return (
    <main className="bg-slate-500 h-screen">
      <h1 className="text-center text-3xl pt-8">
        The ungrateful dev
      </h1>
      <div className="grid grid-rows-2 w-1/3 h-1/3 border-2 mx-auto mt-24">
  
  <div className="row-span-1 bg-slate-200 text-center p-4">
    <h1 className="text-lg">Clickasdfasdf to donate</h1>
  </div>


  <div className="grid grid-cols-3 row-span-1">
  
  
    <div className="bg-slate-200 text-3xl text-center p-4"><button onClick={() => handlePayment(1)}>Donate $1</button></div>
    <div className="bg-slate-200 text-3xl text-center p-4">or</div>
    <div className="bg-slate-200 text-3xl text-center p-4"><button onClick={() => handlePayment(5)}>Custom Amount</button></div>
  </div>
</div>
    </main>
  );
}
