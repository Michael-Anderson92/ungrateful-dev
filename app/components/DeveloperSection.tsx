'use client';

import { useState, useEffect } from 'react';
import ChatInterface from './chat/ChatInterface';

interface DeveloperSectionProps {
  chatMessages: any[];
  isLoading: boolean;
  chatInput: string;
  setChatInput: (value: string) => void;
  handleChatSubmit: (e: React.FormEvent) => void;
}

export default function DeveloperSection({
  chatMessages,
  isLoading,
  chatInput,
  setChatInput,
  handleChatSubmit
}: DeveloperSectionProps) {
  const [devQuote, setDevQuote] = useState("*adjusts glasses* Oh, visitors. How... thrilling.");

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

  useEffect(() => {
    const interval = setInterval(() => {
      const randomQuote = devQuotes[Math.floor(Math.random() * devQuotes.length)];
      setDevQuote(randomQuote);
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center space-y-4 lg:max-h-[50vh] lg:overflow-hidden">
      {/* Developer Image with Speech Bubble */}
      <div className="relative w-full max-w-md lg:h-1/2 lg:min-h-0">
        {/* Speech bubble - positioned to the left of the image */}
        <div className="absolute left-0 top-1/4 transform -translate-x-full -translate-y-1/2 mr-4 hidden lg:block">
          <div className="bg-gray-100 text-gray-900 p-3 rounded-lg shadow-lg relative">
            <p className="text-sm font-mono">"{devQuote}"</p>
            <div className="absolute top-1/2 right-0 transform translate-x-full -translate-y-1/2 w-0 h-0 border-t-8 border-b-8 border-l-8 border-t-transparent border-b-transparent border-l-gray-100"></div>
          </div>
        </div>
        
        {/* Mobile Speech bubble - appears above on mobile */}
        <div className="lg:hidden mb-4">
          <div className="bg-gray-100 text-gray-900 p-3 rounded-lg shadow-lg relative">
            <p className="text-sm font-mono">"{devQuote}"</p>
          </div>
        </div>

        {/* Developer Image */}
        <img
          src="/ungrateful-dev.png"
          className="w-3/4 h-full object-cover rounded-lg shadow-lg"
          alt="Ungrateful Developer"
        />
      </div>
      
      {/* Chat Interface */}
      <div className="w-1/2 max-w-md lg:h-1/2 lg:overflow-hidden">
        <ChatInterface
          chatMessages={chatMessages}
          isLoading={isLoading}
          chatInput={chatInput}
          setChatInput={setChatInput}
          handleChatSubmit={handleChatSubmit}
        />
      </div>
    </div>
  );
}