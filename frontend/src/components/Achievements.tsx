import React, { useEffect, useState } from 'react';
import { useCookies } from '../context/CookieContext';
import '../styles/Achievements.css';

const Achievements: React.FC = () => {
  const { cookies } = useCookies();
  const [visibleAchievement, setVisibleAchievement] = useState<string | null>(null);

  useEffect(() => {
    if (cookies % 100 === 0 && cookies !== 0) {
      setVisibleAchievement(`${cookies} Cookies!`);
      const timeout = setTimeout(() => {
        setVisibleAchievement(null);
      }, 5000); // Зникають через 5 секунд

      return () => clearTimeout(timeout);
    }
  }, [cookies]);

  return (
    <div className="fixed bottom-0 right-0 m-4 space-y-2">
      {visibleAchievement && (
        <div className="bg-green-500 bg-opacity-50 text-white px-4 py-2 rounded border-2 border-green-700 shadow-lg transition-opacity duration-300">
          {visibleAchievement}
        </div>
      )}
    </div>
  );
};

export default Achievements;
