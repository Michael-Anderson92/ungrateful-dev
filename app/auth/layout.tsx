'use client';

import { useState } from 'react';

export default function AuthPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const validCredentials = {
    username: "dev_god",
    password: "iSeeTabsAndSpacesEqually"
  };

  const handleLogin = () => {
    if (username === validCredentials.username && password === validCredentials.password) {
      localStorage.setItem('superDevUnlocked', 'true');
      setMessage("Congratulations, you are now a Super Dev. This grants you absolutely no meaningful benefits.");
    } else {
      setMessage("Access denied. Either you entered incorrect credentials, or you’re just not worthy.");
    }
  };

  return (
    <main className="bg-black h-screen text-gray-300 flex flex-col justify-center items-center">
      <h1 className="text-5xl text-purple-500 font-bold">Super Dev Authentication</h1>
      <p className="text-center text-gray-500 mt-2 italic">
        Prove your worth and unlock… well, mostly sarcasm.
      </p>

      <div className="mt-6">
        <input
          type="text"
          placeholder="Username"
          className="bg-gray-700 text-gray-300 px-4 py-2 rounded-lg mb-4"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="bg-gray-700 text-gray-300 px-4 py-2 rounded-lg mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="bg-purple-900 hover:bg-purple-700 text-gray-300 font-bold py-3 px-6 rounded-lg"
          onClick={handleLogin}
        >
          Unlock Super Dev Mode
        </button>
      </div>

      {message && <p className="text-purple-400 mt-4">{message}</p>}
    </main>
  );
}