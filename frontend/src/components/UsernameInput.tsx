import React, { useState } from 'react';
import { useCookies } from '../context/CookieContext';

const UsernameInput: React.FC = () => {
  const [username, setUsername] = useState('');
  const { setUsername: saveUsername } = useCookies();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    saveUsername(username);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4">
      <input 
        type="text" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)} 
        className="border-2 border-gray-300 p-2 rounded"
        placeholder="Enter your username"
        required
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Start Game
      </button>
    </form>
  );
};

export default UsernameInput;
