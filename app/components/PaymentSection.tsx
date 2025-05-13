'use client';

import { useState } from 'react';

interface HoverMessages {
  dollar: string;
  five: string;
  emotional: string;
  custom: string;
}

export default function PaymentSection() {
  const [showCustomInput, setShowCustomInput] = useState(false);
  const [customAmount, setCustomAmount] = useState("");
  const [hoverMessages, setHoverMessages] = useState<HoverMessages>({
    dollar: "",
    five: "",
    emotional: "",
    custom: ""
  });

  const handlePayment = async (amount: number) => {
    const amountInCents = Math.round(amount * 100);  // Converts 73.21 -> 7321 cents correctly
    const res = await fetch('/api/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount: amountInCents }),
    });
    const { url } = await res.json();
    window.location.href = url;
  };

  const handleCustomPayment = () => {
    const amount = parseFloat(customAmount);
    if (!isNaN(amount) && amount > 0) {
      handlePayment(amount);
      setShowCustomInput(false);
      setCustomAmount("");
    }
  };

  return (
    <div className="flex justify-center mt-8 md:mt-16">
      <div className="w-full md:w-2/3 border border-indigo-700 rounded-lg bg-gray-900">
        <div className="text-center p-4 md:p-8">
          <h1 className="text-xl md:text-2xl text-indigo-300">
            Oh look, another person who thinks they can buy my validation
            <p className="text-sm text-gray-400 mt-4">
              "Your donation helps support my chronic eye-rolling condition"
            </p>
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 p-4 md:p-8">
          <div className="text-xl text-center">
            <button
              className="w-full bg-indigo-800 hover:bg-indigo-700 text-gray-200 font-bold py-4 px-6 rounded-lg transform hover:scale-105 transition duration-200 shadow-lg relative"
              onClick={() => handlePayment(1)}
              onMouseEnter={() => setHoverMessages({ ...hoverMessages, dollar: "Wow, a whole dollar? Do I owe you change?" })}
              onMouseLeave={() => setHoverMessages({ ...hoverMessages, dollar: "" })}
            >
              $1
              <p className="text-sm mt-2 text-gray-400">
                *Slow Clap* <br/>The Sympathy Donation
              </p>
              {hoverMessages.dollar && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-48 bg-gray-100 text-gray-900 p-3 rounded-lg shadow-lg">
                  <p className="text-sm font-mono">{hoverMessages.dollar}</p>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-gray-100"></div>
                </div>
              )}
            </button>
          </div>
          <div className="text-xl text-center">
            <button
              className="w-full bg-indigo-800 hover:bg-indigo-700 text-gray-200 font-bold py-4 px-6 rounded-lg transform hover:scale-105 transition duration-200 shadow-lg relative"
              onClick={() => handlePayment(5)}
              onMouseEnter={() => setHoverMessages({ ...hoverMessages, five: "Five bucks? Big spender over here. What, are you trying to impress me?" })}
              onMouseLeave={() => setHoverMessages({ ...hoverMessages, five: "" })}
            >
              $5
              <p className="text-sm mt-2 text-gray-400">
                The Slightly Less Insulting Donation
              </p>
              {hoverMessages.five && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-48 bg-gray-100 text-gray-900 p-3 rounded-lg shadow-lg">
                  <p className="text-sm font-mono">{hoverMessages.five}</p>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-gray-100"></div>
                </div>
              )}
            </button>
          </div>
          <div className="text-xl text-center">
            <button
              className="w-full bg-indigo-800 hover:bg-indigo-700 text-gray-200 font-bold py-4 px-6 rounded-lg transform hover:scale-105 transition duration-200 shadow-lg relative"
              onClick={() => handlePayment(73.21)}
              onMouseEnter={() => setHoverMessages({ ...hoverMessages, emotional: "This completely arbitrary amount represents the cost of every bug that's made me reconsider my career choices. It covers lost sanity, shattered dreams, and the existential dread induced by CSS not aligning properly. Donate now and help fund my inevitable descent into madness." })}
              onMouseLeave={() => setHoverMessages({ ...hoverMessages, emotional: "" })}
            >
              $73.21
              <p className="text-sm mt-2 text-gray-400">
                The Developer's Emotional Damage Fund
              </p>
              {hoverMessages.emotional && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-64 bg-gray-100 text-gray-900 p-3 rounded-lg shadow-lg">
                  <p className="text-sm font-mono">{hoverMessages.emotional}</p>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-gray-100"></div>
                </div>
              )}
            </button>
          </div>
          <div className="text-xl text-center relative">
            <button
              className="w-full bg-indigo-800 hover:bg-indigo-700 text-gray-200 font-bold py-4 px-6 rounded-lg transform hover:scale-105 transition duration-200 shadow-lg relative"
              onClick={() => setShowCustomInput(true)}
              onMouseEnter={() => setHoverMessages({ ...hoverMessages, custom: "Custom amount? Is this a calculated act of pity or just reckless generosity?" })}
              onMouseLeave={() => setHoverMessages({ ...hoverMessages, custom: "" })}
            >
              Custom Amount
              <p className="text-sm mt-2 text-gray-400">
                The Reckless Financial Decision
              </p>
              {hoverMessages.custom && !showCustomInput && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-48 bg-gray-100 text-gray-900 p-3 rounded-lg shadow-lg">
                  <p className="text-sm font-mono">{hoverMessages.custom}</p>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-gray-100"></div>
                </div>
              )}
            </button>
            {showCustomInput && (
              <div
                className="absolute inset-0 flex flex-col items-center justify-center bg-indigo-800 rounded-lg p-4 z-10"
                onMouseLeave={() => {
                  setShowCustomInput(false);
                  setCustomAmount("");
                }}
              >
                <input
                  type="number"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  className="w-full mb-2 bg-indigo-700 text-gray-200 p-2 rounded-lg"
                  placeholder="Amount"
                  min="0.01"
                  step="0.01"
                  autoFocus
                />
                <div className="flex gap-2 w-full">
                  <button
                    onClick={() => setShowCustomInput(false)}
                    className="flex-1 bg-gray-600 text-sm py-2 rounded-lg hover:bg-gray-500"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleCustomPayment}
                    className="flex-1 bg-indigo-600 text-sm py-2 rounded-lg hover:bg-indigo-500"
                  >
                    Donate
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}