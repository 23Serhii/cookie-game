import React from 'react';
import { useCookies } from '../context/CookieContext';
import '../styles/EnergyBar.css';

const EnergyBar: React.FC = () => {
  const { energy, energyLimit } = useCookies();

  const progress = (energy / energyLimit) * 100;

  return (
    <div className="energy-bar-wrapper">
      <div className="energy-bar-label">⚡</div>
      <div className="energy-bar-container">
        <div className="energy-bar" style={{ height: `${progress}%` }}></div>
      </div>
    </div>
  );
};

export default EnergyBar;
