import React from 'react';
import { useCookies } from '../context/CookieContext';

const UpgradeButton: React.FC = () => {
  const { buyUpgrade, cookiesForUpgrade } = useCookies();

  const handleClick = () => {
    buyUpgrade();
  };

  return (
    <button
      onClick={handleClick}
      className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-700 transition duration-300"
    >
      Buy Upgrade ({cookiesForUpgrade} cookies)
    </button>
  );
};

export default UpgradeButton;
