import React from 'react';
import { useCookies } from '../context/CookieContext';

const Level: React.FC = () => {
  const { level } = useCookies();

  return (
    <div>
      <h2 className="text-2xl font-semibold">Level: {level}</h2>
    </div>
  );
};

export default Level;
