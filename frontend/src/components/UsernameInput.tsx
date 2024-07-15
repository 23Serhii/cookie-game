import React, { useState } from 'react';
import { useCookies } from '../context/CookieContext';

const UsernameInput: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const { setUsername, username } = useCookies();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setUsername(inputValue.trim());
      setInputValue('');
    }
  };

  if (username) return null; 

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter your username"
        className="p-2 border border-gray-300 rounded"
      />
      <button type="submit" className="ml-2 p-2 bg-blue-500 text-white rounded">
        Submit
      </button>
    </form>
  );
};

export default UsernameInput;
