import React from 'react';
import { useCookies } from '../context/CookieContext';

const ProgressBar: React.FC = () => {
  const { cookies, cookiesForUpgrade } = useCookies();
  const progress = Math.min((cookies / cookiesForUpgrade) * 100, 100);

  return (
    <div className="fixed bottom-0 left-0 w-full bg-gray-200 rounded-full h-4 mb-4">
      <div
        className="bg-purple-600 h-4 rounded-full"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
