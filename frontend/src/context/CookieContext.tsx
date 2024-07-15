import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import axios from 'axios';

interface CookieContextType {
  userId: string | null;
  username: string;
  cookies: number;
  level: number;
  cookiesForUpgrade: number;
  achievements: string[];
  leaderboard: { username: string; cookies: number }[];
  setUsername: (username: string) => void;
  addCookie: () => void;
  buyUpgrade: () => void;
  resetGame: () => void;
}

const CookieContext = createContext<CookieContextType | undefined>(undefined);

export const useCookies = () => {
  const context = useContext(CookieContext);
  if (!context) {
    throw new Error('useCookies must be used within a CookieProvider');
  }
  return context;
};

export const CookieProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [userId, setUserId] = useState<string | null>(localStorage.getItem('userId'));
  const [username, setUsernameState] = useState<string>(localStorage.getItem('username') || '');
  const [cookies, setCookies] = useState<number>(() => {
    const savedCookies = localStorage.getItem('cookies');
    return savedCookies ? Number(savedCookies) : 0;
  });
  const [level, setLevel] = useState<number>(() => {
    const savedLevel = localStorage.getItem('level');
    return savedLevel ? Number(savedLevel) : 1;
  });
  const [achievements, setAchievements] = useState<string[]>(() => {
    const savedAchievements = localStorage.getItem('achievements');
    return savedAchievements ? JSON.parse(savedAchievements) : [];
  });
  const [leaderboard, setLeaderboard] = useState<{ username: string; cookies: number }[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (userId) {
      fetchLeaderboard();
    }
  }, [userId]);

  useEffect(() => {
    localStorage.setItem('cookies', cookies.toString());
  }, [cookies]);

  useEffect(() => {
    localStorage.setItem('level', level.toString());
  }, [level]);

  useEffect(() => {
    localStorage.setItem('achievements', JSON.stringify(achievements));
  }, [achievements]);

  const fetchLeaderboard = async () => {
    try {
      const response = await axios.get('http://localhost:5000/leaderboard');
      if (response.data.status === 'success') {
        setLeaderboard(response.data.leaderboard);
      }
    } catch (error) {
      console.error('Error fetching leaderboard:', error);
    }
  };

  const setUsername = async (username: string) => {
    try {
      const response = await axios.post('http://localhost:5000/create_user', { username });
      if (response.data.status === 'success') {
        setUserId(response.data.user_id);
        setUsernameState(username);
        localStorage.setItem('userId', response.data.user_id);
        localStorage.setItem('username', username);
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  const cookiesForUpgrade = level * 100;

  const addCookie = async () => {
    const newCookies = cookies + level;
    setCookies(newCookies);
    try {
      await axios.post('http://localhost:5000/update_cookies', {
        user_id: userId,
        cookies: newCookies,
      });
    } catch (error) {
      console.error('Error updating cookies:', error);
    }
  };

  const buyUpgrade = async () => {
    if (cookies >= cookiesForUpgrade) {
      const newCookies = cookies - cookiesForUpgrade;
      setCookies(newCookies);
      setLevel(level + 1);
      setError(null);
      try {
        await axios.post('http://localhost:5000/update_level', {
          user_id: userId,
          level: level + 1,
          cookies: newCookies,
        });
      } catch (error) {
        console.error('Error updating level:', error);
      }
    } else {
      setError('Not enough cookies to buy an upgrade.');
    }
  };

  const resetGame = () => {
    setCookies(0);
    setLevel(1);
    setAchievements([]);
    localStorage.removeItem('cookies');
    localStorage.removeItem('level');
    localStorage.removeItem('achievements');
  };

  return (
    <CookieContext.Provider
      value={{
        userId,
        username,
        cookies,
        level,
        cookiesForUpgrade,
        achievements,
        leaderboard,
        setUsername,
        addCookie,
        buyUpgrade,
        resetGame,
      }}
    >
      {children}
      {error && <div className="text-red-500">{error}</div>}
    </CookieContext.Provider>
  );
};
