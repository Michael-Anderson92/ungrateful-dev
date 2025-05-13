import React from 'react';

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

interface ChatInterfaceProps {
  chatMessages?: ChatMessage[];
  isLoading: boolean;
  chatInput: string;
  setChatInput: (value: string) => void;
  handleChatSubmit: (e: React.FormEvent) => void;
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({ 
  chatMessages = [], 
  isLoading, 
  chatInput, 
  setChatInput, 
  handleChatSubmit 
}) => {
  return (
    <div className="mt-4 bg-gray-900 rounded-lg p-4 border border-indigo-700">
      {/* Chat messages container */}
      <div className="h-96 overflow-y-auto mb-4 p-2">
        {chatMessages.length === 0 ? (
          <p className="text-gray-500 text-center">Ask me about my crippling perfectionism...</p>
        ) : (
          chatMessages.map((message, index) => (
            <div
              key={index}
              className={`mb-2 p-3 rounded ${
                message.role === 'user' 
                  ? 'bg-indigo-800 text-white ml-8' 
                  : 'bg-gray-800 text-gray-200 mr-8'
              }`}
            >
              <p className="text-sm">{message.content}</p>
            </div>
          ))
        )}
        {isLoading && (
          <div className="bg-gray-800 text-gray-200 mr-8 p-3 rounded animate-pulse">
            <p className="text-sm">*types furiously while crying internally*</p>
          </div>
        )}
      </div>

      {/* Chat input form */}
      <form onSubmit={handleChatSubmit} className="flex gap-2">
        <input
          type="text"
          value={chatInput}
          onChange={(e) => setChatInput(e.target.value)}
          placeholder="Ask me something... or don't"
          className="flex-1 bg-gray-800 text-gray-200 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
          disabled={isLoading}
        />
        <button
          type="submit"
          disabled={isLoading}
          className="bg-indigo-700 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg disabled:opacity-50"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatInterface;