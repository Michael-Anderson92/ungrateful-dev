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

export default function DeveloperSection2({
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
    <div className="flex flex-col mt-32 items-center justify-center border-2 border-red-500">
      <img
          src="/ungrateful-dev.png"
          className="w-1/2 h-full align-center object-cover rounded-lg shadow-lg"
          alt="Ungrateful Developer"
        />
        </div>
    
  );
}