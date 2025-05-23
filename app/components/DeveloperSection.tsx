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
    <div className="flex items-center justify-center h-full">
      <img
          src="/ungrateful-dev.png"
          className="w-1/2 h-auto object-cover rounded-lg shadow-lg"
          alt="Ungrateful Developer"
        />
    </div>
  );
}