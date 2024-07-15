import React from 'react';
import { useCookies } from '../context/CookieContext';

const Leaderboard: React.FC = () => {
  const { leaderboard } = useCookies();

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold">Leaderboard</h2>
      <ul className="list-disc list-inside">
        {leaderboard.map((leader, index) => (
          <li key={index}>{leader.username}: {leader.cookies} cookies</li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
