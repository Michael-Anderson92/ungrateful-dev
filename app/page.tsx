'use client';
// A testament to the futility of digital panhandling
import { useEffect, useState } from 'react';
import * as React from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


export default function Page() {
  const [devQuote, setDevQuote] = useState("*adjusts glasses* Oh, visitors. How... thrilling.");
  const [hoverMessage, setHoverMessage] = useState("");
  const [customAmount, setCustomAmount] = useState("");
  const [showCustomInput, setShowCustomInput] = useState(false);
  
  const devQuotes = [
    "*sips coffee* Have you tried turning it off and on again?",
    "My code doesn't have bugs, it has unexpected features",
    "*pushes up glasses* Actually, tabs are superior to spaces",
    "Git push --force, because I live dangerously",
    "*stares at keyboard* These Cherry MX Blues are my only friends",
    "Oh, you're donating? Guess I have to pretend I appreciate it.",
    "My commit messages are just increasingly desperate cries for help",
    "404: Motivation not found",
    "They said coding would be fun. They lied."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const randomQuote = devQuotes[Math.floor(Math.random() * devQuotes.length)];
      setDevQuote(randomQuote);
    }, 30000);

    return () => clearInterval(interval);
  }, []);

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
    <main className="bg-black min-h-screen text-gray-300 relative flex flex-col">
      <div className="flex-grow">
        <h1 className="text-center text-5xl pt-12 text-purple-500 font-bold">
          The Ungrateful Developer
        </h1>
        <p className="text-center text-gray-500 mt-2 italic">*sigh* ...I guess you can donate or whatever</p>
        
        <div className="flex justify-center mt-16">
          <div className="w-2/3 border-2 border-purple-800 rounded-lg bg-gray-900">
            <div className="text-center p-8">
              <h1 className="text-2xl text-purple-400">
                Oh look, another person who thinks they can buy my validation
                <p className="text-sm text-gray-500 mt-4">
                  "Your donation helps support my chronic eye-rolling condition"
                </p>
              </h1>
            </div>

            <div className="grid grid-cols-4 gap-6 p-8">
              <div className="text-xl text-center">
                <button 
                  className="w-full bg-purple-900 hover:bg-purple-700 text-gray-300 font-bold py-4 px-6 rounded-lg transform hover:scale-105 transition duration-200 shadow-lg"
                  onClick={() => handlePayment(1)}
                  onMouseEnter={() => setHoverMessage("Wow, a whole dollar? Do I owe you change?")}
                  onMouseLeave={() => setHoverMessage("")}
                >
                  $1
                  <p className="text-sm mt-2 text-gray-500">
                  *Slow Clap* <br></br>The Sympathy Donation
                  </p>
                </button>
              </div>
              <div className="text-xl text-center">
                <button 
                  className="w-full bg-purple-900 hover:bg-purple-700 text-gray-300 font-bold py-4 px-6 rounded-lg transform hover:scale-105 transition duration-200 shadow-lg"
                  onClick={() => handlePayment(5)}
                  onMouseEnter={() => setHoverMessage("Five bucks? Big spender over here. What, are you trying to impress me?")}
                  onMouseLeave={() => setHoverMessage("")}
                >
                  $5
                  <p className="text-sm mt-2 text-gray-500">
                  The Slightly Less Insulting Donation
                  </p>
                </button>
              </div>
              <div className="text-xl text-center">
                <button 
                  className="w-full bg-purple-900 hover:bg-purple-700 text-gray-300 font-bold py-4 px-6 rounded-lg transform hover:scale-105 transition duration-200 shadow-lg"
                  onClick={() => handlePayment(73.21)}
                  onMouseEnter={() => setHoverMessage("This completely arbitrary amount represents the cost of every bug that's made me reconsider my career choices. It covers lost sanity, shattered dreams, and the existential dread induced by CSS not aligning properly. Donate now and help fund my inevitable descent into madness.")}
                  onMouseLeave={() => setHoverMessage("")}
                >
                  $73.21
                  <p className="text-sm mt-2 text-gray-500">
                    The Developer's Emotional Damage Fund
                  </p>
                </button>
              </div>
              <div className="text-xl text-center relative">
                <button 
                  className="w-full bg-purple-900 hover:bg-purple-700 text-gray-300 font-bold py-4 px-6 rounded-lg transform hover:scale-105 transition duration-200 shadow-lg"
                  onClick={() => setShowCustomInput(true)}
                  onMouseEnter={() => setHoverMessage("Custom amount? Is this a calculated act of pity or just reckless generosity?")}
                  onMouseLeave={() => setHoverMessage("")}
                >
                  Custom Amount
                  <p className="text-sm mt-2 text-gray-500">
                    The Reckless Financial Decision
                  </p>
                </button>
                {showCustomInput && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-purple-900 rounded-lg p-4 z-10">
                    <input
                      type="number"
                      value={customAmount}
                      onChange={(e) => setCustomAmount(e.target.value)}
                      className="w-full mb-2 bg-purple-800 text-gray-300 p-2 rounded-lg"
                      placeholder="Amount"
                      min="0.01"
                      step="0.01"
                      autoFocus
                    />
                    <div className="flex gap-2 w-full">
                      <button 
                        onClick={() => setShowCustomInput(false)}
                        className="flex-1 bg-gray-700 text-sm py-2 rounded-lg hover:bg-gray-600"
                      >
                        Cancel
                      </button>
                      <button 
                        onClick={handleCustomPayment}
                        className="flex-1 bg-purple-700 text-sm py-2 rounded-lg hover:bg-purple-600"
                      >
                        Donate
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
            {hoverMessage && (
              <p className="text-center text-purple-400 pb-4 italic">{hoverMessage}</p>
            )}
          </div>
        </div>

        <div className="absolute top-8 right-8">
          <div className="relative w-32 h-32">
            {/* Developer cartoon - CSS art */}
            <div className="relative w-32 h-32">
              {/* Big head */}
              <div className="absolute w-28 h-28 bg-[#FFE4C4] rounded-full left-2 top-2"></div>
              {/* Glasses */}
              <div className="absolute w-24 h-6 border-2 border-black left-4 top-14">
                <div className="absolute w-10 h-5 bg-[#ADD8E6] left-0 rounded"></div>
                <div className="absolute w-10 h-5 bg-[#ADD8E6] right-0 rounded"></div>
              </div>
              {/* Hoodie */}
              <div className="absolute w-32 h-16 bg-gray-800 bottom-0 rounded-t-full"></div>
              {/* Speech bubble */}
              <div className="absolute -left-64 top-4 w-60 bg-white text-black p-4 rounded-lg">
                <p className="text-sm font-mono">{devQuote}</p>
                <div className="absolute -right-4 top-4 w-0 h-0 border-t-8 border-l-8 border-b-8 border-t-transparent border-l-white border-b-transparent"></div>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center text-gray-500 my-8 italic">
          Warning: Donations will not be met with sincere gratitude.  
          <br /> 
          In fact, they'll only fuel my deepening cynicism.  
          <br />
          If you're expecting a thank-you note, you must be new here.  
        </p>
      </div>
      <footer className="bg-gray-900 text-gray-400 text-center p-4 w-full mt-auto">
        <p>
          © {new Date().getFullYear()} Michael Anderson | CrossHaven Web Solutions. 
        </p>
        <p className="text-sm italic">
          All rights reserved. Not that you'd want them.
        </p>
      </footer>
    </main>
  );
}
