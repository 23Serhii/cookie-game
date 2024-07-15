import React from 'react';
import { CookieProvider } from './context/CookieContext';
import CookieButton from './components/CookieButton';
import CookieCounter from './components/CookieCounter';
import Level from './components/Level';
import UpgradeButton from './components/UpgradeButton';
import Achievements from './components/Achievements';
import ProgressBar from './components/ProgressBar';
import ResetButton from './components/ResetButton';
import '../src/styles/App.css';

const App: React.FC = () => {
  return (
    <CookieProvider>
      <div className="flex flex-col items-center justify-center h-screen space-y-4 bg-cookies-background bg-cover bg-center">
        <Level />
        <CookieCounter />
        <ProgressBar />
        <CookieButton />
        <div className="mt-8">
          <UpgradeButton />
        </div>
        <Achievements />
        <div className="mt-8">
          <ResetButton />
        </div>
      </div>
    </CookieProvider>
  );
};

export default App;
