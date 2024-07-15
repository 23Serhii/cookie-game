import React from 'react';
import { useCookies } from '../context/CookieContext';

const CookieButton: React.FC = () => {
  const { addCookie } = useCookies();

  const handleClick = () => {
    addCookie();
  };

  return (
    <button 
      onClick={handleClick} 
      className="bg-yellow-500 text-white p-10 rounded-full shadow-lg hover:bg-yellow-600 transition duration-300 flex items-center justify-center text-4xl w-32 h-32"
    >
      🍪
    </button>
  );
};

export default CookieButton;
