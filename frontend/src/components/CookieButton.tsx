import React, { useState } from 'react';
import { useCookies } from '../context/CookieContext';
import '../styles/CookieButton.css';

interface Click {
  id: number;
  x: number;
  y: number;
  emoji: string;
}

const emojis = ['🍪', '🧁', '🎂', '🍰', '🥧'];

const CookieButton: React.FC = () => {
  const { addCookie } = useCookies();
  const [clicks, setClicks] = useState<Click[]>([]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    addCookie();
    const rect = e.currentTarget.getBoundingClientRect();
    const newClick = {
      id: Date.now(),
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      emoji: emojis[Math.floor(Math.random() * emojis.length)]
    };
    setClicks([...clicks, newClick]);
    setTimeout(() => {
      setClicks((prevClicks) => prevClicks.filter(click => click.id !== newClick.id));
    }, 1000); // Зникає через 1 секунду
  };

  return (
    <div className="cookie-button-container">
      {clicks.map((click) => (
        <span
          key={click.id}
          className="click-anim"
          style={{ left: click.x, top: click.y }}
        >
          {click.emoji}
        </span>
      ))}
      <button 
        onClick={handleClick} 
        className="cookie-button"
      >
        🍪
      </button>
    </div>
  );
};

export default CookieButton;
