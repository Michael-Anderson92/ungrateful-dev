'use client';

import { useState, useEffect } from 'react';
import ChatInterface from './chat/ChatInterface';

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

interface DeveloperSectionProps {
  chatMessages: ChatMessage[];
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
    <div className="flex flex-col mt-32 items-center justify-center border-2 border-amber-500">
      <div className="relative">
        <img
            src="/ungrateful-dev.png"
            className="w-1/2 h-full align-center object-cover rounded-lg shadow-lg mx-auto"
            alt="Ungrateful Developer"
          />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-amber-500 text-center text-6xl font-bold transform -rotate-12 bg-black bg-opacity-50 px-4 py-2 rounded-lg">
            UNDER CONSTRUCTION
          </h1>
        </div>
      </div>
    </div>
  );
}