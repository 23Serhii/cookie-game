import React from 'react';
import { useCookies } from '../context/CookieContext';

const CookieCounter: React.FC = () => {
  const { cookies } = useCookies();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Cookies: {cookies}</h1>
    </div>
  );
};

export default CookieCounter;
