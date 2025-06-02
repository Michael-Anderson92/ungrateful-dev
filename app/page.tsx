'use client';
import { useEffect, useState } from 'react';
import * as React from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Header from './components/Header';
import PaymentSection from './components/PaymentSection';
import DeveloperSection from './components/DeveloperSection';
import AboutDeveloperSection from './components/AboutDeveloperSection';
import Footer from './components/Footer';
import Welcome from './components/Welcome';

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export default function Page() {
  const [chatInput, setChatInput] = useState("");
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);

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

  return (
    <main className="bg-gray-950 min-h-screen">
      {/* Header spans full width */}
      <div className="w-full border-b border-gray-800 relative z-10">
        <Header />
      </div>
      
      {/* Main content area with explicit grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 min-h-[calc(100vh-120px)]">
        {/* Left Section - About and Payment (1/2 viewport on desktop) */}
        <div className="lg:col-span-2 mt-32 p-8 border-r border-gray-800 overflow-y-auto">
          <div className="space-y-8">
            {/* About Developer Section - wrapped for wider container */}
            <div className="flex justify-center">
              <div className="w-full max-w-4xl">
                <Welcome />
              </div>
            </div>
            
            {/* Payment Section - wrapped for wider container */}
            {/* <div className="flex justify-center">
              <div className="w-full max-w-4xl">
                <PaymentSection />
              </div>
            </div> */}
            
            {/* Warning Message */}
            
          </div>
        </div>
        
        
        {/* Right Section - Developer (1/3 viewport on desktop) */}
        <div className="lg:col-span-2 mt-32 p-8 border-r border-gray-800 overflow-y-auto">
          <div className="space-y-8">
            {/* About Developer Section - wrapped for wider container */}
            <div className="flex justify-center">
              <div className="w-full max-w-4xl">
                <Welcome />
              </div>
            </div>
            
            {/* Payment Section - wrapped for wider container */}
            {/* <div className="flex justify-center">
              <div className="w-full max-w-4xl">
                <PaymentSection />
              </div>
            </div> */}
            
            {/* Warning Message */}
            
          </div>
        </div>
      </div>
      
      {/* Footer spans full width */}
      <div className="w-full border-t border-gray-800">
        <Footer />
      </div>
    </main>
  );
}