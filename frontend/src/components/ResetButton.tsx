import React from 'react';
import { useCookies } from '../context/CookieContext';

const ResetButton: React.FC = () => {
  const { resetGame } = useCookies();

  return (
    <button
      onClick={resetGame}
      className="bg-red-500 text-white p-4 rounded-full shadow-lg hover:bg-red-700 transition duration-300"
    >
      Reset Game
    </button>
  );
};

export default ResetButton;
