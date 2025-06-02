'use client';
// A testament to the futility of digital panhandling
import { useEffect, useState } from 'react';
import * as React from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Header from '../components/Header';
interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export default function Page() {
  const [devQuote, setDevQuote] = useState("*adjusts glasses* Oh, visitors. How... thrilling.");
  const [hoverMessages, setHoverMessages] = useState({
    dollar: "",
    five: "",
    emotional: "",
    custom: ""
  });
  const [customAmount, setCustomAmount] = useState("");
  const [showCustomInput, setShowCustomInput] = useState(false);
  const [chatInput, setChatInput] = useState("");
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const devQuotes = [
    "*sips coffee* Have you tried turning it off and on again?",
    "My code doesn't have bugs, it has unexpected features",
    "*pushes up glasses* Actually, tabs are superior to spaces",
    "*stares at keyboard* These Cherry MX Blues are my only friends",
    "Oh, you're donating? Guess I have to pretend I appreciate it.",
    "My commit messages are just increasingly desperate cries for help",
    "404: Motivation not found",
    "They said coding would be fun. They lied."
  ];

  const handleChatSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    setIsLoading(true);
    const userMessage = chatInput;
    setChatInput("");
    
    // Add user message to chat
    setChatMessages(prev => [...prev, { role: 'user', content: userMessage }]);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: userMessage }),
      });

      const data = await response.json();
      
      // Add AI response to chat
      setChatMessages(prev => [...prev, { role: 'assistant', content: data.response }]);
    } catch (error) {
      console.error('Chat error:', error);
      setChatMessages(prev => [...prev, { 
        role: 'assistant', 
        content: "Error processing request. Have you tried turning it off and on again?" 
      }]);
    }
    
    setIsLoading(false);
  };

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
    <main className="bg-gray-950 min-h-screen text-gray-200 relative flex flex-col">
      <div className="flex-grow px-4">
        {/* The Developer's Name and Quote */}
        <header className="relative flex flex-col md:flex-row items-center justify-between">
          <Header />
        </header>
              {/* The Developer's Image */}
        <div className="flex-grow px-4 mt-32">
          <div className="sticky flex flex-col md:flex-row items-start justify-between">
            <div className="sticky top-24 ml-auto w-full md:w-1/4 mt-8 md:mt-0 relative">
              {/* Speech bubble */}
              <div className="absolute right-full mr-4 top-1/4 transform -translate-y-1/2">
              <div className="bg-gray-100 text-gray-900 p-3 rounded-lg shadow-lg relative">
              <p className="text-sm font-mono">"{devQuote}"</p>
              <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-0 h-0 border-t-8 border-b-8 border-l-8 border-t-transparent border-b-transparent border-l-gray-100"></div>
          </div>
      </div>
      <img
        src="/ungrateful-dev.png"
        className="w-full object-cover rounded-lg shadow-lg"
        alt="Ungrateful Developer"
      />
      
      {/* Chat Interface */}
      <div className="mt-4 bg-gray-900 rounded-lg p-4 border border-indigo-700">
        <div className="h-48 overflow-y-auto mb-4 space-y-2">
          {chatMessages.map((msg, index) => (
            <div key={index} className={`p-2 rounded ${
              msg.role === 'user' ? 'bg-indigo-800 ml-8' : 'bg-gray-800 mr-8'
            }`}>
              {msg.content}
            </div>
          ))}
          {isLoading && (
            <div className="bg-gray-800 p-2 rounded mr-8">
              <span className="animate-pulse">Thinking...</span>
            </div>
          )}
        </div>
        <form onSubmit={handleChatSubmit} className="flex gap-2">
          <input
            type="text"
            value={chatInput}
            onChange={(e) => setChatInput(e.target.value)}
            placeholder="Ask me anything..."
            className="flex-1 bg-gray-800 text-gray-200 p-2 rounded-lg border border-indigo-600"
          />
          <button 
            type="submit"
            disabled={isLoading}
            className="bg-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-700 disabled:opacity-50"
          >
            Send
          </button>
        </form>
      </div>
    </div>
    </div>


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
                      *Slow Clap* <br></br>The Sympathy Donation
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

          <div className="flex justify-center mt-8">
            <div className="w-full md:w-2/3 border border-indigo-700 rounded-lg bg-gray-900 p-6">
              <h2 className="text-2xl text-indigo-300 mb-4 text-center">About the actual Developer</h2>
              <div className="space-y-4 text-gray-300 mx-4 md:mx-16 lg:mx-32">
                <p className="italic text-center text-gray-400">*adjusts glasses with a sigh* <span className="text-rose-500">(just-kidding!)</span></p>
                <p className="text-center">
                  <br></br><br></br>Software Engineer, Digital Artist, and all-around Nerd. That pretty much sums me up. 
                  
                  A typical work day for me consists of waking up, drinking the morning brew, and dreaming big. 
                  
                  I'm unashamedly grateful to God for blessing me with my two beautiful boys, and the ability to do what I love. 
                  
                  I'm also overly humorous, and I frankly don't care. <span></span>Sue me!<br></br><br></br>

                  I'm early in my journey as a developer, but I've adapted a <span className="text-green-500">growth mindset</span>, and I'm committed to learning, improving, and building things that help others and myself. 
                  
                  Whether it's solving a tricky bug or shipping a new feature, I find real joy in the process and the progress.

                  When I'm not writing code, you'll probably find me building LEGO contraptions with my kids, coaching baseball, or enjoying time with my family.

                  I keep things pretty simple, but I really believe you can make a difference from your own home if you stick with it. I appreciate every bit of support and encouragement along the way.

                  Yours truly,
                  Michael Anderson
                </p><br></br>
                
                <p className="text-center text-indigo-400 mt-4">
                  *sips coffee* <br></br><br></br>If life has taught me anything,<br></br> it's that hard work builds character.  <br></br>
                  Unfortunately, character doesn't pay the bills.
                </p>
              </div>
            </div>
          </div>

          <p className="text-center text-gray-400 my-8 italic px-4">
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
      </div>
    </main>
  );
}
