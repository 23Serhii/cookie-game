import React from 'react';
import { useCookies } from '../context/CookieContext';
import '../styles/ProgressBar.css';

const ProgressBar: React.FC = () => {
  const { cookies, cookiesForUpgrade } = useCookies();
  const progress = Math.min((cookies / cookiesForUpgrade) * 100, 100);

  return (
    <div className="progress-bar-container">
      <div
        className="progress-bar"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
