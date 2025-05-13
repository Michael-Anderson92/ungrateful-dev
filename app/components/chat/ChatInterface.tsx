import React from 'react';

const ChatInterface = ({ chatMessages = [], isLoading, chatInput, setChatInput, handleChatSubmit }) => {
  return (
    <div className="mt-4 bg-gray-900 rounded-lg p-4 border border-indigo-700">
      {/* Chat messages container */}
      <div className="h-48 overflow-y-auto mb-4 space-y-2">
        {chatMessages.map((msg, index) => (
          <div
            key={index}
            className={`p-2 rounded ${msg.role === 'user' ? 'bg-indigo-800 ml-8' : 'bg-gray-800 mr-8'}`}
          >
            {msg.content}
          </div>
        ))}
        {isLoading && (
          <div className="bg-gray-800 p-2 rounded mr-8">
            <span className="animate-pulse">Thinking...</span>
          </div>
        )}
      </div>

      {/* Chat input form */}
      <form onSubmit={handleChatSubmit} className="flex gap-2">
        <input
          type="text"
          value={chatInput}
          onChange={(e) => setChatInput(e.target.value)}
          placeholder="Ask me anything..."
          className="flex-1 bg-gray-800 text-gray-200 p-2 rounded-lg border border-indigo-600"
          required
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
  );
};

export default ChatInterface;